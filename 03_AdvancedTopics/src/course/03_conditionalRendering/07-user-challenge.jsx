import { useState } from "react";

export const UserChallenge = () => {

  const [user, setUser] = useState(null);

  const login = () => {
    setUser({name: 'Bibi'});
  };

  const logout = () => {
    setUser(null);
  };

  return (<div>
    {user ? (
      <div>
        <h2>hello, {user.name}</h2>
        <button onClick={logout}>log out</button>
      </div>
    ) : (
      <div>
        <h4>you need to be logged in to access this page</h4>
        <button onClick={login}>log in</button>
      </div>
    )}
    </div>)
};

