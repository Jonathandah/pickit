import React, { useEffect, useState } from 'react';
import './Home.css';
import { ArrowRight, Trash2 } from 'react-feather';

function Home(props) {
  const [choicesList, updateChoisesList] = useState([]);

  const renderItem = (item, index) => {
    return (
      <li className='list__item' key={index}>
        <p className='item__text'>{item}</p>
        <button
          className='item__delete'
          onClick={() => {
            let tempArray = [...choicesList];

            tempArray.splice(index, 1);
            updateChoisesList(tempArray);
          }}
        >
          <Trash2 />
        </button>
      </li>
    );
  };

  const addChoice = (e) => {
      
    e.preventDefault();
    let value = document.querySelector('.input__container').value;
    if(value.length < 2) return;
    document.querySelector('.input__container').value = '';
    updateChoisesList([...choicesList, value]);
  };

  return (
    <div className='Home'>
      <form className='Home__form' onSubmit={(e) => addChoice(e)}>
        <div className='form__input'>
          <input className='input__container' type='text' placeholder='Add choices...'></input>
          <div className='input__underline'></div>
        </div>
        <button className='form__submitButton' type='submit'>
          <ArrowRight />
        </button>
      </form>
      <ul className='Home__list'>{choicesList.map((item, index) => renderItem(item, index))}</ul>
    </div>
  );
}

export default Home;
