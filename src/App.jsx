import React, { useMemo } from "react";
import hugoPhoto from "./hugo_portada.jpg";

export default function App() {
  const eventDate = useMemo(() => new Date("2026-05-30T11:00:00"), []);
  const today = new Date();
  const daysLeft = Math.max(
    0,
    Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  );

  const maps = {
    meeting: "https://share.google/zYfsspxilrSJHOpWC",
    school: "https://share.google/5L5XV8TD4uUq5yR4q",
    restaurant: "https://share.google/9dyj8vmRTeJ6a96fh",
    parking1: "https://share.google/wFmO3W6tkbBddQeNq",
    parking2: "https://share.google/1JojS799vktWX14N4",
    parking3: "https://share.google/ZGdOY0yA3v0ObqdV5",
    parking4: "https://share.google/xwRzhTrkKpXRwJUJv",
  };

  const photos = "https://micloud.movistar.es/share/f/XK4SCxpfT2axvFq8Jon_zzkwMTI0MDEzNTg3NzFfMTg5MTYyNA";

  const whatsappText = encodeURIComponent(
    "Hola, somos [nombre]. Queríamos indicar la elección del plato principal para la Primera Comunión de Hugo: Entrecot: [nº personas]. Dorada: [nº personas]. Menú infantil: [nº niños]. Muchas gracias."
  );

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div>
          <div style={styles.badge}>Sábado, 30 de mayo de 2026</div>
          <div style={styles.cross}>✝</div>
          <h1 style={styles.title}>Primera Comunión de Hugo</h1>
          <p style={styles.name}>Hugo Muñoz García</p>
          <p style={styles.subtitle}>Un día muy especial para compartir en familia, con fe, ilusión y mucho cariño.</p>
          <div style={styles.actions}>
            <a href="#agenda" style={styles.darkButton}>Ver agenda</a>
            <a href="#whatsapp" style={styles.lightButton}>Contactar con los papás de Hugo</a>
          </div>
        </div>
        <div style={styles.photoBox}>
         <img src={hugoPhoto} alt="Hugo Muñoz García" style={styles.photo} />
          <div style={styles.photoLabel}>
            <div style={styles.photoSmall}>30 mayo 2026</div>
            <div style={styles.photoBig}>Primera Comunión</div>
          </div>
        </div>
      </section>

      <main style={styles.main}>
<section style={styles.quickNav}>
  <a href="#agenda" style={styles.quickItem}>
    <span style={styles.quickIcon}>📅</span>
    Agenda
  </a>

  <a href="#alcala" style={styles.quickItem}>
    <span style={styles.quickIcon}>🏛️</span>
    Alcalá
  </a>

  <a href="#menu" style={styles.quickItem}>
    <span style={styles.quickIcon}>🍽️</span>
    Menú
  </a>

  <a href="#fotos" style={styles.quickItem}>
    <span style={styles.quickIcon}>📷</span>
    Fotos
  </a>

  <a href="#whatsapp" style={styles.quickItem}>
    <span style={styles.quickIcon}>💬</span>
    WhatsApp
  </a>
</section>
        <section style={styles.countdown}>
          <div style={styles.sectionKicker}>Cuenta atrás</div>
          <div style={styles.countNumber}>{daysLeft} días</div>
          <p style={styles.muted}>para la Primera Comunión de Hugo</p>
        </section>

        <section id="agenda" style={styles.section}>
          <h2 style={styles.sectionTitle}>Agenda del día</h2>
          <p style={styles.sectionIntro}>Una guía sencilla para disfrutar de la jornada con tranquilidad.</p>
          <div style={styles.grid2}>
            <AgendaCard time="10:30" title="Punto de encuentro" place="Calle Miguel Delibes, 7" text="Os recomendamos llegar con antelación para poder aparcar con tranquilidad y reunirnos antes de la ceremonia." link={maps.meeting} />
            <AgendaCard time="11:00" title="Ceremonia de Primera Comunión" place="Colegio Alborada · Calle Alejo Carpentier 27" text="Un momento muy especial para acompañar a Hugo en su Primera Comunión." link={maps.school} />
            <AgendaCard time="12:30 – 13:45" title="Tiempo libre" place="Centro histórico de Alcalá de Henares" text="Después de la ceremonia habrá un rato libre para tomar algo o pasear por el centro histórico de Alcalá de Henares." />
            <AgendaCard time="13:45" title="Aperitivo y celebración familiar" place="Restaurante Martilota · Plaza de la Paloma" text="Nos reuniremos para continuar celebrando juntos este día tan especial." link={maps.restaurant} />
          </div>
        </section>

        <section id="alcala" style={styles.sectionCard}>
          <h2 style={styles.leftTitle}>Alcalá de Henares</h2>
          <p style={styles.paragraph}>Para quienes vengáis de fuera, Alcalá de Henares es una ciudad con mucho encanto para disfrutar durante el fin de semana. Su centro histórico, sus calles y su ambiente familiar la convierten en un lugar perfecto para pasear y tomar algo con tranquilidad.</p>
          <h3 style={styles.subheading}>Aparcamientos recomendados</h3>
          <div style={styles.grid4}>
            <ParkingCard name="Aparcamiento recomendado 1" link={maps.parking1} />
            <ParkingCard name="Aparcamiento recomendado 2" free link={maps.parking2} />
            <ParkingCard name="Aparcamiento recomendado 3" link={maps.parking3} />
            <ParkingCard name="Aparcamiento recomendado 4" free link={maps.parking4} />
          </div>
        </section>

        <section id="menu" style={styles.sectionCard}>
          <h2 style={styles.leftTitle}>Elección de plato principal</h2>
          <p style={styles.paragraph}>Para organizar la comida, podéis indicarnos vuestra elección de plato principal por WhatsApp.</p>
          <div style={styles.grid2}>
            <MenuCard icon="🥩" title="Entrecot a la brasa" text="Con patata panadera" />
            <MenuCard icon="🐟" title="Lomo de dorada a la brasa de encina" text="Con pil pil de sus espinas ahumadas y patatas panadera" />
          </div>
          <div style={styles.childMenu}><strong>Menú infantil</strong><p style={{ margin: "8px 0 0", color: "#666" }}>Menú infantil disponible para los más pequeños.</p></div>
        </section>

        <section id="fotos" style={styles.sectionCard}>
          <h2 style={styles.leftTitle}>Fotos del día</h2>
          <p style={styles.paragraph}>Queremos guardar los mejores recuerdos de la Primera Comunión de Hugo. Durante el evento podréis subir fotos y vídeos a la carpeta compartida de Movistar Cloud.</p>
          <div style={styles.grid2}>
            <a href={photos} target="_blank" rel="noreferrer" style={styles.uploadBox}><div style={styles.bigIcon}>📷</div><strong>Subir fotos y vídeos</strong><span style={styles.smallText}>Acceso directo a Movistar Cloud</span></a>
            <div style={styles.qrBox}><div style={styles.bigIcon}>▦</div><strong>QR para minutas y mesas</strong><span style={styles.qrText}>Este enlace se convertirá en un QR específico para subir fotos el día del evento.</span></div>
          </div>
        </section>

        <section id="whatsapp" style={styles.whatsapp}>
          <div style={styles.bigIcon}>💬</div>
          <h2 style={styles.sectionTitle}>Papás de Hugo</h2>
          <p style={styles.sectionIntro}>Podéis escribirnos por WhatsApp para cualquier duda o para indicarnos la elección del plato principal.</p>
          <div style={styles.actionsCenter}>
            <a href={`https://wa.me/34659194929?text=${whatsappText}`} target="_blank" rel="noreferrer" style={styles.darkButton}>WhatsApp 659 194 929</a>
            <a href={`https://wa.me/34626298072?text=${whatsappText}`} target="_blank" rel="noreferrer" style={styles.lightButton}>WhatsApp 626 298 072</a>
          </div>
        </section>

        <section style={styles.final}><div style={styles.crossFinal}>✝</div><p>Gracias por compartir con nosotros este día tan especial.</p></section>
      </main>
    </div>
  );
}

