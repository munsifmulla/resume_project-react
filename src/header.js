import React, { Component } from 'react';

class Header extends Component {

  componentDidMount(){
    let profile = document.querySelector('.profile'),
    heading = document.querySelector('.header');

    window.addEventListener("scroll", function(){
      if(parseInt(window.pageYOffset, 10) >= profile.offsetTop - 120){
        heading.classList.add("fixed")
        return false;
      }else{
        heading.classList.remove("fixed")
      }
    })
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <section className="logo">
            Munsif<span>Mulla</span>
            <p>Web Developer & Designer</p>
          </section>

          <nav>
            <a href="#">Profile</a>
            <a href="#">Experience</a>
            <a href="#">Portfolio</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
