export function prepareDataWidget(csvData, weatherData) {

    const { ...tableData } = weatherData;

    csvData.map((item, index) => {
        tableData.hourly.hour[index] = item[1];
        tableData.hourly.pricesHourly[index] = parseFloat(item[2].replace(",", "."));

        if (tableData.hourly.globalTiltedIrradiance && tableData.hourly.moneyValue) {
            tableData.hourly.moneyValue[index] = parseFloat((tableData.hourly.pricesHourly[index] / 1000 * tableData.hourly.globalTiltedIrradiance[index] / 1000 * (1.99 * 24) * 0.7).toFixed(2))
            // saved money = {price value [MWh]} / 1000 * {Tilted Irradiance [W/m2] * 1000} * ({m2 in 1 PV panel} * {number of PV panels}) * {shading factor}
        }

    });
    return tableData



}   