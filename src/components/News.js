import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize : 8,
    category : "general"
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor(){
      super();
      this.state = {
      articles : [],
      loading : false,
      page:1
      }
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=067bb264b3f746f68f0cb928466c3d81&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    })
  }

  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.updateNews();
    this.setState({page : this.state.page - 1})
  }
  handleNextClick = async () => {
    this.updateNews();
    this.setState({page : this.state.page + 1})
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsHub - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-4">
          {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                     <NewsItem title ={element.title ? element.title.slice(0,45) : "~Title is unavailable right now! Click on read more to read more about this news."}
                     description ={element.description ? element.description.slice(0,88) : "~Description is unavailable right now! Click on read more to read more about this news."}
                     imageUrl ={element.urlToImage} url ={element.url} author ={element.author} date ={element.publishedAt} source ={element.source.name} />

                     </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className='btn btn-outline-info mx-2' onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className='btn btn-outline-info mx-2' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default News