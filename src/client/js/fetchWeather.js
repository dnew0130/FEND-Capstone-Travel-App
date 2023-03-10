const fetchWeatherData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newWeatherData = await response.json();
        return newWeatherData;
    } catch (error) {
        console.log("Error", error);
    }
}

export { fetchWeatherData };