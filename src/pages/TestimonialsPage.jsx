import React from "react";
import "../assets/styleTestimonialPage.css";
function TestimonialsPage() {
  return (
    <>
      <div style={{ height: "10vh" }}></div>
      <div className="containerTestimonial">
 
        <div className="containerCardsTest">
          <div className="cardTest">
            <div className="containerProfile">
              <div className="imgProfile"></div>
              <h1>Alejandra Rodriguez</h1>
            </div>
            <div className="containerTest">
              <p>
                Desde el primer momento me sentí acompañada. El equipo fue
                claro, profesional y resolvió mi problema legal en menos tiempo
                del que esperaba. ¡Gracias por todo!
              </p>
            </div>
          </div>

          <div className="cardTest">
            <div className="containerProfile">
              <div className="imgProfile2"></div>
              <h1>Luis Herrera</h1>
            </div>
            <div className="containerTest">
              <p>
                Tuve una experiencia excelente. Se nota que conocen bien su
                trabajo y se preocupan genuinamente por sus clientes. Los
                recomiendo sin dudar
              </p>
            </div>
          </div>
          <div className="cardTest">
            <div className="containerProfile">
              <div className="imgProfile3"></div>
              <h1>Ana Beltrán</h1>
            </div>
            <div className="containerTest">
              <p>
                Lo que más valoro es la confianza que me generaron desde la
                primera reunión. Se encargaron de todo y el trato fue impecable. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsPage;
