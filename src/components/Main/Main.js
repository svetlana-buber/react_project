import './Main.css';

function Main() {
    return (
      <div className='component'>
        <h1>Wellcom to our site!</h1>
        <br/>
        <h3>You may to choose one of the options:</h3>
        <ul>
          <li><a href = '/create'>Сreate a message</a></li>
          <li><a href = '/note'>Get a message</a></li>
        </ul>
      </div>
    );
  }
  
  export default Main;