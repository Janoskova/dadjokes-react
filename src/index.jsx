import React from 'react';
import { render } from 'react-dom';
import { jokes } from './jokes';
import Joke from './Joke';
import './style.css';

const App = () => (
  <>
    <div className="container">
      {jokes.map((item) => (
        <Joke
          key={item.id}
          userAvatar={item.avatar}
          userName={item.name}
          text={item.text}
          likes={item.likes}
          dislikes={item.dislikes}
        />
      ))}
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
