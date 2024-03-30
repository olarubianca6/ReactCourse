import { useState } from "react";

export const ToggleChallenge = () => {

  const [value, setValue] = useState(false)

  const handleClick = () => {
    setValue(true);
  };

  return (
    <div>
      <button onClick={handleClick}>click here</button>
      {value && <h2>hello</h2>}
    </div>
  );
};
