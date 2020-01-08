<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "APP",
  }
</script>

<style>

  @-webkit-keyframes fadeIn {
    0%  { opacity: 1; }
    10% { opacity: 0.7; }
    20% { opacity: 0.5; }
    30% { opacity: 0.3; }
    40% { opacity: 0.2; }
    50% { opacity: 0; }
    60% { opacity: 0.2; }
    70% { opacity: 0.3; }
    80% { opacity: 0.5; }
    90% { opacity: 0.7; }
    100% { opacity: 1; }
  }
  .btnLoad {
    animation: fadeIn 1.5s infinite;
  }

</style>
