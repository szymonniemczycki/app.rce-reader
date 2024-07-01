<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </component>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  overflow-y: scroll;
}
</style>
