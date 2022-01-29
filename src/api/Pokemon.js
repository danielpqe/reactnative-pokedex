import { API } from "../utils/const";

const getPokemonAPI = async (endpointUrl) => {
  try {
    const url = `${API}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = response.json();
    return result;
  } catch (error) {
    console.error("error:", error);
  }
};

const getPokemonDetailsByUrlApi = async (url) => {
  try {
    const response = await fetch(url);
    const result = response.json();
    return result;
  } catch (error) {
    console.error("errors:", error);
  }
};

export { getPokemonAPI, getPokemonDetailsByUrlApi };
