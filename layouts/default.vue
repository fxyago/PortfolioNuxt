<script setup lang="ts">

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <div class="w-full flex h-screen flex-col">
    <header class="header">
      <nav>
        <button @click="toggleDark()">
          isDark: {{ isDark }}
        </button>
      </nav>
    </header>

    <div class="w-full h-full">
      <slot>
      </slot>
    </div>

    <footer class="footer">
      Um footer teste
    </footer>
  </div>
</template>

<style scoped lang="postcss">

.header {
  @apply w-full max-h-fit
}

.footer {
  @apply w-full max-h-fit
}

</style>