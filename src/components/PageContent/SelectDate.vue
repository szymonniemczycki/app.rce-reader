<template>
  <!-- SelectDate widget-->
  <div class="card mb-4">
    <div class="card-header">Select Date</div>
    <div class="card-body">
      <form class="row">
        <div class="input-group date" id="datepicker">
          <input
            type="date"
            id="date"
            class="form-control"
            min="2018-01-01"
            :max="todayDate"
            :value="myDate"
            @change="$emit('updateDate', $event.target.value)"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectDate",

  props: {
    myDate: String,
    todayDate: String,
  },
};
</script>

<style scoped></style>
