import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import SongList from './SongList';
import './style.css';


function App(){
  return (
        <SongList/>
  );
}
render(<App />, document.getElementById('root'));
