import React , {useState} from 'react';
import './App.css';
import Header from './models/components/header/header'
import Calendar from './models/components/calendar/calendar';
import SideBar from './models/components/sideBar/sideBar';

function App() {
  return (

    <div className='container'>
      <Header />
      <div className='App-body'>
        <SideBar />
        <Calendar />
      </div>
    </div>
  );
}
export default App;
