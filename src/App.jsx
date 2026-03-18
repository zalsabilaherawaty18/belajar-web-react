import { Route, Routes } from "react-router-dom";
import Home from "./belajar-react/pages/Home";
import Catatan from "./belajar-react/pages/Catatan";
import Motion from "./belajar-react/pages/Motion";
import UseState from "./belajar-react/pages/UseState";
import DataUser from "./belajar-react/pages/dataUser";
import DetailCards from "./belajar-react/pages/DetailCards";
import DetailProduct from "./belajar-react/pages/DetailProduct";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catatan" element={<Catatan />} />
      <Route path="/motion" element={<Motion />} />
      <Route path="/usestate" element={<UseState />} />
      <Route path="/data-user" element={<DataUser />} />
      <Route path="/detailCart/:userId" element={<DetailCards />} />
      <Route path="/product/:id" element={<DetailProduct />} />
    </Routes>
  );
}