function AgendaCard({ time, title, place, text, link }) {
  return <div style={styles.card}><div style={styles.time}>{time}</div><h3 style={styles.cardTitle}>{title}</h3><p style={styles.place}>📍 {place}</p><p style={styles.cardText}>{text}</p>{link && <a href={link} target="_blank" rel="noreferrer" style={styles.mapButton}>Cómo llegar</a>}</div>;
}
function ParkingCard({ name, free, link }) {
  return <div style={styles.parkingCard}><div style={styles.parkingTop}><span>🅿️</span>{free && <span style={styles.freeBadge}>Gratuito</span>}</div><strong>{name}</strong><a href={link} target="_blank" rel="noreferrer" style={styles.smallButton}>Ver mapa</a></div>;
}
function MenuCard({ icon, title, text }) {
  return <div style={styles.menuCard}><div style={styles.menuIcon}>{icon}</div><h3 style={styles.cardTitle}>{title}</h3><p style={styles.cardText}>{text}</p></div>;
}

const gold = "#a27b36";
const border = "#eadfc7";
const cream = "#f8f3ea";
const soft = "#fbf7ef";
const styles = {
 quickNav: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: 16,
  marginBottom: 40,
},

quickItem: {
  background: "#fff",
  border: "1px solid #eadfc7",
  borderRadius: 24,
  padding: "20px 16px",
  textAlign: "center",
  textDecoration: "none",
  color: "#2f2f2f",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  boxShadow: "0 6px 20px rgba(0,0,0,.04)",
},

