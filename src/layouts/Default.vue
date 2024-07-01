<template>
  <NavbarMenu />
  <slot />
  <FooterSection />
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "DefaultLayout",
  components: {
    NavbarMenu,
    FooterSection,
  },
};
</script>
