import { useState, useEffect } from "react";
import "../assets/styleTestimonialPage.css";
import Tabletop from "tabletop";
import Papa from "papaparse";
function TestimonialsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpdGYVJFESTNYg3HMFSbsxkQNIDqA5jAWQT-WbDYiP5cCLU9bIyoIXbGqIdVqokRJW2dkWDFjkfi56/pub?output=csv"
    )
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true });
        const entradas = parsed.data.map((row) => ({
          nombre: row["Nombre Completo"],
          testimonio: row["Testimonio"],
          imagen: row["Imagen Perfil"],
        }));
        setPosts(entradas);
      });
  }, []);

  return (
    <>
      <div id="test" style={{ height: "10vh" }}></div>
      <div className="containerTestimonial">
        <h1>Testimonios</h1>
        <div className="containerCardsTest">
          {posts.map((post, index) => (
            <div className="cardTest" key={index}>
              <div className="containerProfile">
                <div
                  className="imgProfile"
                  style={{ backgroundImage: `url(${post.imagen})` }}
                ></div>
                <h1>{post.nombre}</h1>
              </div>
              <div className="containerTest">
                <p>{post.testimonio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TestimonialsPage;
