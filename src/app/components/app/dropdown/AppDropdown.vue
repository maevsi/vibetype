<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <slot name="trigger" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="rounded-medium border-none">
      <slot />
    </DropdownMenuContent>
  </DropdownMenu>
</template>
