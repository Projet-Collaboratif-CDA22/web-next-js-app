import React, { useEffect, useState } from "react";
import getDocumentElement from "@popperjs/core/lib/dom-utils/getDocumentElement";
import Link from "next/link";

export default function LoginSubmit() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidated, setValidated] = useState(false);
  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") {
      alert("Veuillez renseigner un email");
      setValidated(false);
    }
    if (password === "") {
      alert("Veuillez renseigner votre mot de passe");
      setValidated(false);
    }
    if (!email.includes("@")) {
      alert("Veuillez renseigner un email valide");
      setValidated(false);
    }
    if (password.length < 8) {
      alert("Votre mot de passe doit faire au moins 8 charactères");
      setValidated(false);
    }
    if (
      email !== "" &&
      password !== "" &&
      email.includes("@") &&
      password.length > 8
    ) {
      setValidated(true);
    }
  };
  useEffect(() => {
    if (isValidated) {
      //TODO Login the user with email and password through API
    }
  }, [isValidated]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="my-5">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <form onSubmit={(e) => validateForm(e)}>
              <div className="form-group">
                <label htmlFor="loginEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  aria-describedby="emailHelp"
                  placeholder="Entrer votre email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Nécessite une inscription au préalable
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  placeholder="Entrer votre mot de passe"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
