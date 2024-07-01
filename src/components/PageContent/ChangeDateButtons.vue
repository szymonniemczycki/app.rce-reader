<template>
  <!-- ChangeDateButtons-->
  <div class="card mb-4">
    <div class="card-body d-flex justify-content-between">
      <template v-if="myDate >= '2018-01-01'">
        <div class="align-self-start" @click="$emit('changeDate', myDate, -1)">
          <a class="btn btn-secondary" href="#!"> Prev day </a>
        </div>
      </template>
      <template v-else>
        <div class="align-self-start">
          <a class="btn btn-light disabled" href="#!">Prev day </a>
        </div>
      </template>

      <div class="small text-muted text-center align-self-center">
        {{ myDate }}
      </div>

      <template v-if="myDate < todayDate">
        <div class="align-self-end" @click="$emit('changeDate', myDate, 1)">
          <a class="btn btn-secondary" href="#!">Next day </a>
        </div>
      </template>
      <template v-else>
        <div class="align-self-end">
          <a class="btn btn-light disabled" href="#!">Next day </a>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeDateButtons",

  props: {
    myDate: String,
    todayDate: String,
  },
};
</script>

<style scoped></style>
