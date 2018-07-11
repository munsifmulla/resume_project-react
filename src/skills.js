import React, { Component } from 'react';
import html from './skills/html-5.svg'
import css from './skills/css-3.svg'
import js from './skills/javascript.svg'
import jq from './skills/jquery.svg'
import react from './skills/react.png'
import node from './skills/node.svg'
import sass from './skills/sass.png'

class Skills extends Component {
  render() {
    return (
      <section className="skills card">
        <div className="container">
        <h2>Skills</h2>
          <ul>
            <li>
              <p>HTML</p>
              <img src={html} alt=""/>
            </li>
            <li>
              <p>CSS</p>
              <img src={css} alt=""/>
            </li>
            <li>
              <p>JS</p>
              <img src={js} alt=""/>
            </li>
            <li>
              <p>JQUERY</p>
              <img src={jq} alt=""/>
            </li>
            <li>
              <p>NODE</p>
              <img src={node} alt=""/>
            </li>
            <li>
              <p>REACT</p>
              <img src={react} alt=""/>
            </li>
            <li>
              <p>SASS</p>
              <img src={sass} alt=""/>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Skills;