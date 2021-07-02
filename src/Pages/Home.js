import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div>
          <main>
              <div class="content">
                  <h1>Hi, I'm Christy Clair George.</h1>
                  <h3>Currently doing final year in Electronics and Communications Engineering (ECE) at National Institute of Technology, Calicut.
                       Accidentally fell in love with coding during my Project days. So started learning Python and now fullstack development.</h3>
                       <strong>Technologies Known: C, C++, PYTHON, HTML, CSS, JavaScript, GIT. Also know the basics of ML and AI.</strong> 
              </div>
         </main>
         <main>
                  <div class="matter">
                              <p> Check out my projects:</p>
                                       <button class="btn"><Link to="./Projects"><span>Projects</span></Link></button>
                  </div>
         </main>
        </div>
    )
}
export default Home;