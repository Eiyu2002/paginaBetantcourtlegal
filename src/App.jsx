import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Header from "./components/Header.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutPage from "./pages/AboutPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import SuccesCasesPage from "./pages/SuccesCasesPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/test"
          element={<TestimonialsPage></TestimonialsPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
