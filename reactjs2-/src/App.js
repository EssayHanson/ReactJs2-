import React, { Component } from 'react';
import Card from './components/card';
import CardList from './components/cardList';

let data = [
  { name: "Angular",
    avatar_url: "https://avatars3.githubusercontent.com/u/139426?v=4",
    company: "Angular" },
  { name: "Vue",
    avatar_url: "https://avatars1.githubusercontent.com/u/6128107?v=4",
    company: "Vue" },
  { name: "Javascript",
    avatar_url: "https://avatars2.githubusercontent.com/u/1782180?v=4",
    company: "Javascript" }
];

class App extends Component {
  render() {
    return (
      <div>
        <CardList cards={data} />
      </div>
    );
  }
}

export default App;
