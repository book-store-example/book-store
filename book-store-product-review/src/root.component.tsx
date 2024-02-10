import { ConfigurationService, Mountable } from "@fusionize/fusionize-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ReviewsListComponent from "./reviews.list.component";

export default function Root(props) {
  useEffect(() => {
    ConfigurationService.config(props);
  }, []);
  return (
    <Mountable location="reviews-container">
      <BrowserRouter>
        <Routes>
          <Route path="/books/:id" element={<ReviewsListComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </Mountable>
  );
}
