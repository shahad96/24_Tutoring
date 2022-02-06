import logo from "../images/zdny_logo.png";
import { BsBoxArrowLeft } from "react-icons/bs";
import './SignUpStudentCss.css';

function Header() {
    return (
      <div>
        <div className="image">
          <div className="studentNavbar">
          <h5><a className="login" href="/"><BsBoxArrowLeft />تسجيل الخروج</a></h5>
              <img src={logo} className="logoo"/>
          </div>
          </div>
      </div>
    );
  }
  
  export default Header;