const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  const isEmbedVideo =
    videoSrc &&
    (videoSrc.includes("drive.google.com") ||
      videoSrc.includes("youtube.com/embed"));

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>

        {isEmbedVideo ? (
          <iframe
            src={videoSrc}
            width="100%"
            height="450"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video Preview"
            style={{ border: 0, borderRadius: "0.5rem" }}
          />
        ) : (
          <video
            src={videoSrc}
            width="100%"
            controls
            autoPlay
            playsInline
            id="preview-video"
          />
        )}
      </div>
    </div>
  );
};

export default VideoModal;
