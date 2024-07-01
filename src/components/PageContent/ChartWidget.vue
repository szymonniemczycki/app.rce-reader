<template>
  <!-- ChartWidget-->
  <div class="card mb-4 position-relative">
    <div class="container">
      <div class="row">
        <div class="chartWidget col-12">
          <vue3-chart-js
            :id="barChart.id"
            ref="chartRef"
            :type="barChart.type"
            :data="barChart.data"
            :height="chartHeight"
          ></vue3-chart-js>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

const temperatureColor = {
  0: "#ff0000",
  1: "#ffc100",
  2: "#ffff00",
  3: "#d6ff00",
  4: "#63ff00",
};

function getChartData(widgetChartData, page) {
  const label = widgetChartData.hour;
  let barData = [];
  const restData = { ...widgetChartData };

  if (page === "solar") {
    barData = widgetChartData.moneyValue;
    delete restData.moneyValue;
  }
  if (page === "weather") {
    barData = widgetChartData.pricesHourly;
    delete restData.pricesHourly;
  }
  delete restData.hour;
  return { label: label, barData: barData, restData: restData };
}

function getColors(barChartData = []) {
  let arrPrices = new Array();
  let colorGroup = new Array();
  let arrPricesColored = new Array();

  arrPrices = barChartData.map((p) => p);

  const delta = Math.max(...arrPrices) - Math.min(...arrPrices);
  const countColors = Object.keys(temperatureColor).length;

  for (let i = 0; i < countColors + 1; i++) {
    colorGroup[i] = Math.min(...arrPrices) + (delta / countColors) * i;
  }
  colorGroup[colorGroup.length - 1]++;

  for (let i = 0; i < arrPrices.length; i++) {
    for (let y = 0; y < colorGroup.length; y++) {
      if (arrPrices[i] >= colorGroup[y] && arrPrices[i] < colorGroup[y + 1]) {
        arrPricesColored[i] = y;
      }
    }
  }

  return arrPricesColored;
}

