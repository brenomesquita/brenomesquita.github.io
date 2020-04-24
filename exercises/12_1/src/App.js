import React from 'react';

import './App.css';
import { logDOM } from '@testing-library/react';
import logo from './logo.svg'
const lista = ["React", "JavaScript", "Jest", "CSS"];
function App() {
      return (
        <div className='App-header'>
        <ul>
          {lista.map(e=><li>
            <button onClick={() => alert(e.length)}>{e}</button>
            </li>)}
        
        </ul>
        <img src={logo} className='App-logo'/>
        </div>
        
      );
}
export default App;
