import { 
  Button,
  Menu,
  Container
} from "./styles";

function ActionsSignedIn(props) {
  return (
    <Container>  
      <div className="actions">
        <span style={{color: "white"}}>Hello, </span>
        <span className="user-welcome">{props.user}</span>
        <Button onClick={props.logout}>Log out</Button> 
      </div>

      <Menu size={25} onClick={props.openMenu}/>
    </Container>
  );
}

export default ActionsSignedIn;
