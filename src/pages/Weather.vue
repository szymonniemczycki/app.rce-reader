<template>
  <div class="container mt-4">
    <div class="row justify-content-center min-vh-100">
      <div class="col-lg-12">
        <Suspense>
          <template #default>
            <PageContent page="weather" />
          </template>
          <template #fallback>
            <DataLoader />
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script>
import DataLoader from "@/components/PageContent/DataLoader.vue";
import PageContent from "@/components/PageContent/PageContent.vue";

export default {
  name: "WeatherPage",
  setup() {},
  components: {
    DataLoader,
    PageContent,
  },
};
</script>
