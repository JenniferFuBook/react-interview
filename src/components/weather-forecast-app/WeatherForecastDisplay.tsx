import { ForecastData } from './WeatherForecastTypes';

// Maps cardinal wind directions to degrees for arrow rotation.
const directionToDegrees: Record<string, number> = {
  N: 0,
  NNE: 22.5,
  NE: 45,
  ENE: 67.5,
  E: 90,
  ESE: 112.5,
  SE: 135,
  SSE: 157.5,
  S: 180,
  SSW: 202.5,
  SW: 225,
  WSW: 247.5,
  W: 270,
  WNW: 292.5,
  NW: 315,
  NNW: 337.5,
};

/**
 * WeatherForecastDisplay renders a pivoted hourly weather forecast table.
 *
 * Key features:
 * - Displays the first 10 hours of forecast data.
 * - Shows time, weather icon with short forecast, temperature, wind direction, and wind speed.
 * - Wind direction is visualized as a rotated arrow based on cardinal direction.
 * - Table layout uses time as columns, with weather attributes as rows.
 * - Provides tooltips for wind directions for clarity.
 */
type WeatherDisplayProps = {
  forecast: ForecastData;
};

export const WeatherForecastDisplay = ({ forecast }: WeatherDisplayProps) => {
  const periods = forecast.properties.periods.slice(0, 10); // Select the first 10 forecast periods (10 hours)

  return (
    <div className="weather-forecast-display">
      <h3>
        Weather Display ({new Date(periods[0].startTime).toLocaleDateString()})
      </h3>
      <h5>Hourly forecast</h5>
      {/* Render the pivoted forecast table */}
      <table className="weather-forecast-table">
        <thead>
          {/* Render the header row with times */}
          <tr>
            <th>Time</th>
            {periods.map((item) => {
              const time = new Date(item.startTime);
              const hour = `0${time.getHours()}`.slice(-2);
              const minute = `0${time.getMinutes()}`.slice(-2);
              return <th key={item.startTime}>{`${hour}:${minute}`}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {/* Render the row with weather icons and short forecasts */}
          <tr>
            <td className="row-header">Weather</td>
            {periods.map((item) => (
              <td key={item.startTime} className="icon-row">
                <img
                  src={item.icon}
                  width="40"
                  height="40"
                  alt="Diurnal cycle icon"
                />
                <div>{item.shortForecast}</div>
              </td>
            ))}
          </tr>
          {/* Render the row with temperatures */}
          <tr>
            <td className="row-header">Temperature</td>
            {periods.map((item) => (
              <td key={item.startTime} className="darker-row">
                {`${item.temperature}°${item.temperatureUnit}`}
              </td>
            ))}
          </tr>
          {/* Render the row with wind directions */}
          <tr>
            <td className="row-header">Wind direction</td>
            {periods.map((item) => {
              // Convert cardinal wind directions to degrees for arrow rotation
              const deg = directionToDegrees[item.windDirection] ?? 0;

              return (
                <td
                  key={item.startTime}
                  className="wind-direction"
                  style={{
                    transform: `rotate(${deg}deg)`,
                  }}
                  title={item.windDirection}
                >
                  ↑
                </td>
              );
            })}
          </tr>
          {/* Render the row with wind speeds */}
          <tr>
            <td className="row-header">Wind speed</td>
            {periods.map((item) => (
              <td key={item.startTime} className="lighter-row">
                {item.windSpeed}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
