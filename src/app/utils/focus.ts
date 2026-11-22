/** Moves focus to the visible page heading, so that keyboard and screen reader users start on the new content instead of a control that is gone. */
export const focusHeading = async () => {
  await nextTick()

  const heading = Array.from(document.querySelectorAll('h1')).find((element) =>
    element.checkVisibility(),
  )

  if (!heading) return

  heading.tabIndex = -1
  heading.focus({ preventScroll: true })
}
