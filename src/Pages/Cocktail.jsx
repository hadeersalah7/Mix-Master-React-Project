import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useLoaderData, Link } from "react-router-dom";

const singleCoctailURL =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCoctailURL}${id}`);
  return { id, data };
};
const Cocktail = () => {
  const { id, data } = useLoaderData();
  return <h1>Cocktail</h1>;
};

export default Cocktail;
