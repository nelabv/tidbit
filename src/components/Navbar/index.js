                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Header
} from "./styles";
import PopupMenuMobile from "../PopupMenuMobile";
import ActionsSignedIn from "../ActionsSignedIn";
import ActionsNotSignedIn from "../ActionsNotSignedIn";
import logo from "../../assets/tidbit.png";

function Navbar(props) {
  const { isNavTransparent } = props;
  
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      { isOpen 
          ? <PopupMenuMobile 
              openMenu={openMenu} 
              logout={props.logout}/> 
          : null }

      <Header>
          <Link to="/">
            <img src={logo} alt="Tidbit 2021" className="logo-svg"></img>
          </Link>


          <div className="actions-container">
            { props.user 
              ? <ActionsSignedIn 
                  logout={props.logout}
                  user={props.user}
                  openMenu={openMenu}/>

              : <ActionsNotSignedIn 
                  openMenu={openMenu}/> }
          </div>
      </Header>
    </>
  );
}

export default Navbar;
