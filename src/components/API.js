import {Component} from "react";
import axios from 'axios';


class API extends Component {
    constructor(props){
      super(props);
      this.state={
        data:null
      }
    }

    fetchData = () => {
        axios.get("https://poetrydb.org/random")
        .then((response) => {
            console.log(response);
            this.setState({
                data:response.data[0]

            })
            
        
        
        
        }).catch((error) => {
            console.log(error);

        })
     }

     renderPoem = () =>{
         if (this.state.data){
         return (
             <div>
                 <div>Title: {this.state.data.title}</div>
                 <div>Author:{this.state.data.author}</div>
                 <div>
                     {
                         this.state.data.lines.map((line) => {
                             return (<div>{line}</div>);
                         })
                     }
                 </div>
        </div>
             
        )

         } else {
             return(<div>no poem</div>)

         }
     } 
    render(){
        console.log(this.state.data);
        return (
            <div>
                {/*<div>{this.state.data}</div>*/}
                <button onClick = {this.fetchData}>Click me for a poem!</button>
                {this.renderPoem()}
            </div>
        );
  
    }
  }

  export default API;