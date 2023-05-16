import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {useSession, useSupabaseClient} from "@supabase/auth-helpers-react";
import Account from "@/components/Account/AccountProfile";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="white"
          providers={[]}
          localization={{
            variables: {
              sign_in: {
                email_label: "Adresse E-mail",
                password_label: "Mot de passe",
                email_input_placeholder: "Entrez votre adresse e-mail",
                password_input_placeholder: "Entrez votre mot de passe fort",
                button_label: "Se connecter",
                link_text: "Déja un compte ? Se connecter !",
                loading_button_label: "Connexion en cours ...",
              },
              sign_up: {
                email_label: "Adresse E-mail",
                password_label: "Mot de passe",
                email_input_placeholder: "Entrez votre adresse e-mail",
                password_input_placeholder: "Entrez votre mot de passe fort",
                button_label: `S'inscrire`,
                link_text: "Pas encore de compte ? En créer un !",
                loading_button_label: "Inscription en cours ...",
              },
              forgotten_password: {
                email_label: "Adresse E-mail",
                password_label: "Mot de passe",
                email_input_placeholder: "Entrez votre adresse e-mail",
                button_label:
                  "Envoyer les instructions de réinitialisation du mot de passe",
                loading_button_label: "Envoi des instructions ...",
                link_text: "Mot de passe oublié ?",
                confirmation_text:
                  "Vérifiez vos emails pour réinitialiser votre mot de passe",
              },
            },
          }}
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Home;
