import './home-page.css';
import { Link } from 'react-router-dom';
import landing from "../../Assets/images/landing.svg"
import {useAuth} from "../../Auth/auth-context"
import {Notify} from "../../Hooks/useNotify"

function HomePage() {
  const {signInWithGoogle,signOut,error,response,isLoggedIn,loader} = useAuth()
  return (
      <>
    <header>
        <div class="content-left">

        {response && <h2 className='color-danger bold'>{response}</h2>}

            <h1>Recamp</h1>
            <h2>Make Group Projects Easy</h2>
            <p>
                A project management tool to help you organise your group project to be more effective and consistent.
                
            </p>
            {
              isLoggedIn ?       
               <Link to="dashboard" className=" btn btn-primary cta">
              Go To Dashboard
              </Link>            :
              <button onClick={signInWithGoogle} className=" btn btn-primary cta">
                Sign-In With Google
              </button>            

            }

        </div>
        <div class="content-right">
            <img src={landing} class="hero-img" alt=""/>
        </div>
    </header>   
     {/*  */}
      </>
  );
}

export default HomePage;
