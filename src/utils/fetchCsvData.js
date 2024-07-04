import { ref } from "vue";

export async function fetchCsvData(csvDate) {

    const allCsvData = ref(null);
    const allCsvDataResponse = await fetch(
        `./resources/prices/${csvDate.replaceAll("-", "")}.csv`
    );

    if (!allCsvDataResponse.ok) {
        return [];
    }

    allCsvData.value = await allCsvDataResponse.text();
    const allCsv = parseData(allCsvData.value);
    return allCsv;
}
fetchCsvData().catch((error) => {
    error.message;
});


function parseData(resultData) {
    let arrData = [];
    const line = resultData.split("\n");
    arrData.push(line);
    const csvData = [];

    for (let i = 1; i < arrData[0].length - 1; i++) {
        csvData[i - 1] = arrData[0][i].split(";");
        let fHour = parseInt(csvData[i - 1][1]);
        csvData[i - 1][1] = fHour < 10 ? "0" + fHour + ":00" : fHour + ":00";
    }

    return csvData;
}