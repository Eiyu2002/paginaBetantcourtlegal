import React, { useEffect, useState } from "react";
import "../assets/styleBlogspage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom"; // Para navegar entre páginas (si usas react-router)

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://betancourtlegal.es/wp-json/wp/v2/blog?_embed") // Agrega el ?_embed para las imágenes
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los blogs:", error);
      });
  }, []);

  console.log(blogs);

  return (
    <div className="containerBlogs">
      <div style={{ height: "15%" }}></div>
      <div className="blogCardContainer">
        {blogs.length > 0 ? (
          <div className="blogCards">
            {blogs.map((blog) => {
              // Obtener la imagen destacada (featured image)
              const featuredImage = blog._embedded["wp:featuredmedia"]
                ? blog._embedded["wp:featuredmedia"][0].source_url
                : "";

              return (
                <div
                  className="blogCard"
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  key={blog.id}
                >
                  <div
                    style={{ backgroundImage: `url(${featuredImage})` }}
                    alt={blog.title.rendered}
                    className="blogCardImage"
                  >
                    {" "}
                  </div>
                  <div className="blogCardContent">
                    <h3>{blog.title.rendered}</h3>
                    <p>
                      {blog.excerpt.rendered
                        ? blog.excerpt.rendered.replace(/<[^>]+>/g, "")
                        : "No excerpt available"}
                    </p>{" "}
                    {/* Muestra un resumen */}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No hay blogs disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default BlogsPage;
