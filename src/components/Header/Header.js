import {NavLink} from 'react-router-dom';
import './Header.css';

function Header() {
    return (
      <div className="header_class">
        <nav >
          {/* <ul>
            <li><NavLink exact className="" to ="/">Home</NavLink></li>
            <li><NavLink className="" to ="/about">About</NavLink></li>
            <li><NavLink className="" to ="/create">Create</NavLink></li>
            <li><NavLink className="" to ="/note">Note</NavLink></li>
          </ul> */}
          <p className="p_header">Project "Send a message"</p>
          <button><NavLink exact className="" to ="/">Home</NavLink></button>
          <button><NavLink className="" to ="/about">About</NavLink></button>
          <button><NavLink className="" to ="/create">Create</NavLink></button>
          <button><NavLink className="" to ="/note">Note</NavLink></button>
          
        </nav>
        
      </div>
    );
  }
  
  export default Header;