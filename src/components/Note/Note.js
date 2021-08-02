// http://localhost:3000/note/jo635xvg6hjcyymjfw76qzsb

import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import env from '../../env.json';
import './Note.css';

function Note() {
  let {noteURL} = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass]= useState('hide');
  const [errorClass, setErrorClass]= useState('hide');

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({'url' : noteURL})
    })
        .then( response => response.json())
        .then(response => {
            if (response.result) {
                setNoteText(response.note);
                setLineClass('');
                setFormClass('hide');
                setErrorClass('hide');
            }
            else if (!response.result)
            {
              setLineClass('hide');
              setFormClass('');
              setErrorClass('');
            }
        })
    }
    else
    {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide'); 
    }
  }, []);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    url = url.substr(url.lastIndexOf("/")+1);
    if (url === '') {
      alert('Заполните поля');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  }

  function searchNote() {
    window.location.href = env.url;
  }

    return (
      <div className="component">
        <div className={lineClass}>
          <h4>Message: </h4>
          <div className="message">{noteText}</div> 
          <div><button onClick={searchNote} className='button'>Search for another message</button></div>
        </div>
        <div className={errorClass}>
          <p className='p_error'>An error has occurred. No such hash was found.</p>
        </div>
        <div className={formClass}>
          <form action="" onSubmit={getNote}>
            <h4>Input the url of your message, please:</h4>
            <label className='label' htmlFor="">http://localhost:3000/note/</label>
            <input type='text' name="url" id="url" className="formClass"/>
            <br/>
            <button type="submit" className='button'>Search</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Note;