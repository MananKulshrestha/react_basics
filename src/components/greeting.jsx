
function Greeting(props){
        const logout = <h2 className="greet">Please log in.</h2>;
        const login = <h2 className="greet">Hello, {props.name}!</h2>;
        if (props.isLoggedIn){ //GIVE CONDITIONAL IN OUTSIDE RETURN STATEMENT
        return(login);
        }
        else{ return(logout);
            }
}
export default Greeting;