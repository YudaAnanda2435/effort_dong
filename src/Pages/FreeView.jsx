import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const FreeView = () => {
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const dataEncoded = searchParams.get("data");
    if (dataEncoded) {
      try {
        const decoded = JSON.parse(atob(dataEncoded));
        setContent(decoded);
      } catch (err) {
        console.error("Link rusak");
      }
    }
  }, [searchParams]);

  const styles = {
    container: {
      paddingTop: "120px",
      paddingBottom: "50px",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fdfbf7",
      fontFamily: "'Poppins', sans-serif",
    },
    card: {
      backgroundColor: "#fff",
      width: "90%",
      maxWidth: "450px",
      padding: "40px 30px",
      borderRadius: "24px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
      textAlign: "center",
    },
    imageWrapper: {
      width: "150px",
      height: "150px",
      margin: "0 auto 20px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "5px solid #fff",
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    },
    image: { width: "100%", height: "100%", objectFit: "cover" },
    title: { fontSize: "1.8rem", color: "#2c3e50", marginBottom: "15px" },
    message: {
      fontSize: "1.1rem",
      color: "#666",
      lineHeight: "1.6",
      whiteSpace: "pre-line",
      marginBottom: "30px",
    },
    spotifyBox: { margin: "20px 0" },
    watermark: {
      marginTop: "30px",
      paddingTop: "20px",
      borderTop: "1px solid #eee",
      fontSize: "0.9rem",
      color: "#888",
    },
  };

  if (!content)
    return (
      <div style={styles.container}>
        <p>Memuat hadiah...</p>
      </div>
    );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Render Foto Jika Ada */}
        {content.img && (
          <div style={styles.imageWrapper}>
            <img src={content.img} alt="Foto Spesial" style={styles.image} />
          </div>
        )}

        <h1 style={styles.title}>Happy Birthday, {content.n}! 🎉</h1>

        <div style={styles.message}>{content.m}</div>

        {/* Render Player Spotify Jika Ada */}
        {content.spt && (
          <div style={styles.spotifyBox}>
            <iframe
              src={`https://open.spotify.com/embed/track/${content.spt}`}
              width="100%"
              height="80"
              frameBorder="0"
              allow="encrypted-media"
              style={{ borderRadius: "12px" }}
            ></iframe>
          </div>
        )}

        {/* Watermark Upselling */}
        <div style={styles.watermark}>
          <p style={{ marginBottom: "10px" }}>
            Mau kado web keren yang fotonya bisa gerak dan nama domain sendiri?
          </p>
          <Link
            to="/"
            style={{
              color: "#222",
              fontWeight: "bold",
              textDecoration: "none",
              borderBottom: "2px solid #222",
            }}
          >
            Pesan di Effort.Dong
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeView;
