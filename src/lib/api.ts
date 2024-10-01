import axios from 'axios';

export const baseURL = process.env.API_URL;

const getLocalStorageValue = (key: string, defaultValue: string | number) => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
  }
  return defaultValue;
};

function getCoordinatesFromLocalStorage() {
  if (typeof window !== 'undefined' && window.localStorage) {
      const storedData = localStorage.getItem('ubi');
      
      if (storedData) {
          const data = JSON.parse(storedData); // Parse the JSON string to an object
          const { locationCoordinates } = data;
          
          if (locationCoordinates && locationCoordinates.coordinates) {
              const [longitude, latitude] = locationCoordinates.coordinates;
              return { longitude, latitude };
          }
      }
  }
  
  return { longitude: null, latitude: null };
}
const { longitude, latitude } = getCoordinatesFromLocalStorage();

const getDeviceFingerprint = () => {
  if (typeof window !== "undefined" && navigator.userAgent) {
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const hardwareConcurrency = navigator.hardwareConcurrency;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const timezoneOffset = new Date().getTimezoneOffset();

    const fingerprint = `${userAgent}|${language}|${hardwareConcurrency}|${screenResolution}|${timezoneOffset}`;
    return fingerprint;
  }
  return "rajatdevicefingerprint";
};

const api = axios.create({
  baseURL: baseURL + "api/v2/",
  headers: {
    fingerprint: getDeviceFingerprint(),
    latitude: latitude,
    longitude: longitude,
    lan: "en",
    Authorization: "Bearer " + getLocalStorageValue(keys.accessToken, ""),
  },
});

// Request Interceptor: Attach tokens or any required headers
api.interceptors.request.use(
  (config) => {
    // You can add authentication tokens here if needed
    const token = localStorage.getItem('token');  // Example of using a token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle common response scenarios
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Global error handling
    if (error.response) {
      // Handle 4xx and 5xx responses
      const statusCode = error.response.status;
      const message = error.response.data.message || 'Something went wrong';

      if (statusCode === 401) {
        // Handle unauthorized access (e.g., redirect to login)
        console.error('Unauthorized access, redirecting...');
      } else if (statusCode === 400) {
        console.error('Bad request');
      }
      
      // Throw error for component-specific handling
      throw new Error(message);
    }

    return Promise.reject(error);
  }
);

export default api;
