import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import SongList from './SongList';
import './style.css';


function App(){
  const [name, setName] = useState('React')
  
  return (
        <SongList/>
      );
  }

render(<App />, document.getElementById('root'));
