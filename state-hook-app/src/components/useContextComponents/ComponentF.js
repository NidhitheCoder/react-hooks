import React from "react";
import { UserContext, SampleContext } from "../../App";

function ComponentF() {
  return (
    <div>
      Component F
      <UserContext.Consumer>
        {user => {
          return (
            <SampleContext.Consumer>
              {sample => {
                return (
                  <div>
                    User context value {user} , sample value : {sample}{" "}
                  </div>
                );
              }}
            </SampleContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
