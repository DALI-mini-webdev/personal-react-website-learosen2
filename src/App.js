import './App.css';
import pic from './IMG_2650.JPG';
import beachpic from './IMG_2013.jpg'
import bookpic from './IMG_5601.jpg'
import Navbar from "./components/Navbar/Navbar";
import HeaderInfo from './components/HeaderInfo';
import MusicBoard from './components/MusicBoard';
import ColoredLine from './components/ColoredLine';
import MusicPic from './IMG_6088.jpg'

function App() {

  const name = "Lea";
  let favoriteFoods = ['Cereal','Pizza', 'Fancy Cheese'];
  var nameComponent = (name === "Lea") ?
  <p>Hi, my name is {name}</p> : <p>my  name is not Lea</p>;
  let inputValue = null;
  const buttonFunction = () => {
    console.log("the button was clicked");
    favoriteFoods.push(inputValue);
    console.log(favoriteFoods);
    // const pluralFoods = favoriteFoods.map((food) => {
    //   return `${food}s`;
    // });
  }
  const onChangeFunction = (event) => {
      console.log(event.target.value);
      inputValue = event.target.value;
  }
  return (
    <div className="App">
      <button onClick={buttonFunction}>Button</button>
      <input type="text" onChange={onChangeFunction}/>
      <Navbar />
      <div class="a">
        <h1 class="white-text"> My Personal Website!</h1>
        <h2>Hi, my name is Lea Rosen!</h2>
       <HeaderInfo />
        <hr></hr>
        <img src = {pic} width={250} height={310}/>
       
        <div>
          <ColoredLine/>
          <h2>My Favorite Things</h2>
          <p >Favorite Drink=Coffee</p>
          <p >Favorite Place=The Beach!</p>
          <p >Favorite Book="Lord of the Flies"</p>
        </div>
        <a href="https://www.rangepondcamp.com/">Range Pond</a>
        <img src= {beachpic} width={320} height = {400} className = "distance"/>
        <img src = {bookpic} width = {320} height = {400} />

        <div>
          <h3>Food I Would Eat</h3>
        </div>
        <div>
          {favoriteFoods.map((food) => {
            return (<li>{food}</li>);
          })}
        </div>
        <ColoredLine/>
        <img src = {MusicPic} width={400} height={370}/>
        <MusicBoard/>
      </div>
      
    </div>
 
 
 );
}

export default App
;

