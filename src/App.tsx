import React, { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {

  interface IState {
    people: {
      name:string,
      age:number,
      url:string,
      note?:string
    }[]
  }



  const [people, setPeople] = useState <IState["people"]>([
    {
      name: "Kobe Bryant",
      age: 54,
      url: "https://cdn.bleacherreport.net/images_root/slideshows/1044/slideshow_104463/default.jpg?x=973538",
      note: "He is allergic to staying in one team for a year"
    }
  ])

  return (
    <div className="App">
      <List people={people}/>
      <h1>This is where the Application starts</h1>
    </div>
  );
}

export default App;
