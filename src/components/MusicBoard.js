import React, { Component } from 'react';
import { Map } from 'immutable';
import MusicPosting from './MusicPosting'

class MusicBoard extends Component {
 constructor(props) {
   super(props);
   this.state = {
     music: Map(),
     musicID: 0,
     newMusicName: '',
     newArtist:''
   }
 }

newMusicNameFunction = (event) => {
    this.setState({ newMusicName: event.target.value });
}
newArtistFunction = (event) => {
    this.setState({ newArtist: event.target.value });
}

saveMusicInfo = () => {
      let musicData = {
          name: this.state.newMusicName,
          artist: this.state.newArtist
      }
this.setState({
          music:this.state.music.set(this.state.musicID,musicData),
          musicID: this.state.musicID + 1

      });
}
delete = (id) => {
    this.setState({music:this.state.music.delete(id)})
}
save = (id,field) => {
    this.setState({music:this.state.music.update(id, (n) => {return Object.assign({}, n, field);})})
}

render() {
    const allMusic = this.state.music.entrySeq().map(
        ([id,music]) => {
            return (
                <MusicPosting delete={this.delete} name={music.name} artist={music.artist} id={id} 
                    save={this.save}
                    delete={this.delete}
                    edit={this.edit}
                    name={music.name}
                    artist={music.artist}
                    id ={id}
                
                
                
                />

            )
        }
    )
return (
     <div>
       <h1> Let's talk about music!</h1>
       {allMusic}
       <p>Add your favorite song:</p>
       <input type="text" value={this.state.newMusicName} onChange={this.newMusicNameFunction} />

       <p>Enter the Artist:</p>
       <input type="text" value={this.state.newArtist} onChange={this.newArtistFunction} />

       <button onClick={this.saveMusicInfo}>Save!</button>
       <button onClick={this.editTitle}>Edit</button>
     </div>
   )
};  
}
export default MusicBoard;