import { fetchWeatherApi } from "openmeteo";

export async function fetchWeatherData(date) {

    const params = {
        latitude: 50.69580336480799,
        longitude: 17.90626837747831,
        start_date: date,
        end_date: date,
        hourly: [
            "temperature_2m",
            "cloud_cover",
            "uv_index",
            "sunshine_duration",
            "global_tilted_irradiance",
        ],
        timezone: "Europe/Berlin",
        tilt: 45,
        azimuth: 70,
        models: "best_match",
    };
    const url = "https://historical-forecast-api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    if (responses[0].bb.bytes_.length < 100) {
        return { weather: {}, solar: {} };
    }

    // Helper function to form time ranges
    const range = (start, stop, step) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const hourly = response.hourly();

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        hourly: {
            time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
                (t) => new Date((t + utcOffsetSeconds) * 1000)
            ),
            temperature2m: hourly.variables(0).valuesArray(),
            cloudCover: hourly.variables(1).valuesArray(),
            uvIndex: hourly.variables(2).valuesArray(),
            sunshineDuration: hourly.variables(3).valuesArray(),
            globalTiltedIrradiance: hourly.variables(4).valuesArray(),
        },
    };

    const weatherDataPublic = {
        hourly: {
            hour: [],
            temperature2m: [],
            cloudCover: [],
            uvIndex: [],
            sunshineDuration: [],
            pricesHourly: [],
        },
        label: {
            hour: "Hour",
            temperature2m: "Temperature",
            cloudCover: "Cloud Cover",
            uvIndex: "UV Index",
            sunshineDuration: "Sunshine Duration",
            pricesHourly: "Price of Energy",
        },
        units: {
            hour: "hh:mm",
            temperature2m: "°C",
            cloudCover: "%",
            uvIndex: "UVI",
            sunshineDuration: "s",
            pricesHourly: "PLN/MWh",
        }
    };

    const solarDataPublic = {
        hourly: {
            hour: [],
            globalTiltedIrradiance: [],
            energyProduction: [],
            pricesHourly: [],
            moneyValue: [],
        },
        label: {
            hour: "Hour",
            globalTiltedIrradiance: "Tilted Irradiance",
            energyProduction: "Energy Production",
            pricesHourly: "Price of Energy",
            moneyValue: "Saved Money",
        },
        units: {
            hour: "hh:mm",
            globalTiltedIrradiance: "W/m²",
            energyProduction: "kWh/h",
            pricesHourly: "PLN/MWh",
            moneyValue: "PLN/h",
        },
    };

    for (let i = 0; i < weatherData.hourly.time.length; i++) {
        weatherDataPublic.hourly.temperature2m[i] =
            weatherData.hourly.temperature2m[i].toFixed(1);
        weatherDataPublic.hourly.cloudCover[i] =
            weatherData.hourly.cloudCover[i];
        weatherDataPublic.hourly.uvIndex[i] =
            weatherData.hourly.uvIndex[i].toFixed(2);
        weatherDataPublic.hourly.sunshineDuration[i] =
            weatherData.hourly.sunshineDuration[i].toFixed(0) / 10;
    }

    for (let i = 0; i < weatherData.hourly.time.length; i++) {
        solarDataPublic.hourly.globalTiltedIrradiance[i] =
            weatherData.hourly.globalTiltedIrradiance[i].toFixed(2);
        solarDataPublic.hourly.energyProduction[i] =
            parseFloat((weatherData.hourly.globalTiltedIrradiance[i] * 47.76 * 0.21 * 0.7 / 1000).toFixed(2));
    }

    return { weather: weatherDataPublic, solar: solarDataPublic };
}