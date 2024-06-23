import React from 'react';
import './App.css';
import Header from './components/header/header'
import Calendar from './components/calendar/calendar';
import SideBar from './components/sideBar/sideBar';

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
