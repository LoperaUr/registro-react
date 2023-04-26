import { useState } from "react";
import Header from "../helpers/Header";

const Usuarios = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section>
      <Header />
      <section className="content">
        <section className="form-container">
          <form action="">
            <label htmlFor="">Nombre:</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
            />
            <label htmlFor="">PassWord:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <label htmlFor="">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <div className="button-submit">Enviar</div>
          </form>
        </section>
        <section className="card-container">
          <div className="card">
            <h3>Nombre: </h3>
            <h4>{nombre}</h4>
            <h3>Password: </h3>
            <h4>{password}</h4>
            <h3>Email: </h3>
            <h4>{email}</h4>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Usuarios;
