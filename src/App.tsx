import { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';


  export interface IState {
    people: {
      id:number,
      name:string,
      age:number,
      url:string,
      note?:string
    }[]
  }

function App() {

  const [people, setPeople] = useState <IState["people"]>([
    {
      id: 2,
      name: "Kobe Bryant",
      age: 54,
      url: "https://cdn.bleacherreport.net/images_root/slideshows/1044/slideshow_104463/default.jpg?x=973538",
      note: "He is allergic to staying in one team for a year"
    }
  ])

  return (
    <div className="App">
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
