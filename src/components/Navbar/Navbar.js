import './Navbar.css';
import Logo from "../../assets/Logo.png";
import Kape from "../../assets/kape.png";

const Navbar = () => {

    
  
    return( <header>
      <div className="navbar-wrapper">

          <img className="logo"src={Logo} alt="cat logo"></img>
          {/* <h1 className="name">ming</h1> */}

          <img className="kape"src={Kape} alt="kofi"></img>
          <a href="https://ko-fi.com/"className="kofi">buy us a cup of ko-fi?</a>
         
          </div>

          

          </header>


         
         
        
     
    );
  }


export default Navbar;