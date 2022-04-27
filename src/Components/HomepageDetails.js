import React, { Component } from 'react'
import '../Style/HomepageDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class HomepageDetails extends Component {
  render() {
    return (
      <div className='page'>
        <div className='col s6 my'>
            <h1>Making Food  Taste Better,</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis voluptas omnis porro distinctio, rerum id quisquam sint, optio perspiciatis non qui aspernatur ea odio facere necessitatibus enim nobis. Recusandae, ut?
                <br />
                <button className="button-design" href='https://www.google.com'>View Our Story</button>
            </p>
        </div>
        <div className='col s6 my-jollof'>
        </div>
          
      </div>
    )
  }
}