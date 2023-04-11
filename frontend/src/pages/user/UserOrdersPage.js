import UserOrdersPages from "./components/UserOrdersPage";
import axios from "axios";

const getOrders = async () => {
  const { data } = await axios.get("/api/orders");
  return data;
};

const UserOrdersPage = () => {
  return <UserOrdersPages getOrders={getOrders} />;
};

export default UserOrdersPage;
