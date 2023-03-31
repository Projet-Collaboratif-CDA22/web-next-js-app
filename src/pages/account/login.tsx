export default function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="my-5">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrer votre email" />
                                <small id="emailHelp" className="form-text text-muted">Nécessite une inscription au préalable</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Entrer votre mot de passe" />
                            </div>
                            <button type="submit" className="btn btn-primary">Se connecter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}