import React, { Component } from 'react'
import loading from './loading.png';
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading.."/>
      </div>
    )
  }
}
