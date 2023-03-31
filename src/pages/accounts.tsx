import Link from "next/link";
import AccountsLogin from "@/components/Account/AccountLogin";
import AccountsLogout from "@/components/Account/AccountLogout";
import AccountsRegister from "@/components/Account/AccountRegister";
import Header from "@/components/Header/header";

function isLogged() {
    // changer le "true" en "false" pour tester la page de login
    if (false) {
        return <AccountsLogout />;
    } else {
        return (
            <>
                <AccountsLogin />
                <AccountsRegister />
            </>
        );
    }
}

export default function Accounts() {
    return (
        <div>
            <Header />
            <section className="mt-4">
                {isLogged()}
            </section>
        </div>
    );
}
