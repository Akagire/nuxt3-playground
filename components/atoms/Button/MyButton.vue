<template>
  <button>
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  color: String,
});
</script>
