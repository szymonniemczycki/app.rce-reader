<template>
  <!-- Footer-->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; RCE reader {{ currYear }}</p>
    </div>
  </footer>
</template>

<script>
import { getTodayFormated } from "@/utils/getFormatedDate.js";

export default {
  name: "FooterSection",
  props: {
    msg: String,
  },

  setup() {
    return {
      currYear: getTodayFormated(true),
    };
  },
};
</script>

<style scoped>
footer {
  min-height: 12vh;
}
</style>
