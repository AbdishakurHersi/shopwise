import HomePages from "./components/HomePage";
import { useSelector } from "react-redux";
import axios from "axios";

const getBestsellers = async () => {
  const { data } = await axios.get("/api/products/bestsellers");
  return data;
};

const HomePage = () => {
  const { categories } = useSelector((state) => state.getCategories);

  return <HomePages categories={categories} getBestsellers={getBestsellers} />;
};

export default HomePage;
