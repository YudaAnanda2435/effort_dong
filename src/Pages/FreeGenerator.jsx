import { useState } from "react";

const FreeGenerator = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // STATE BARU UNTUK LOADING UPLOAD
  const [isUploading, setIsUploading] = useState(false);

  const extractSpotifyId = (url) => {
    if (!url) return "";
    const match = url.match(/track\/([a-zA-Z0-9]+)/);
    return match ? match[1] : "";
  };

  // --- FUNGSI BARU: UPLOAD FOTO KE IMGBB ---
  // --- FUNGSI UPLOAD CLOUDINARY ---
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file); // Cloudinary mintanya 'file', bukan 'image'

    // 👇 GANTI DENGAN NAMA PRESET-MU YANG STATUSNYA UNSIGNED 👇
    formData.append("upload_preset", "k9vvarj6");

    try {
      // 👇 GANTI 'NAMA_CLOUD_KAMU' DENGAN CLOUD NAME MILIKMU 👇
      const cloudName = "dvzplesir";

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();
      console.log("Respon dari Cloudinary:", data);
      if (data.secure_url) {
        setImageUrl(data.secure_url); // Cloudinary mengembalikan link di 'secure_url'
      } else {
        alert("Gagal mengupload foto. Coba lagi.");
      }
    } catch (error) {
      console.error("Error upload:", error);
      alert("Terjadi kesalahan jaringan saat upload foto.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleGenerate = () => {
    if (!name.trim() || !message.trim()) {
      alert("Nama dan Pesan wajib diisi ya!");
      return;
    }

    const spotifyId = extractSpotifyId(spotifyLink);
    const data = { n: name, m: message, img: imageUrl, spt: spotifyId };

    try {
      const encodedData = btoa(JSON.stringify(data));
      const fullLink = `${window.location.origin}/free-view?data=${encodedData}`;
      setGeneratedLink(fullLink);
      setIsCopied(false);
    } catch (error) {
      alert("Error: Data terlalu besar atau format salah.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const styles = {
    pageContainer: {
      paddingTop: "140px",
      paddingBottom: "80px",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9f9f9",
    },
    card: {
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      width: "100%",
      maxWidth: "500px",
      textAlign: "center",
    },
    inputGroup: { marginBottom: "20px", textAlign: "left" },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "600",
      color: "#444",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      borderRadius: "8px",
      border: "2px solid #eee",
      fontSize: "1rem",
      outline: "none",
      boxSizing: "border-box",
      color: "#333",
    },
    textarea: {
      width: "100%",
      padding: "12px 16px",
      borderRadius: "8px",
      border: "2px solid #eee",
      fontSize: "1rem",
      minHeight: "100px",
      resize: "vertical",
      outline: "none",
      boxSizing: "border-box",
      color: "#333",
    },
    buttonGenerate: {
      width: "100%",
      padding: "15px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#222",
      color: "white",
      fontSize: "1.1rem",
      fontWeight: "bold",
      cursor: "pointer",
    },
    resultBox: {
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "#f0fdf4",
      border: "2px dashed #4CAF50",
      borderRadius: "10px",
      textAlign: "center",
    },
    uploadBox: {
      border: "2px dashed #ccc",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      cursor: "pointer",
      position: "relative",
    },
    fileInput: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      cursor: "pointer",
    },
    previewImg: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "8px",
      marginTop: "10px",
    },
  };

  return (
    <section style={styles.pageContainer}>
      <div style={styles.card}>
        <h2 className="text-dark mb-4!">✨ Buat Ucapan Ajaib</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Nama Doi</label>
          <input
            type="text"
            placeholder="Contoh: Sayang"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* --- FITUR UPLOAD FOTO --- */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Foto Doi (Opsional)</label>
          <div style={styles.uploadBox}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={styles.fileInput}
            />
            {isUploading ? (
              <span style={{ color: "#666" }}>⏳ Mengunggah foto...</span>
            ) : imageUrl ? (
              <div>
                <span style={{ color: "#4CAF50", fontWeight: "bold" }}>
                  ✓ Foto Berhasil Diupload
                </span>
                <br />
                <img src={imageUrl} alt="Preview" style={styles.previewImg} />
              </div>
            ) : (
              <span style={{ color: "#666" }}>
                📂 Klik atau Drop foto di sini
              </span>
            )}
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Link Lagu Spotify (Opsional)</label>
          <input
            type="text"
            placeholder="Paste link 'Share' lagu dari Spotify"
            value={spotifyLink}
            onChange={(e) => setSpotifyLink(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Pesan Ucapan</label>
          <textarea
            placeholder="Tulis harapanmu..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />
        </div>

        <button onClick={handleGenerate} style={styles.buttonGenerate}>
          🎁 Buat Link Sekarang!
        </button>

        {generatedLink && (
          <div style={styles.resultBox}>
            <p style={{ fontWeight: "bold", margin: "0 0 10px 0" }}>
              Beres! Copy link di bawah:
            </p>
            <input
              type="text"
              value={generatedLink}
              readOnly
              style={{ ...styles.input, marginBottom: "10px" }}
            />
            <button
              onClick={handleCopy}
              style={{
                ...styles.buttonGenerate,
                padding: "10px",
                backgroundColor: isCopied ? "#4CAF50" : "#444",
              }}
            >
              {isCopied ? "Tersalin!" : "Copy Link"}
            </button>
            <a
              href={generatedLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                marginTop: "15px",
                color: "#222",
                fontWeight: "bold",
              }}
            >
              Lihat Preview →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FreeGenerator;
