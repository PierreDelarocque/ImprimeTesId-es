import video from "../assets/video/videobg.mp4";

import "../styles/Accueil.css";

function Videobg() {
  return (
    <div className="bg-container">
      <div className="overlay">
        <video src={video} autoPlay loop muted></video>
        <div className="titre-container">
          <h1 className="titre">Imprime Tes Idées</h1>
        </div>
      </div>
    </div>
  );
}

export default Videobg;
