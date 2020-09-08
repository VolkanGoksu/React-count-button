import React,{Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    };
  }
  raiseCount(){
     this.setState({
       count:this.state.count +1
     });
  };
  dropCount(){
    this.setState({
      count:this.state.count -1
    });
  };
  render(){
    return (
      <div className="App">
          <div class="ui label">
           <i class="mail icon"></i> {this.state.count}
          </div>
         <div>
         <button className="positive ui button"onClick={()=>this.raiseCount()} >+</button>
         <button className="positive ui button"onClick={()=>this.dropCount()} >-</button>
         </div>
      </div>
    );
  }
  
}

export default App;
