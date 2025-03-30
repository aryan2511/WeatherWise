# WeatherWise

This is a React-based weather application that provides current weather information and a 5-day forecast for a user-specified city.

## Features

-   **Current Weather:** Displays temperature, location, weather description, humidity, wind speed, and "feels like" temperature.
-   **5-Day Forecast:** Shows the weather forecast for the next 5 days, including date, weather icon, temperature, humidity, wind speed, and description.
-   **Dynamic Background:** Changes the background gradient based on the time of day at the searched location.
-   **Search Functionality:** Allows users to search for weather information by city name.
-   **Error Handling:** Provides user-friendly error messages for invalid city names.
-   **Responsive Design:** Ensures the app is usable on various screen sizes.
-   **Map Integration:** Displays the searched location on a map using the Google Maps JavaScript API.
-   **Enter Key Search:** Allows users to search by pressing the Enter key in the input field.

## Technologies Used

-   React
-   JavaScript
-   CSS
-   OpenWeatherMap API
-   React Icons
-   SweetAlert2

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Create a `.env.local` file in the root directory and add your API keys:**

    ```
    VITE_APP_ID=YOUR_OPENWEATHERMAP_API_KEY
    ```

    Replace `YOUR_OPENWEATHERMAP_API_KEY` and `YOUR_GOOGLE_MAPS_API_KEY` with your actual API keys.

5.  **Run the application:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173/` (or the port specified by Vite).

## Usage

1.  Enter a city name in the search bar.
2.  Press Enter or click the search icon.
3.  The app will display the current weather and 5-day forecast for the specified city.
4.  The background will change based on the time of day at the searched location.
5.  A map will be displayed showing the searched location.

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
