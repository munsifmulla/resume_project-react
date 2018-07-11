import React, { Component } from 'react';
import lic from './portfolio/lic.jpeg'
import free from './portfolio/freecharge.png'
import parent from './portfolio/parentlane.png'
import wise from './portfolio/wise.png'
import zenoop from './portfolio/zenoop.png'
import ipdn from './portfolio/ipdn.png'

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio card dark-strip">
        <div className="container">
        <h2>Portfolio</h2>
          <ul>
            <li>
              <p>Licious</p>
              <img src={lic} alt="Licious"/>
              <a href="#">View Project</a>
            </li>
            <li>
              <p>freecharge</p>
              <img src={free} alt="Licious"/>
              <a href="#">View Project</a>
            </li>
            <li>
              <p>parentlane</p>
              <img src={parent} alt="Licious"/>
              <a href="#">View Project</a>
            </li>
            <li>
              <p>wise</p>
              <img src={wise} alt="Licious"/>
              <a href="#">View Project</a>
            </li>
            <li>
              <p>Zenoop</p>
              <img src={zenoop} alt="Licious"/>
              <a href="#">View Project</a>
            </li>
            <li>
              <p>IPDN</p>
              <img src={ipdn} alt="Licious"/>
              <a href="#">View Project</a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Portfolio;