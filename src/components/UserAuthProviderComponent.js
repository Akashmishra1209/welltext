import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function UserAuthProviderComponent() {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
      <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
    </div>
  )
}
;