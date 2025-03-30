# WeatherWise

"I've built a weather application with real-time data, five-day forecasts, and interactive location maps. You can view it here: https://theweatherwise.netlify.app/

This is a dynamic weather application built with React, providing real-time weather information and forecasts for cities worldwide. It features an intuitive user interface with current weather details, a five-day forecast, and an interactive map pinpointing the searched location.

## Features

-   **Real-time Weather Data:** Displays current weather conditions, including temperature, humidity, wind speed, and cloud cover.
-   **Five-Day Forecast:** Provides a five-day weather forecast, showing temperature, weather description, and other relevant information.
-   **Interactive Map:** Integrates an interactive map using `react-leaflet`, pinpointing the searched location.
-   **User-Friendly Interface:** Features a clean and intuitive design, making it easy to access weather information.
-   **City Search:** Allows users to search for weather information by city name.
-   **Dynamic Background:** Changes the application background based on the time of day at the searched location.

## Technologies Used

-   **React:** A JavaScript library for building user interfaces.
-   **OpenWeatherMap API:** For fetching real-time weather data and forecasts.
-   **react-leaflet:** A React wrapper for Leaflet, used for map integration.
-   **React Icons:** For weather and data icons.
-   **SweetAlert2:** For user-friendly error messages.

## Setup

1.  **Clone the Repository:**

    ```bash
    git clone [repository-url]
    cd [project-directory]
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Set Up Environment Variables:**

    -   Create a `.env.local` file in the root directory.
    -   Add your OpenWeatherMap API key:

        ```
        VITE_APP_ID=your_api_key
        ```

    -   Replace `your_api_key` with your actual API key.

4.  **Run the Application:**

    ```bash
    npm run dev
    ```

    -   The application will be available at `http://localhost:5173` (or the port Vite specifies).

## Usage

1.  Enter a city name in the search bar.
2.  Click the search icon or press Enter.
3.  The application will display the current weather and a five-day forecast for the searched city.
4.  An interactive map will also display the location of the searched city.

## Notes

-   Ensure you have a valid OpenWeatherMap API key.
-   The application requires an internet connection to fetch weather data.
-   The map functionality relies on `react-leaflet` and Leaflet, which require proper setup and image handling.

## Future Improvements

-   Add more detailed weather information.
-   Implement location-based weather updates.
-   Improve the user interface and responsiveness.
-   Add support for different units (e.g., Fahrenheit).
-   Include more map features, such as zoom controls and different tile layers.

## Project Structure

```weather-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Weather.jsx
│   │   └── ... (other components)
│   ├── assets/
│   │   ├── search-icon.png
│   │   ├── ... (other assets)
│   ├── App.jsx
│   ├── main.jsx
│   └── ... (other source files)
├── .env.local
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Contributing

Contributions are welcome! If you have any suggestions or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Aryan Bose
