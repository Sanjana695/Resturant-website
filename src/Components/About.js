import React, { Component } from 'react'
import '../Style/About.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='col s6 about-us'>
            <h1 className='heading'>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis voluptas omnis porro distinctio, rerum id quisquam sint, optio perspiciatis non qui aspernatur ea odio facere necessitatibus enim nobis. Recusandae, ut?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis voluptas omnis porro distinctio, rerum id quisquam sint, optio perspiciatis non qui aspernatur ea odio facere necessitatibus enim nobis. Recusandae, ut?
            <br />
                <button className="about-button" href='https://www.google.com'>Customer Reviews</button>
            </p>
        </div>
        <div className='col s6 about-pics'>
        </div>
          
      </div>
    )
  }
}