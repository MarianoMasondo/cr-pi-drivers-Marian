import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allTeams } from "../../Redux/Actions/Actions";
import "./Form.css";
import { Link } from "react-router-dom";

const validate = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "Please insert a valid name!";
  } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
    errors.name = "Name can only contain letters and spaces!";
  }

  if (!form.lastname.trim()) {
    errors.lastname = "Please insert a valid lastname!";
  } else if (!/^[A-Za-z\s]+$/.test(form.lastname)) {
    errors.lastname = "Lastname can only contain letters and spaces!";
  }

  if (!form.nationality.trim()) {
    errors.nationality = "Please insert a valid nationality!";
  } else if (!/^[A-Za-z\s]+$/.test(form.nationality)) {
    errors.nationality = "Nationality can only contain letters and spaces!";
  }

  if (!form.image.trim()) {
    errors.image = "Please insert a valid URL image!";
  }

  if (!form.birthdate) {
    errors.birthdate = "Please insert a valid birthdate!";
  }

  if (!form.description.trim()) {
    errors.description = "Please insert a valid description!";
  }

  if (!form.teams || form.teams.length === 0) {
    errors.teams = "Please select at least one team!";
  }

  return errors;
};

const Form = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    nationality: "",
    image: "",
    birthdate: "",
    description: "",
    teams: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(allTeams());
  }, [dispatch]);

  const resetForm = () => {
    setForm({
      name: "",
      lastname: "",
      nationality: "",
      image: "",
      birthdate: "",
      description: "",
      teams: [],
    });

    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate(form);

    if (Object.keys(formErrors).length === 0) {
      axios
        .post("/drivers", form)
        .then(() => {
          alert("Driver created successfully");
          resetForm();
        })
        .catch(() => {
          alert("Error creating driver");
        });
    } else {
      setErrors(formErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleDelete = (teamToDelete) => {
    setForm({
      ...form,
      teams: form.teams.filter((team) => team !== teamToDelete),
    });
  };

  const handleSelect = (e) => {
    const selectedTeam = e.target.value;

    if (!selectedTeam) return;

    if (form.teams.length >= 5) {
      return alert("Cannot choose more than five teams");
    }

    if (!form.teams.includes(selectedTeam)) {
      setForm({
        ...form,
        teams: [...form.teams, selectedTeam],
      });

      setErrors({
        ...errors,
        teams: false,
      });
    }
  };

  return (
    <main className="form-container">
      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-header">
          <div className="form-header-text">
            <span className="form-badge">New driver</span>
            <h1 className="h1-form">Create a driver</h1>
            <p className="form-subtitle">
              Add a new driver to your database.
            </p>
          </div>

          <Link to="/home" className="back-home">
            Back Home
          </Link>
        </div>

        <div className="form-grid">
          <section className="form-field">
            <label>Name</label>
            <input
              className={`input-container ${errors.name ? "error" : ""}`}
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Lewis"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </section>

          <section className="form-field">
            <label>Lastname</label>
            <input
              className={`input-container ${errors.lastname ? "error" : ""}`}
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleInputChange}
              placeholder="Hamilton"
            />
            {errors.lastname && (
              <p className="error-text">{errors.lastname}</p>
            )}
          </section>

          <section className="form-field">
            <label>Nationality</label>
            <input
              className={`input-container ${errors.nationality ? "error" : ""}`}
              type="text"
              name="nationality"
              value={form.nationality}
              onChange={handleInputChange}
              placeholder="British"
            />
            {errors.nationality && (
              <p className="error-text">{errors.nationality}</p>
            )}
          </section>

          <section className="form-field">
            <label>Birthdate</label>
            <input
              className={`input-container ${errors.birthdate ? "error" : ""}`}
              type="date"
              name="birthdate"
              value={form.birthdate}
              onChange={handleInputChange}
            />
            {errors.birthdate && (
              <p className="error-text">{errors.birthdate}</p>
            )}
          </section>

          <section className="form-field form-field-full">
            <label>Image URL</label>
            <input
              className={`input-container ${errors.image ? "error" : ""}`}
              type="text"
              name="image"
              value={form.image}
              onChange={handleInputChange}
              placeholder="https://..."
            />
            {errors.image && <p className="error-text">{errors.image}</p>}
          </section>

          <section className="form-field form-field-full">
            <label>Description</label>
            <textarea
              className={`input-container textarea-container ${
                errors.description ? "error" : ""
              }`}
              name="description"
              value={form.description}
              onChange={handleInputChange}
              placeholder="Short description..."
            />
            {errors.description && (
              <p className="error-text">{errors.description}</p>
            )}
          </section>

          <section className="form-field form-field-full">
            <label>Select teams</label>

            <div className="teams-container-create">
              <select
                className={`select-team ${errors.teams ? "error" : ""}`}
                name="teams"
                onChange={handleSelect}
                value=""
              >
                <option value="">Choose a team...</option>

                {teams.map((team) => (
                  <option key={team.id} value={team.name}>
                    {team.name}
                  </option>
                ))}
              </select>

              <small className="teams-help">
                You can select up to 5 teams.
              </small>

              {errors.teams && <p className="error-text">{errors.teams}</p>}
            </div>

            {form.teams.length > 0 && (
              <div className="selected">
                {form.teams.map((team) => (
                  <span className="team-span" key={team}>
                    {team}
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDelete(team)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </section>
        </div>

        <div className="form-actions">
          <button className="submit" type="submit">
            Create driver
          </button>
        </div>
      </form>
    </main>
  );
};

export default Form;