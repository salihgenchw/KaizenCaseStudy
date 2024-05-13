import axios from "axios";
import Endpoints from "./Endpoints";

type EndpointFunctions = {
  [key: string]: (...args: any[]) => string;
};

interface ApiServiceInterface {
  get: (endpoint: keyof EndpointFunctions, ...args: any[]) => Promise<any>;
}

const ApiService: ApiServiceInterface = {
  get: async (endpoint: keyof EndpointFunctions, ...args: any[]) => {
    try {
      const url = Endpoints[endpoint](...args);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("GET request failed", error);
      throw error;
    }
  }
};

export default ApiService;
