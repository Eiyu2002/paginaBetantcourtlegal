import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/styleBlogDetail.css"; // si tenés estilos personalizados

function BlogDetailsPage() {
  const { id } = useParams(); // Captura el ID de la URL
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    axios
      .get(`https://betancourtlegal.es/wp-json/wp/v2/blog/${id}?_embed`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar el blog:", error);
      });
  }, [id]);

  if (!blog) return <p>Cargando blog...</p>;

  const featuredImage = blog._embedded?.["wp:featuredmedia"]
    ? blog._embedded["wp:featuredmedia"][0].source_url
    : "";
  return (
    <div className="blogDetailsContainer" id="blogDetailsContainer">
      <div style={{ height: "20%" }}></div>
      <div className="blogDetail">
        {featuredImage && (
          <img
            src={featuredImage}
            alt={blog.title.rendered}
            className="blogCardImageDetails"
          />
        )}
        <h1>{blog.title.rendered}</h1>

        <div
          className="blogContent"
          dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
        ></div>
      </div>
    </div>
  );
}

export default BlogDetailsPage;
