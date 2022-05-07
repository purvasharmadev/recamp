import './home-page.css';
import { Link } from 'react-router-dom';
import landing from "../../Assets/images/landing.svg"

function HomePage() {
  return (
      <>
    <main>
        <div class="content-left">
            <h1>Recamp</h1>
            <h2>Make Group Projects Easy</h2>
            <p>
                A project management tool to help you organise your group project to be more effective and consistent.
                
            </p>
            <Link to="/login" className=" btn btn-primary cta">
          Getting Started
          </Link>            
        </div>
        <div class="content-right">
            <img src={landing} class="hero-img" alt=""/>

        </div>
    </main>
      
      </>
  );
}

export default HomePage;