quickIcon: {
  fontSize: 28,
},
  page: { background: cream, minHeight: "100vh", color: "#2f2f2f", fontFamily: "Arial, sans-serif" },
  hero: { maxWidth: 1180, margin: "0 auto", padding: "64px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 42, alignItems: "center" },
  badge: { display: "inline-block", padding: "10px 18px", border: `1px solid ${border}`, borderRadius: 999, background: "rgba(255,255,255,.8)", marginBottom: 24, fontSize: 14 },
  cross: { width: 56, height: 56, borderRadius: "50%", border: `1px solid ${border}`, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: gold, fontSize: 28, marginBottom: 20 },
  title: { fontSize: "clamp(42px, 6vw, 68px)", lineHeight: 1.04, margin: 0, color: "#1f1f1f" },
  name: { color: gold, fontSize: "clamp(24px, 3vw, 32px)", margin: "14px 0 0", fontWeight: 700 },
  subtitle: { marginTop: 28, fontSize: 21, lineHeight: 1.6, maxWidth: 600, color: "#666" },
  actions: { marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" },
  actionsCenter: { marginTop: 30, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" },
  darkButton: { background: "#222", color: "#fff", padding: "14px 24px", borderRadius: 16, textDecoration: "none", display: "inline-block" },
  lightButton: { background: "#fff", color: "#222", padding: "14px 24px", borderRadius: 16, textDecoration: "none", border: `1px solid ${border}`, display: "inline-block" },
  photoBox: { position: "relative", maxWidth: 430, margin: "0 auto", borderRadius: 34, background: "#fff", padding: 12, border: `1px solid ${border}`, boxShadow: "0 24px 70px rgba(0,0,0,.13)" },
  photo: { width: "100%", height: 520, objectFit: "cover", objectPosition: "center", borderRadius: 26, display: "block" },
  photoLabel: { position: "absolute", left: "50%", bottom: 30, transform: "translateX(-50%)", width: "78%", background: "rgba(255,255,255,.88)", borderRadius: 24, padding: 16, textAlign: "center", boxShadow: "0 12px 32px rgba(0,0,0,.13)" },
  photoSmall: { color: gold, textTransform: "uppercase", letterSpacing: 3, fontSize: 12 },
  photoBig: { fontWeight: 700, marginTop: 4 },
  main: { maxWidth: 1080, margin: "0 auto", padding: "0 20px 70px" },
  countdown: { background: "#fff", border: `1px solid ${border}`, borderRadius: 32, padding: 38, textAlign: "center", marginBottom: 60 },
  sectionKicker: { color: gold, textTransform: "uppercase", letterSpacing: 3, fontSize: 13 },
  countNumber: { fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, marginTop: 10 },
  muted: { color: "#666", margin: "8px 0 0" },
  section: { marginBottom: 64 },
  sectionCard: { background: "#fff", border: `1px solid ${border}`, borderRadius: 32, padding: 34, marginBottom: 64 },
  sectionTitle: { textAlign: "center", fontSize: "clamp(32px, 4vw, 44px)", margin: "0 0 12px", color: "#1f1f1f" },
  leftTitle: { fontSize: "clamp(32px, 4vw, 44px)", margin: "0 0 18px", color: "#1f1f1f" },
  sectionIntro: { textAlign: "center", color: "#666", maxWidth: 720, margin: "0 auto 32px", lineHeight: 1.6 },
  paragraph: { color: "#666", lineHeight: 1.7, maxWidth: 780 },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 },
  grid4: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16 },
  card: { background: "#fff", border: `1px solid ${border}`, borderRadius: 28, padding: 28, boxShadow: "0 8px 28px rgba(0,0,0,.04)" },
  time: { color: gold, fontWeight: 700, marginBottom: 8 },
  cardTitle: { margin: "0 0 12px", fontSize: 22, color: "#1f1f1f" },
  place: { color: "#777", marginBottom: 10 },
  cardText: { color: "#666", lineHeight: 1.65 },
  mapButton: { display: "inline-block", marginTop: 10, background: soft, border: `1px solid ${border}`, color: "#222", textDecoration: "none", padding: "10px 16px", borderRadius: 14 },
  subheading: { marginTop: 30, fontSize: 22 },
  parkingCard: { background: soft, borderRadius: 22, padding: 20 },
  parkingTop: { display: "flex", justifyContent: "space-between", marginBottom: 12 },
  freeBadge: { background: "#fff", color: gold, fontSize: 12, padding: "4px 10px", borderRadius: 999 },
  smallButton: { display: "inline-block", marginTop: 18, background: "#fff", color: "#222", textDecoration: "none", padding: "9px 14px", borderRadius: 14 },
  menuCard: { background: soft, border: `1px solid ${border}`, borderRadius: 28, padding: 28 },
  menuIcon: { fontSize: 30, marginBottom: 14 },
  childMenu: { background: soft, borderRadius: 22, padding: 22, marginTop: 20 },
  uploadBox: { background: soft, border: "2px dashed #d7bd86", borderRadius: 28, padding: 34, textAlign: "center", color: "#222", textDecoration: "none", display: "grid", gap: 8 },
  qrBox: { background: "#222", color: "#fff", borderRadius: 28, padding: 34, textAlign: "center", display: "grid", gap: 8 },
  bigIcon: { fontSize: 34 },
  smallText: { color: "#777", fontSize: 14 },
  qrText: { color: "#ddd", fontSize: 14, lineHeight: 1.5 },
  whatsapp: { background: "#fff", border: `1px solid ${border}`, borderRadius: 32, padding: 42, textAlign: "center", marginBottom: 64 },
  final: { background: "#6f6254", color: "#ffffff", borderRadius: 32, padding: 40, textAlign: "center", fontSize: 24, fontWeight: 600 },
  crossFinal: { color: "#e4c98f", fontSize: 32, marginBottom: 12 },
};

