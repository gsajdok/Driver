import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "./MainPage";
import {NotFound} from "./NotFound";

export const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="*" element={<Navigate replace to="/404" />}/>
              <Route path="/" element={<MainPage/>} />

              <Route path="/404" element={<NotFound/>} />
          </Routes>
      </BrowserRouter>
  );
}