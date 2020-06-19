import React from 'react';
import { SuperContext } from "../context/SuperContext";

function Iputs() {
    return (
      <SuperContext.Consumer>{({numOne, sum1, numtwo, sum2}) =>
        (<div>
        <p>
        <input type="number" onChange={sum1}></input>
        {Number(numOne)+Number(numtwo)}
        </p>
        <p>
        <input type="number" onChange={sum2}></input>
        </p>
        <p>
        <input type="number"></input>
        </p>
        </div>)}
      </SuperContext.Consumer>
    )
}

export default Iputs;
