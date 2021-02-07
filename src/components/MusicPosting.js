import React, { Component } from 'react';



class MusicPosting extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }
 deletePosting = () => {
     this.props.delete(this.props.id)
 }

 editTitle =() => {
     this.setState({editing:true})
 }
 submit = () => {
     var newName = {
         name:this.state.newTitle
     }
     this.props.save(this.props.id.newname);
     this.setState({editing: false})
 }
 render() {
     var editBoxOrEditButton = null;
     if (this.state.editing){
         editBoxOrEditButton = (
             <div>
                 <input value={this.state.newTitle} onChange={this.changeNewTitle}/>
                 <button>submit</button>
            </div>
        );
    }
    else {
        editBoxOrEditButton= (
            <button onClick={this.editTitle}>Edit</button>
        );
    }
    
    return (
     <div>
       <p>{this.props.name}, {this.props.artist}</p>
       <button onClick={this.deletePosting}>Delete</button>
       <button onClick={this.editTitle}>Edit</button>
     </div>
  );
 }
}
export default MusicPosting;
