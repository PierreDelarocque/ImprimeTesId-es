import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../styles/RealisationDetail.css";

function RealisationDetail() {
  const { id } = useParams();
  const [realisation, setRealisation] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/realisation/${id}`)
      .then((response) => {
        setRealisation(response.data);
      })
      .catch((err) => console.error(err));
  }, [id]);
  console.log("coucou", realisation);

  if (!realisation) {
    return <p>Loading...</p>;
  }

  return (
    <div className="realisation-detail-container">
      <h1>{realisation.title}</h1>
      <img
        className="img-realisation"
        src={realisation.url}
        alt={realisation.title}
      />
      <p className="text-realisationD">{realisation.description}</p>
    </div>
  );
}

export default RealisationDetail;
