import { useContext, useState } from "react";
import { When } from "react-if";
import { LoginContext } from "../setting/capability";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Login(props) {
  const context = useContext(LoginContext);
  //sign in
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //sign up

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  //   state = {
  //     username: '',
  //     password: '',
  //   }
  const handleSubmit = (event) => {
    event.preventDefault();
    context.login(username, password);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    console.log('form submit')
    context.signup(username, password, firstname, lastname, email, role);
    // location.reload();

  };
  //   const handleChange = (event) => {
  //        in case of class component
  //        this.setState({ [event.target.name]: event.target.value });
  //   };

  return (
    <>
      <When condition={!context.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        {/* <form>
          <input
            type="text"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            name="firstname"
            onChange={(e) => {
              setfirstname(e.target.value);
            }}
          />
          <input
            type="text"
            name="lastname"
            onChange={(e) => {
              setlastname(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          /> 
          <input
            type="text"
            name="role"
            onChange={(e) => {
              setrole(e.target.value);
            }}
          />
        </form> */}

        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your E-mail"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </Form.Group>
<hr/>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>
          <hr/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="firstname"
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
            />
          </Form.Group>
          <hr/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
          </Form.Group>
          <hr/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Admin or User?"
              onChange={(e) => {
                setrole(e.target.value);
              }}
            />
          </Form.Group>
          <hr/>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </When>

      <When condition={context.loggedIn}>
        <button type="button" onClick={context.logout}>
          {/* {console.log(context.user)} */}
          Logout
        </button>
        <span>{context.user.id}</span>
      </When>
    </>
  );
}
