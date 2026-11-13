import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

import { describe, expect, test } from 'vitest'

// an unresolved tag passes lint, typecheck and build and renders nothing, so deleted or renamed components are caught here
const SOURCE_DIRECTORY = resolve(import.meta.dirname, '../../../src')
const APP_DIRECTORY = join(SOURCE_DIRECTORY, 'app')

// registered globally by Vue and vue-i18n rather than through the component registry
const GLOBAL_COMPONENT_NAMES = new Set([
  'Component',
  'I18nT',
  'KeepAlive',
  'Suspense',
  'Teleport',
  'Transition',
  'TransitionGroup',
])

// emails render through nuxt-email-renderer, whose components live in a separate registry
const getVueFiles = (directory: string): string[] =>
  readdirSync(directory, { recursive: true, encoding: 'utf8' })
    .filter((path) => path.endsWith('.vue') && !path.startsWith('emails/'))
    .map((path) => join(directory, path))

const getRegisteredComponentNames = () =>
  new Set(
    readFileSync(join(SOURCE_DIRECTORY, '.nuxt/components.d.ts'), 'utf8')
      .matchAll(/^export const (\w+): /gm)
      .map(([, name]) => name),
  )

const getImportedNames = (content: string) =>
  new Set(
    [
      ...content.matchAll(/import\s+(?:type\s+)?(\w+)\s*(?:,|from)/g),
      ...content.matchAll(/import\s*(?:\w+\s*,\s*)?\{([^}]*)\}\s*from/g),
      ...content.matchAll(/components:\s*\{([^}]*)\}/g),
    ].flatMap(([, names = '']) =>
      names
        .split(',')
        .map(
          (name) =>
            name
              .split(/\s+as\s+/)
              .pop()
              ?.trim() ?? '',
        )
        .filter(Boolean),
    ),
  )

const toPascalCase = (kebabCase: string) =>
  kebabCase.replace(/(^|-)([a-z0-9])/g, (_, __, character: string) =>
    character.toUpperCase(),
  )

const getTemplateTagNames = (content: string) => {
  const template = content.match(/^<template[^>]*>([\s\S]*)^<\/template>/m)?.[1]

  if (!template) return []

  return [
    ...template.matchAll(/<([A-Z][\w]*)/g).map(([, name]) => name),
    ...template
      .matchAll(/<([a-z][a-z0-9]*(?:-[a-z0-9]+)+)[\s/>]/g)
      .map(([, name]) => toPascalCase(name)),
  ].map((name) => name.replace(/^Lazy(?=[A-Z])/, ''))
}

// unplugin-icons resolves `I<Collection><Icon>` tags at build time, so they never appear in the component registry
const isIconTag = (name: string) => /^I[A-Z]/.test(name)

describe('component tags', () => {
  const registeredNames = getRegisteredComponentNames()

  test.each(
    getVueFiles(APP_DIRECTORY).map((path) => [
      relative(APP_DIRECTORY, path),
      path,
    ]),
  )('%s resolves every component tag', (_, path) => {
    const content = readFileSync(path, 'utf8')
    const importedNames = getImportedNames(content)
    const unresolvedNames = getTemplateTagNames(content).filter(
      (name) =>
        !registeredNames.has(name) &&
        !importedNames.has(name) &&
        !GLOBAL_COMPONENT_NAMES.has(name) &&
        !isIconTag(name),
    )

    expect(unresolvedNames).toEqual([])
  })
})
