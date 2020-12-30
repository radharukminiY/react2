import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import News from './News';
import JSON from './db.json';

class Home extends Component{
constructor(){
  super()


this.state={
  news:JSON,
  filtered:JSON
}
}

filterNews=(userInput)=>{
const Output=this.state.news.filter((data)=>{
  return data.feed.toLowerCase().indexOf(userInput.toLowerCase())>-1 || //gives data based on feed
  data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1 //gives data based on title
})
this.setState({filtered:Output})
}

render(){
return(
  <React.Fragment>


<Header userText={(data)=>{this.filterNews(data)}}/>
<News newsdata={this.state.filtered}/>
<hr/>
<Footer year="2021"/>
  </React.Fragment>
)
}
}

export default Home;
