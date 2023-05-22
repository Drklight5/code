import React from 'react';
import './css/App.css';

//Components
import {Title} from "./Title";
import {Lista} from "./lista";
import {Elemento} from "./elemento";

const todos = [
  {
    item : "yes",
    text :"elemen1"
  },
    {
    item : "yes",
    text :"elemen2"
  },

  {
    item : "yes",
    text :"elemen3"
  },
  {
    item : "yes",
    text :"elemen4"
  },
];



function App() {
  return (
    <React.Fragment>
      <Title/>
      <Lista>
        {
          todos.map(i =>{
            <Elemento text={i.text}/>
          })
        }
      </Lista>
      {/*<h2></h2>
      <element></element>*/}
    </React.Fragment>
  );
}

export default App;
