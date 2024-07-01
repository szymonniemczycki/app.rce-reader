<template>
  <!-- TableWidget-->
  <div class="card mb-4 position-relative">
    <div class="container">
      <div class="row">
        <div class="tableData col-12">
          <table class="table table-striped text-center">
            <thead class="mainHeader">
              <th>
                <tr colspan="10">
                  {{
                    myDate
                  }}
                </tr>
              </th>
            </thead>
            <thead class="subHeader">
              <th>
                <tr
                  v-for="(item, index) in tableWidgetData.label"
                  :key="index"
                  class="dynCol"
                >
                  {{
                    item
                  }}
                </tr>
              </th>
            </thead>

            <thead class="units">
              <th>
                <tr
                  v-for="(item, index) in tableWidgetData.units"
                  :key="index"
                  class="dynCol"
                >
                  {{
                    item
                  }}
                </tr>
              </th>
            </thead>

            <tbody class="col-12">
              <template v-for="(item, index) in tableWidgetData.hourly" :key="index">
                <tr class="dynCol">
                  <template v-for="(cell, index) in item" :key="index">
                    <td>
                      {{ cell }}
                    </td>
                  </template>
                </tr>
              </template>
            </tbody>
            <tbody>
              <td class="col-12 sum" v-if="getSumEnergyProduction != 0">
                <tr class="col-9 col-md-7"></tr>
                <tr class="col-3 col-md-5 value">
                  daily production:
                  <span style="white-space: nowrap">
                    {{ getSumEnergyProduction }}
                    kWh/day
                  </span>
                </tr>
              </td>

              <td class="col-12 sum" v-if="getSumPricesHourly != 0">
                <tr class="col-9 col-md-7"></tr>
                <tr class="col-3 col-md-5 value">
                  daily saving:
                  <span style="white-space: nowrap">
                    {{ getSumPricesHourly }}
                    PLN/day
                  </span>
                </tr>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "TableWidget",

  props: {
    myDate: String,
    csvData: Array,
    tableWidgetData: Object,
  },

  setup(props) {
    const getSumPricesHourly = computed(() => {
      let sum = 0;
      if (props.tableWidgetData.hourly.moneyValue) {
        props.tableWidgetData.hourly.moneyValue.map((v) => (sum = sum + v));
      }
      return sum.toFixed(2);
    });

    const getSumEnergyProduction = computed(() => {
      let sum = 0;
      if (props.tableWidgetData.hourly.energyProduction) {
        props.tableWidgetData.hourly.energyProduction.map((v) => (sum = sum + v));
      }
      return sum.toFixed(2);
    });

    const widthCol = computed(() => {
      return Math.floor(100 / Object.keys(props.tableWidgetData.hourly).length) + "%";
    });

    return {
      getSumPricesHourly,
      getSumEnergyProduction,
      widthCol,
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
tr {
  display: block;
  float: left;
}
th,
td {
  display: block;
}

thead.mainHeader tr {
  width: 100%;
}

thead {
  position: sticky;
}

thead.mainHeader {
  top: 55px;
}
thead.subHeader {
  top: 96px;
}

thead.units {
  top: 141px;
  font-size: 0.8em;
}

thead.subHeader tr,
thead.units tr {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
}

thead.subHeader tr {
  min-height: 45px;
}

thead.units tr {
  font-weight: 600;
}

thead.subHeader tr.dynCol,
thead.units tr.dynCol,
tbody > tr.dynCol {
  width: v-bind(widthCol);
}

tbody > tr.dynCol {
  color: red;
}

tbody > tr:last-child {
  font-weight: 600;
}

.sum > tr {
  border: none;
}

.sum > tr.value {
  font-weight: 600;
  font-size: 1.2em;
  /* width: 14%; */
  border-bottom: 3px solid #000;
}

@media only screen and (max-width: 1400px) {
  thead.subHeader tr {
    min-height: 60px;
  }
}

@media only screen and (max-width: 1200px) {
  .tableData {
    position: relative;
    overflow-x: auto;
  }

  thead.mainHeader,
  thead.subHeader {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  table {
    width: 800px;
  }

  thead.subHeader tr {
    min-height: 60px;
  }

  thead.units {
    top: 100px;
  }
}
</style>
