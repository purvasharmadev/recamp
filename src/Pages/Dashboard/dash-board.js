import './dash-board.css';
import{useAuth}from "../../Auth/auth-context"
function DashBoard() {
    const {userDetail} = useAuth()
    console.log(userDetail)
  return (
    <div className='m-top'>
        <h2>This is dashboard ! you are succesfully loggedin!</h2>
    </div>
  );
}

export default DashBoard;
