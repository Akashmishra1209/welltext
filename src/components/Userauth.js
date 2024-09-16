import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Userauth = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Userauth;