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
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <input type="button" value={"submit"} />
          </form>
        </section>
        <section className="card-container">
          <table>
            <thead>
              <tr>
                <td>Nombre</td>
                <td>Correo</td>
                <td>Password</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{nombre}</td>
                <td>{password}</td>
                <td>{email}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
};

export default Usuarios;
