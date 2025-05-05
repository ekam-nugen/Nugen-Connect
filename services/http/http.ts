import cookie from "react-cookies";
import HttpInstance from "./instance";

HttpInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (cookie.load("token")) {
      config.headers["Authorization"] = `Bearer ${cookie.load("token")}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    console.error(`Error in interceptor ${error}`);
    return "error";
  }
);

class HttpService {
  constructor() {
    this.initHeaders();
  }

  initHeaders() {
    if (typeof window !== "undefined") {
      // Ensure this code runs only in the browser
      const token = cookie.load("token");
      if (token) {
        this.alterHeaders({ Authorization: `Bearer ${token}` });
      }
    }
  }

  alterHeaders(headers = {}) {
    HttpInstance.defaults.headers.common = headers;
  }

  // Method to set a timeout for all requests
  setTimeout(timeout: number) {
    HttpInstance.defaults.timeout = timeout;
  }

  // Method to add request interceptors
  addRequestInterceptor(
    onFulfilled: (config: any) => any,
    onRejected: (error: any) => any
  ) {
    HttpInstance.interceptors.request.use(onFulfilled, onRejected);
  }

  // Method to add response interceptors
  addResponseInterceptor(
    onFulfilled: (response: any) => any,
    onRejected: (error: any) => any
  ) {
    HttpInstance.interceptors.response.use(onFulfilled, onRejected);
  }

  // General method for GET requests with custom headers
  async get(url: string) {
    try {
      const response = await HttpInstance.get(url);
      return response.data;
    } catch (error) {
      console.error(error, "Error");
      return this.handleError(error); // Ensure use of HttpService for static context
    }
  }

  // General method for POST requests with custom headers
  async post(url: string, data: any) {
    try {
      const response = await HttpInstance.post(url, data);
      return {
        ...response.data,
        status: response.status,
      };
    } catch (error) {
      return this.handleError(error); // Ensure use of HttpService for static context
    }
  }

  // General method for PUT requests with custom headers
  async put(url: string, data: any) {
    try {
      const response = await HttpInstance.put(url, data);
      return {
        ...response.data,
        status: response.status,
      };
    } catch (error) {
      return this.handleError(error); // Ensure use of HttpService for static context
    }
  }

  // General method for DELETE requests with custom headers
  async delete(url: string) {
    try {
      const response = await HttpInstance.delete(url);
      return {
        ...response.data,
        status: response.status,
      };
    } catch (error) {
      return this.handleError(error); // Ensure use of HttpService for static context
    }
  }

  // General method for PATCH requests with custom headers
  async patch(url: string, data?: any) {
    try {
      const response = await HttpInstance.patch(url, data);
      return {
        ...response.data,
        status: response.status,
      };
    } catch (error) {
      return this.handleError(error); // Ensure use of HttpService for static context
    }
  }

  // Error handling method
  handleError(error: any) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error("Error response:", error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      console.error("Error request:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error message:", error.message);
    }
    return Promise.reject(error);
  }
}

const httpService = new HttpService();
export default httpService;
