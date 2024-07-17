import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../styles/AddRealisation.css";

function AddRealisation() {
  const [form, setForm] = useState({
    title: "",
    url: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/realisation`, form)
      .then((response) => {
        console.log("Réponse de l'API:", response.data);
        navigate("/realisation");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="add-realisation-container">
      <h1>Ajouter une Réalisation</h1>
      <form className="add-realisation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL de l'image</label>
          <input
            type="text"
            id="url"
            name="url"
            value={form.url}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddRealisation;
