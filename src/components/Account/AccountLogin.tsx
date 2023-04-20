import React from "react";

export default function LoginSubmit() {
  function LoginSubmit() {
    alert("submit");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="my-5">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <form onSubmit={() => LoginSubmit()}>
              <div className="form-group">
                <label htmlFor="loginEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  aria-describedby="emailHelp"
                  placeholder="Entrer votre email"
                  autoComplete="email"
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
