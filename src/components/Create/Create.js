import React from "react";
import {useState} from 'react';
import env from '../../env.json';
import './Create.css';


function Create() {

const [url, setUrl]= useState('');
const [lineClass, setLineClass]= useState('hide');
const [formClass, setFormClass]= useState('');

let sendData = (obj) =>{
  setFormClass('hide');
  setLineClass('');
  fetch(env.urlBackend, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(obj)
})
    .then( response => response.json())
    .then(response => {
        if (response.result) {
            setUrl(env.url+'/'+response.url);
        }
    })
}

let loadDataFromForm = (event) => {
  event.preventDefault();
  let note = event.target.elements.note.value;
  note = note.trim();
  if (note === '') {
      alert('Заполните поля');
      return false;
  }
  sendData({"note" : note});
}
  
    return (
      <div className='component'>
        <form onSubmit={loadDataFromForm} className={formClass}>
                <label htmlFor="">Input your message</label>
                <br/>
                <textarea name="note" id="note" className='message' defaultValue="Test"></textarea>
                <br/>
                <button type="submit" className='button'>Создать</button>
        </form>
        <div className={lineClass}>
          <h4>This is an URL address of your new message:</h4>
          <div className='message'>{url}</div>
          <div><button className='button' onClick = {function(){window.location.reload()}}>Create a new message</button></div>
        </div>
      </div>
    );
  }
  
  export default Create;