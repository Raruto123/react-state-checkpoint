import './App.css';
import React from 'react';
import Photo from "/Users/aliounsane/Desktop/GoMyCode/ReactProject/react-state-checkpoint/src/IMG_4401.jpg"
import { PopUp } from './Popup';

class App extends React.Component {
Person = {
    fullname : "Sané Mohamed",
    bio : "Je suis un développeur junior fullstack en formation à GoMyCode",
    imgSrc : {Photo},
    profession : "développeur fullstack",
    show : false,
  };
  clickEvent = () => this.setState({show : true});
  render() {
    return(
      <>
      <h1>Bienvenue sur mon profil, clique sur ce bouton</h1>
      <button onClick={this.clickEvent}><PopUp></PopUp></button>
      </>
    )
  }
}

// console.log(App.Person.show);

export const appInstance = new App();

export default App;
