import { POKEMON_TYPE_COLORS } from "./const";

const getColorByType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByType;
