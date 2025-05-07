import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Header from "./components/Header.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutPage from "./pages/AboutPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import SuccesCasesPage from "./pages/SuccesCasesPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";

function App() {
  const fechaLimite = new Date("2025-06-05T00:00:00"); // <-- Fecha límite
  const ahora = new Date();

  if (ahora > fechaLimite) {
    document.body.innerHTML = `
    <div style="text-align: center; margin-top: 20vh; font-family: sans-serif;">
      <h1>⚠️ Esta página ha sido desactivada, contacta con el desarrollador ⚠️</h1>
      <p>Por favor, contacte con el desarrollador para reactivarla.</p>
    </div>
  `;
    throw new Error("Página desactivada por falta de pago.");
  }
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/test"
          element={<TestimonialsPage></TestimonialsPage>}
        ></Route>
        <Route path="/blogs" element={<BlogsPage></BlogsPage>}></Route>
        <Route path="/blog/:id" element={<BlogDetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
