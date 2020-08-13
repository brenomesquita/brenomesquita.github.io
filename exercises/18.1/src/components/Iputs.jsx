import React, { useContext } from 'react';
import { SuperContext } from "../context/SuperContext";

function Iputs() {
  const {numOne, sum1, numTwo, sum2} = useContext(SuperContext)
    return (
      <div>
        <p>
        <input type="number" onChange={sum1}></input>
        {Number(numOne.numOne)+Number(numTwo.numTwo)}
        </p>
        <p>
        <input type="number" onChange={sum2}></input>
        </p>
        <p>
        <input type="number"></input>
        </p>
        </div>)
}

export default Iputs;
