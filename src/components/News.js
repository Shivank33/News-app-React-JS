import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =[
      {
        "source": {
          "id": "bbc-sport",
          "name": "BBC Sport"
        },
        "author": null,
        "title": "England vs West Indies LIVE: First Test, day two, Lord's – cricket score, radio commentary, video highlights and text updates",
        "description": "England host West Indies in the first Test at Lord's – follow text updates, radio commentary and video highlights.",
        "url": "http://www.bbc.co.uk/sport/cricket/live/c1665djew60t",
        "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
        "publishedAt": "2024-07-11T10:07:12.4560428Z",
        "content": "Yesterday, all eyes were on Jimmy. \r\nPlaying his final Test, fans arriving at Lord's were hoping to see the veteran England seamer blast through the West Indies batting order.\r\nInstead it was debutan… [+424 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
    ]

  constructor(){
      super();
      this.state = {
      articles : this.articles,
      loading : false
      }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsHub - Top Headlines</h2>
        <div className="row my-4">
          {this.state.articles.map((element)=>{
              return <div className="col md-4" key={element.url}>
                     <NewsItem title ={element.title.slice(0,45)} description ={element.description.slice(0,88)} imageUrl ={element.urlToImage} url ={element.url} />   
                     </div>
          })}    
        </div>    
      </div>
    )
  }
}
export default News