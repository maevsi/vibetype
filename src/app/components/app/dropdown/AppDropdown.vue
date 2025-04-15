<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <slot name="trigger" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="rounded-lg border-none">
      <slot />
    </DropdownMenuContent>
  </DropdownMenu>
</template>
