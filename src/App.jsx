import React from "react";

export default function App() {
  return (
    <div style={{
      background:"#f8f3ea",
      minHeight:"100vh",
      fontFamily:"Arial, sans-serif",
      color:"#2f2f2f"
    }}>

      <section style={{
        maxWidth:"1200px",
        margin:"0 auto",
        padding:"60px 20px",
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"40px",
        alignItems:"center"
      }}>

        <div>
          <div style={{
            display:"inline-block",
            padding:"10px 18px",
            border:"1px solid #d9c49b",
            borderRadius:"999px",
            background:"#fff",
            marginBottom:"25px",
            fontSize:"14px"
          }}>
            Sábado, 30 de mayo de 2026
          </div>

          <h1 style={{
            fontSize:"64px",
            margin:"0",
            lineHeight:"1.05"
          }}>
            Primera Comunión de Hugo
          </h1>

          <p style={{
            color:"#a27b36",
            fontSize:"28px",
            marginTop:"14px",
            fontWeight:"600"
          }}>
            Hugo Muñoz García
          </p>

          <p style={{
            marginTop:"35px",
            fontSize:"22px",
            lineHeight:"1.6",
            maxWidth:"600px",
            color:"#666"
          }}>
            Un día muy especial para compartir en familia, con fe, ilusión y mucho cariño.
          </p>

          <div style={{
            marginTop:"35px",
            display:"flex",
            gap:"14px",
            flexWrap:"wrap"
          }}>
            <a
              href="#agenda"
              style={{
                background:"#222",
                color:"#fff",
                padding:"14px 24px",
                borderRadius:"16px",
                textDecoration:"none"
              }}
            >
              Ver agenda
            </a>

            <a
              href="#whatsapp"
              style={{
                background:"#fff",
                color:"#222",
                padding:"14px 24px",
                borderRadius:"16px",
                textDecoration:"none",
                border:"1px solid #d9c49b"
              }}
            >
              Contactar con los papás de Hugo
            </a>
          </div>
        </div>

        <div>
          <img
            src="/hugo-portada.jpg"
            alt="Hugo"
            style={{
              width:"100%",
              borderRadius:"32px",
              objectFit:"cover",
              boxShadow:"0 20px 60px rgba(0,0,0,0.12)"
            }}
          />
        </div>
      </section>

      <section style={{
        maxWidth:"1000px",
        margin:"0 auto",
        padding:"0 20px 60px"
      }}>

        <div style={{
          background:"#fff",
          borderRadius:"32px",
          padding:"40px",
          textAlign:"center",
          border:"1px solid #eadfc7"
        }}>
          <p style={{
            color:"#a27b36",
            textTransform:"uppercase",
            letterSpacing:"3px",
            fontSize:"13px"
          }}>
            Cuenta atrás
          </p>

          <h2 style={{
            fontSize:"52px",
            margin:"10px 0"
          }}>
            Primera Comunión 2026
          </h2>

          <p style={{
            color:"#666"
          }}>
            Gracias por compartir con nosotros este día tan especial.
          </p>
        </div>
      </section>

      <section
        id="agenda"
        style={{
          maxWidth:"1000px",
          margin:"0 auto",
          padding:"0 20px 80px"
        }}
      >

        <h2 style={{
          fontSize:"42px",
          marginBottom:"40px",
          textAlign:"center"
        }}>
          Agenda del día
        </h2>

        <div style={{
          display:"grid",
          gap:"24px"
        }}>

          <div style={card}>
            <h3>10:30 · Punto de encuentro</h3>
            <p><strong>Calle Miguel Delibes, 7</strong></p>
            <p>
              Os recomendamos llegar con antelación para poder aparcar con tranquilidad y reunirnos antes de la ceremonia.
            </p>
          </div>

          <div style={card}>
            <h3>11:00 · Ceremonia de Primera Comunión</h3>
            <p><strong>Colegio Alborada</strong></p>
            <p>
              Un momento muy especial para acompañar a Hugo en su Primera Comunión.
            </p>
          </div>

          <div style={card}>
            <h3>12:30 – 13:45 · Tiempo libre</h3>
            <p><strong>Centro histórico de Alcalá de Henares</strong></p>
            <p>
              Después de la ceremonia habrá un rato libre para tomar algo o pasear por el centro histórico de Alcalá de Henares.
            </p>
          </div>

          <div style={card}>
            <h3>13:45 · Aperitivo y celebración familiar</h3>
            <p><strong>Restaurante Martilota</strong></p>
            <p>
              Nos reuniremos para continuar celebrando juntos este día tan especial.
            </p>
          </div>

        </div>
      </section>

      <section
        id="whatsapp"
        style={{
          maxWidth:"1000px",
          margin:"0 auto",
          padding:"0 20px 80px"
        }}
      >

        <div style={{
          background:"#fff",
          border:"1px solid #eadfc7",
          borderRadius:"32px",
          padding:"50px",
          textAlign:"center"
        }}>

          <h2 style={{
            fontSize:"40px",
            marginBottom:"20px"
          }}>
            Papás de Hugo
          </h2>

          <p style={{
            color:"#666",
            maxWidth:"700px",
            margin:"0 auto 30px"
          }}>
            Podéis escribirnos por WhatsApp para cualquier duda o para indicarnos la elección del plato principal.
          </p>

          <div style={{
            display:"flex",
            gap:"16px",
            justifyContent:"center",
            flexWrap:"wrap"
          }}>
            <a
              href="https://wa.me/34659194929"
              style={buttonDark}
            >
              WhatsApp 659 194 929
            </a>

            <a
              href="https://wa.me/34626298072"
              style={buttonLight}
            >
              WhatsApp 626 298 072
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

const card = {
  background:"#fff",
  borderRadius:"28px",
  padding:"30px",
  border:"1px solid #eadfc7",
  lineHeight:"1.7"
};

const buttonDark = {
  background:"#222",
  color:"#fff",
  padding:"14px 24px",
  borderRadius:"16px",
  textDecoration:"none"
};

const buttonLight = {
  background:"#f8f3ea",
  color:"#222",
  padding:"14px 24px",
  borderRadius:"16px",
  textDecoration:"none",
  border:"1px solid #d9c49b"
};
