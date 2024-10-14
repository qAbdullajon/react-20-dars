import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "../App";
import { Home } from "@pages";
import { ModelS, Model3, ModelX, ModelY, SolarRoof, SolarPanels } from "@components";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}>
          <Route index element={<ModelS />} />
          <Route path="/model-3" element={<Model3 />} />
          <Route path="/model-x" element={<ModelX />} />
          <Route path="/model-y" element={<ModelY />} />
          <Route path="/solar-roof" element={<SolarRoof />} />
          <Route path="/solar-panels" element={<SolarPanels />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
