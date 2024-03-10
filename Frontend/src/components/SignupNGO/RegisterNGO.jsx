import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const SignupNGO = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    description: "",
    establishedIn: "",
    state: "",
    city: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/loginngo");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_cont}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/loginngo">
            <button type="button" className={styles.white_btns}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create NGO Account</h1>
            <input
              type="text"
              placeholder="Full Name"
              name="Name"
              onChange={handleChange}
              value={data.name}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <textarea
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={data.description}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Established in"
              name="establishedIn"
              onChange={handleChange}
              value={data.establishedIn}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              onChange={handleChange}
              value={data.state}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
              value={data.city}
              required
              className={styles.input}
            />
              <input
              type="text"
              placeholder="Description"
              name="Description"
              onChange={handleChange}
              value={data.title}
              required
              className={styles.input}
            />
             
              <input
              type="text"
              placeholder="On a scale of 1 to 5 what is your need rating"
              name="Need_Rating"
              onChange={handleChange}
              value={data.img}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Register 
              {/* on clicking this chatbot opens and the data goes in backend */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupNGO;
