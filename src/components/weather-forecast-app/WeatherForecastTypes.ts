/**
 * ForecastPeriod represents the weather forecast for a single hour or period.
 * 
 * Key fields:
 * - startTime: ISO string representing the start time of the forecast period.
 * - temperature: numeric temperature value.
 * - temperatureUnit: unit of temperature, e.g., "F" or "C".
 * - shortForecast: brief description of the weather (e.g., "Sunny").
 * - icon: URL to an icon representing the forecast visually.
 * - windDirection: cardinal direction of wind (e.g., "N", "NE").
 * - windSpeed: wind speed as a string (e.g., "10 mph").
 */
export type ForecastPeriod = {
  startTime: string;
  temperature: number;
  temperatureUnit: string;
  shortForecast: string;
  icon: string;
  windDirection: string;
  windSpeed: string;
};

export type ForecastData = {
  properties: {
    periods: ForecastPeriod[];
  };
};

