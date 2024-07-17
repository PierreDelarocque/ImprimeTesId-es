import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Realisation.css";

function Realisation() {
  const [realisation, setRealisation] = useState([]);

  useEffect(() => {
    fetchRealisations();
  }, []);

  const fetchRealisations = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/realisation`)
      .then((response) => {
        console.log("Réponse de l'API:", response.data);
        setRealisation(response.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="realisation-container">
        {realisation.length > 0 && realisation[0] ? (
          realisation[0].map((item) => (
            <div className="card-realisation" key={item.id}>
              <Link className="image-container" to={`/realisation/${item.id}`}>
                <img src={item.url} alt={item.title} />
                <div className="image-title">{item.title}</div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Realisation;