export default {
  name: "App",
  props: {
    myDate: String,
    csvData: Array,
    chartWidgetData: Object,
    page: String,
  },
  components: {
    Vue3ChartJs,
  },

  setup(props) {
    const colorsLabel = ref([]);
    const infoLabel = ref([]);
    const barChartData = ref([null]);
    const configDatasetsCharts = ref([]);

    const { ...linearChartData } = getChartData(props.chartWidgetData.hourly, props.page);

    infoLabel.value = linearChartData.label;
    barChartData.value = linearChartData.barData;
    colorsLabel.value = getColors(barChartData.value);

    if (props.page === "solar") {
      configDatasetsCharts.value.solar = [
        {
          label: props.chartWidgetData.label.moneyValue,
          backgroundColor: colorsLabel.value.map(
            (colorGroup) => temperatureColor[colorGroup]
          ),
          data: barChartData.value.map((p) => p * 100),
          order: 1,
        },
        {
          label: props.chartWidgetData.label.pricesHourly,
          data: linearChartData.restData.pricesHourly,
          borderColor: "#FDB813",
          backgroundColor: "#FDB813",
          type: "line",
          order: 0,
        },
        {
          label: props.chartWidgetData.label.globalTiltedIrradiance,
          data: linearChartData.restData.globalTiltedIrradiance,
          borderColor: "#000",
          backgroundColor: "#000",
          type: "line",
          order: 0,
        },
      ];
    }

    if (props.page === "weather") {
      configDatasetsCharts.value.weather = [
        {
          label: props.chartWidgetData.label.pricesHourly,
          data: barChartData.value,
          backgroundColor: colorsLabel.value.map(
            (colorGroup) => temperatureColor[colorGroup]
          ),
          order: 1,
        },
        {
          label: props.chartWidgetData.label.temperature2m,
          data: linearChartData.restData.temperature2m.map((p) => p * 10),
          borderColor: "#000",
          backgroundColor: "#000",
          type: "line",
          order: 0,
        },
        {
          label: props.chartWidgetData.label.cloudCover,
          data: linearChartData.restData.cloudCover,
          borderColor: "#739BD0",
          backgroundColor: "#739BD0",
          type: "line",
          order: 0,
        },
        {
          label: props.chartWidgetData.label.uvIndex,
          data: props.chartWidgetData.hourly.uvIndex.map((uv) => uv * 100),
          borderColor: "#4B1E88",
          backgroundColor: "#4B1E88",
          type: "line",
          order: 0,
        },
        {
          label: props.chartWidgetData.label.sunshineDuration,
          data: linearChartData.restData.sunshineDuration,
          borderColor: "#FDB813 ",
          backgroundColor: "#FDB813 ",
          type: "line",
          order: 0,
        },
      ];
    }

    watch(
      () => props.chartWidgetData,
      async () => {
        const { ...linearChartData } = getChartData(
          props.chartWidgetData.hourly,
          props.page
        );
        infoLabel.value = linearChartData.label;
        barChartData.value = linearChartData.barData;
        colorsLabel.value = getColors(barChartData.value);

        if (props.page === "solar") {
          configDatasetsCharts.value.solar = [
            {
              label: props.chartWidgetData.label.moneyValue,
              backgroundColor: colorsLabel.value.map(
                (colorGroup) => temperatureColor[colorGroup]
              ),
              data: barChartData.value.map((p) => p * 100),
              order: 1,
            },
            {
              label: props.chartWidgetData.label.pricesHourly,
              data: linearChartData.restData.pricesHourly,
              borderColor: "#FDB813",
              backgroundColor: "#FDB813",
              type: "line",
              order: 0,
            },
            {
              label: props.chartWidgetData.label.globalTiltedIrradiance,
              data: linearChartData.restData.globalTiltedIrradiance,
              borderColor: "#000",
              backgroundColor: "#000",
              type: "line",
              order: 0,
            },
          ];
        }

        if (props.page === "weather") {
          configDatasetsCharts.value.weather = [
            {
              label: props.chartWidgetData.label.pricesHourly,
              data: barChartData.value,
              backgroundColor: colorsLabel.value.map(
                (colorGroup) => temperatureColor[colorGroup]
              ),
              order: 1,
            },
            {
              label: props.chartWidgetData.label.temperature2m,
              data: linearChartData.restData.temperature2m.map((p) => p * 10),
              borderColor: "#000",
              backgroundColor: "#000",
              type: "line",
              order: 0,
            },
            {
              label: props.chartWidgetData.label.cloudCover,
              data: linearChartData.restData.cloudCover,
              borderColor: "#739BD0",
              backgroundColor: "#739BD0",
              type: "line",
              order: 0,
            },
            {
              label: props.chartWidgetData.label.uvIndex,
              data: props.chartWidgetData.hourly.uvIndex.map((uv) => uv * 100),
              borderColor: "#4B1E88",
              backgroundColor: "#4B1E88",
              type: "line",
              order: 0,
            },
            {
              label: props.chartWidgetData.label.sunshineDuration,
              data: linearChartData.restData.sunshineDuration,
              borderColor: "#FDB813 ",
              backgroundColor: "#FDB813 ",
              type: "line",
              order: 0,
            },
          ];
        }
        updateChart();
      }
    );

    const chartRef = ref(null);

    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
        scales: {
          y: {
            min: 0,
            max: 550,
            ticks: {
              callback: function (value) {
                return value;
              },
            },
          },
        },
      },
      data: {
        labels: infoLabel.value,
        datasets: configDatasetsCharts.value[props.page],
      },
    };

    const updateChart = () => {
      barChart.data.labels = infoLabel.value;
      barChart.data.datasets = configDatasetsCharts.value[props.page];

      if (chartRef.value !== null) {
        chartRef.value.update(10);
      }
    };

    let chartHeight = 150;

    if (window.screen.width <= 576) {
      chartHeight = 350;
    } else if (window.screen.width >= 577 && window.screen.width <= 768) {
      chartHeight = 250;
    } else if (window.screen.width >= 769 && window.screen.width <= 800) {
      chartHeight = 200;
    }

    return {
      barChart,
      updateChart,
      chartRef,
      chartHeight,
    };
  },
};
</script>

<style scoped>
.row > .chartWidget {
  width: 94%;
  margin: 2% 3%;
  position: relative;
  overflow-x: auto;
}
</style>
