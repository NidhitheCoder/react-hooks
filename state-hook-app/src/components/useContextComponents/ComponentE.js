import React, { useContext } from "react";
// import ComponentF from "./ComponentF";
import { UserContext, SampleContext } from "../../App";

function ComponentE() {
  const user = useContext(UserContext);
  const sample = useContext(SampleContext);
  return (
    <div>
      Component E{user} - {sample}
    </div>
  );
}

export default ComponentE;
