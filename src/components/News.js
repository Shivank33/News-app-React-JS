import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
      super();
      this.state = {
      articles : [],
      loading : false
      }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=067bb264b3f746f68f0cb928466c3d81";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsHub - Top Headlines</h2>
        <div className="row my-4">
          {this.state.articles.map((element)=>{
              return <div className="col md-4" key={element.url}>
                     <NewsItem title ={element.title ? element.title.slice(0,45) : "~Title is unavailable right now! Click on read more to read more about this news."} description ={element.description ? element.description.slice(0,88) : "~Description is unavailable right now! Click on read more to read more about this news."} imageUrl ={element.urlToImage} url ={element.url} />   
                     </div>
          })}    
        </div>    
      </div>
    )
  }
}
export default News