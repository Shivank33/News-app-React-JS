import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description , imageUrl, url} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl ? imageUrl : "https://t3.ftcdn.net/jpg/01/26/39/54/360_F_126395469_FnlY3ZgaAZaosjmSbkgA3I5sS3UXN78T.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem