import axios from "axios";
import Endpoints from "./Endpoints";

type EndpointFunctions = {
  [key in keyof EndpointsMap]: EndpointsMap[key] extends (
    ...args: any[]
  ) => string
    ? (...args: any[]) => string
    : never;
};

interface ApiServiceInterface {
  get: <T extends keyof EndpointFunctions>(
    endpoint: T,
    ...args: Parameters<EndpointFunctions[T]>
  ) => Promise<any>;
}

const ApiService: ApiServiceInterface = {
  get: async (endpoint, ...args) => {
    try {
      const url =
        typeof Endpoints[endpoint] === "function"
          ? Endpoints[endpoint](...args)
          : Endpoints[endpoint];
      const response = await axios.get(url, {
        headers: {
          "X-Country-Id": "TR",
          "X-Language-Id": "TR",
        },
      });
      return response.data;
    } catch (error) {
      console.error("GET request failed", error);
      throw error;
    }
  },
};

export default ApiService;
