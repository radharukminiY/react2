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
const Output=this.state.filter((data)=>{
  return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
})
this.setState({filtered:Output})
}

render(){

  return(
    <React.Fragment>

<Header userText={(data)=>{this.filterNews(data)}}/>
<News newsdata={this.state.filtered}/>
<hr/>
<Footer/>
  </React.Fragment>
)
}
}

export default Home;
