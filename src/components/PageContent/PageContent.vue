<template>
  <!-- Page content-->
  <main>
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-3">
          <Suspense>
            <template #default>
              <SelectDate
                :myDate="dateFormated"
                :todayDate="todayDate"
                @updateDate="updateNewDate"
              />
            </template>
            <template #fallback>
              <DataLoader />
            </template>
          </Suspense>
        </div>

        <template v-if="!!csvData.length || !!tableWidgetData.length">
          <div class="col-lg-10">
            <TableWidget
              :myDate="dateFormated"
              :csvData="csvData"
              :tableWidgetData="tableWidgetData"
            />

            <ChangeDateButtons
              :myDate="dateFormated"
              :todayDate="todayDate"
              @changeDate="changeDate"
            />

            <ChartWidget
              :myDate="dateFormated"
              :csvData="csvData"
              :chartWidgetData="tableWidgetData"
              :page="page"
            />

            <ChangeDateButtons
              :myDate="dateFormated"
              :todayDate="todayDate"
              @changeDate="changeDate"
            />
          </div>
        </template>
        <template v-else>
          <div class="col-lg-10">
            <NoDataInfo :myDate="dateFormated" />
            <ChangeDateButtons
              :myDate="dateFormated"
              :todayDate="todayDate"
              @changeDate="changeDate"
            />
          </div>
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";

import { getTodayFormated } from "../../utils/getFormatedDate.js";
import { fetchCsvData } from "../../utils/fetchCsvData.js";
import { fetchWeatherData } from "../../utils/fetchWeatherData.js";
import { prepareDataWidget } from "../../utils/prepareDataWidget.js";

import DataLoader from "./DataLoader.vue";
import TableWidget from "./TableWidget.vue";
import ChartWidget from "./ChartWidget.vue";
import SelectDate from "./SelectDate.vue";
import ChangeDateButtons from "./ChangeDateButtons.vue";
import NoDataInfo from "./NoDataInfo.vue";

export default {
  name: "PageContent",

  props: {
    myDate: String,
    page: String,
  },

  async setup(props) {
    const myDateValue = ref("");
    const dataFromCsv = ref("");
    const dataWeather = ref("");
    const tableWidgetData = ref({});

    myDateValue.value = getTodayFormated();

    dataFromCsv.value = await fetchCsvData(myDateValue.value);
    dataWeather.value = await fetchWeatherData(myDateValue.value);

    if (!!dataFromCsv.value.length && dataWeather.value.weather?.hourly) {
      tableWidgetData.value = await prepareDataWidget(
        dataFromCsv.value,
        dataWeather.value[props.page]
      );
    } else {
      dataFromCsv.value = [];
      tableWidgetData.value = [];
    }

    return {
      todayDate: myDateValue.value,
      dateFormated: myDateValue.value,
      csvData: dataFromCsv,
      tableWidgetData: tableWidgetData.value,
    };
  },

  components: {
    DataLoader,
    SelectDate,
    TableWidget,
    ChartWidget,
    ChangeDateButtons,
    NoDataInfo,
  },

  methods: {
    async updateNewDate(newDate) {
      let csvData = [];
      let weatherInfo = [];

      this.dateFormated = newDate;

      csvData = await fetchCsvData(newDate);
      weatherInfo = await fetchWeatherData(newDate);

      if (csvData.length !== 0 && weatherInfo.weather?.hourly) {
        this.csvData = csvData;
        this.tableWidgetData = prepareDataWidget(csvData, weatherInfo[this.page]);
      } else {
        this.csvData = [];
        this.tableWidgetData = [];
      }
    },

    changeDate(currDate, diff) {
      const date = new Date(currDate);
      const changeDay = new Date(date);
      changeDay.setDate(date.getDate() + diff);
      const m = changeDay.getMonth() + 1;
      const mm = m < 10 ? "0" + m : m;
      const d = changeDay.getDate();
      const dd = d < 10 ? "0" + d : d;
      const changedDate = date.getFullYear() + "-" + mm + "-" + dd;

      this.updateNewDate(changedDate);
    },
  },
};
</script>

<style></style>
