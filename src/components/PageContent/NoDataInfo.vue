<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="infoLabel text-center">
      <img
        class="noDataFound-icon"
        alt="no data found"
        src="@/static/img/no-data.png"
        width="250"
        height="216"
        data-holder-rendered="true"
      />
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>no data found for {{ myDate }}</p>
        </blockquote>
        <figcaption class="blockquote-footer">please change the date</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoDataInfo",
  props: {
    myDate: String,
  },
};
</script>

<style scoped>
.infoLabel {
  margin-bottom: 5%;
}
.blockquote-footer::after {
  content: " —";
}
.noDataFound-icon {
  margin-top: 5%;
  width: 250px;
}
</style>
