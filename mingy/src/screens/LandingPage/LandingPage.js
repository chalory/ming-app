import './LandingPage.css';
import Ellipse from "../../assets/Ellipse1.png";
import Cat from "../../assets/landingpagecat.png";



function LandingPage() {

    return(<>
    <div id='LandingPageContainer'>
    <div id='ellipse-container'>
        <img id='ellipse' alt="ellipse" src={Ellipse}></img>
        <img alt="cat inside ellipse" src={Cat}></img></div>
        <a id="join" href="http://localhost:3000/sign-up">join our 'ming' community</a>
       <div id="text-landing-container"> <p id="text-landing">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sunt in culpa qui officia deserunt mollit anim id est laborum 
       </p>
       <h3 id="hasoyi">- hasoyi, owner of three cats</h3>
    </div>
    </div>
    </>);
}

export default LandingPage;