export default function Register() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="my-5">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Nom d&apos;utilisateur</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    aria-describedby="usernameHelp"
                                    placeholder="Entrer votre pseudo"
                                />
                                <small id="usernameHelp" className="form-text text-muted">
                                    Le nom d&apos;utilisateur sera affiché à la vue de tous
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    placeholder="Entrer votre pseudo"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname">Prénom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    placeholder="Entrer votre pseudo"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Entrer votre email"
                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    L&apos;email sera utilisé pour s&apos;identifier
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Entrer votre mot de passe"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                S&apos;inscrire
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
