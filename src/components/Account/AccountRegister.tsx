import {useEffect, useState} from "react";

export default function Register() {
  const [userName, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [passwordFirst, setPasswordFirst] = useState('')
  const [passwordSecond, setPasswordSecond] = useState('')
  const [isValidated, setValidated]= useState(false)
  const validateForm = (e: { preventDefault: () => void; })=>{
    //Todo add validation
    e.preventDefault()
    if(passwordFirst !== passwordSecond){
      alert("les mots de passes ne correspondent pas")
      setValidated(false)
    }else{
      setValidated(true)
    }
console.log(userName,firstName,lastName,email,passwordFirst,passwordSecond)
  }
  useEffect(()=>{
    if (isValidated){
      //todo: register the user
    }
  }, [isValidated])
 return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="my-5">
              <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
              <form onSubmit={validateForm}>

                <div className="form-group">
                  <label htmlFor="username">Nom d&apos;utilisateur</label>
                  <input
                      type="text"
                      className="form-control"
                      id="username"
                      aria-describedby="usernameHelp"
                      placeholder="Entrer votre pseudo"
                      autoComplete="username"
                      value={userName}
                      required={true}
                      onChange={(e)=>setUsername(e.target.value)
                  }
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
                      placeholder="Entrer votre nom"
                      autoComplete="lastname"
                      value={lastName}
                      required={true}
                      onChange={(e)=>setLastname(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstname">Prénom</label>
                  <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="Entrer votre prénom"
                      autoComplete="firstname"
                      value={firstName}
                      required={true}
                      onChange={(e)=>setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="registerEmail">Email</label>
                  <input
                      type="email"
                      className="form-control"
                      id="registerEmail"
                      aria-describedby="emailHelp"
                      placeholder="Entrer votre email"
                      autoComplete="email"
                      value={email}
                      required={true}
                      onChange={(e)=>setEmail(e.target.value)}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    L&apos;email sera utilisé pour s&apos;identifier
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="registerPassword">Password</label>
                  <input
                      type="password"
                      className="form-control"
                      id="registerPassword"
                      placeholder="Entrer votre mot de passe"
                      autoComplete="new-password"
                      value={passwordFirst}
                      required={true}
                      onChange={(e)=>setPasswordFirst(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="registerPasswordConfirm">
                    Password confirmation
                  </label>
                  <input
                      type="password"
                      className="form-control"
                      id="registerPasswordConfirm"
                      placeholder="Entrer votre mot de passe"
                      autoComplete="new-password"
                      required={true}
                      value={passwordSecond}
                      onChange={(e)=>setPasswordSecond(e.target.value)}
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
