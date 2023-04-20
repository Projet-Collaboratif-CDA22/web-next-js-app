function isLogout() {
  try {
    return "Le compte à bien été déconnecté.";
  } catch (error) {
    return "Une erreur à été rencontré lors de la déconnexion.";
  }
}

export default function Logout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="my-5">
            <h1 className="h3 mb-3 font-weight-normal">Vous êtes déconnecté</h1>
            <p>{isLogout()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
