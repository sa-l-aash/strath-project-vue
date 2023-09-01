<template>
  <div class="sliding-text-container">
    <div class="sliding-text">
      <!-- Display the slot content instead of the text prop -->
      <slot></slot>
    </div>

    <div class="content-container">
      <!-- Use the named slot content -->
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
.sliding-text-container {
  overflow: hidden;
}

.sliding-text {
  animation: slide-in 2s backwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
