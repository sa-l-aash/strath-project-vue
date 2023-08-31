<template>
    <div class="sliding-text2-container">
      <div class="sliding-text2">
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
  .sliding-text2-container {
    overflow:hidden;
  }
  
  .sliding-text2 {
    animation: slide-in 2s backwards;
  }
  
  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  </style>
  