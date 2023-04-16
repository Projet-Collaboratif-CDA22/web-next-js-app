import AccountLogin from "@/components/Account/AccountLogin";
import AccountRegister from "@/components/Account/AccountRegister";

export default function Connect() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="my-5">
            <AccountLogin />
            <AccountRegister />
          </div>
        </div>
      </div>
    </div>
  );
}
