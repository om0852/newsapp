import React, { Component } from 'react'

export class Newitem extends Component {
  render() {
    let {title,description,imgurl,newurl} = this.props;
    return (
      <div>
        <div  className="card" style={{width:" 18rem"}}>
  <img src={imgurl}  className="card-img-top" alt={imgurl}/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}.</p>
    <a href={newurl}  className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newitem
