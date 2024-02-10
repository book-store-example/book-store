import { ConfigurationService, Mountable } from "@fusionize/fusionize-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductComponent from "./product.component";
import { useEffect } from "react";

export default function Root(props) {
  useEffect(() => {
    ConfigurationService.config(props);
  }, []);
  return (
    <>
      <Mountable location="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/books/:id" element={<ProductComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </Mountable>
    </>
  );
}
