import React from "react";
import './App.css';
import mywonderfullimage from './femmedeveloppeur.jpg';
import myimage from './developerengineer.jpg';
import myphoto from './jewerlydesign.jpg';
import { Welcome } from "./Profile/profile component";

function App() {
  let fn ="Amri Boutheina"
  const alertMyInput = () => alert(fn)
  return (
    <div className="App" style={{ backgroundColor:'hotpink' ,textAlign: 'Center' ,borderStyle:'solid' ,borderSize:1 ,borderColor:'black' }} >
  <Welcome fullname="Amri Boutheina" bio="jewelry design" profession="developer engineer" alertMyInput={alertMyInput}>
  <img  style={{width:350 ,height:350 ,borderStyle:'solid' ,borderSize:1 ,borderColor:'brown' }} src={mywonderfullimage}  alt='femmedeveloppeur' />
  </Welcome>
  <div className="developer engineer" style={{ marginLeft:'50px' ,marginRight: '20px',marginTop:'70px',textJustify: 'auto' }} >
  <h1 style={{ fontWeight: '800' }}>Developer engineer</h1>
  <p style={{ marginLeft:'60' ,textJustify: '-moz-initial' ,fontSize: '17px' }} > A developer is an individual who is responsible for creating or working on the development of a product or service. Most developers utilize one or more programming languages to develop their product or service. They may work alone or on a team, and may develop part of or all a product or service. Companies like Microsoft and Oracle employ many developers, due to the complexity of the products and services they develop and sell to customers.

  For example, a software developer is an individual that may create a new software program or maintain an existing software program. A web developer is an individual that creates or updates web pages, utilizing HTML, JavaScript, or other web programming languages.</p>  
  <img  style={{width:300 ,height:300 ,borderStyle:'solid' ,borderSize:1 ,borderColor:'brown' }} src={myimage}  alt='developerengineer' /> 
  </div>
  <div className="jewelry design" style={{ marginLeft:'50px',marginRight:'20px',marginTop:'70px'  ,textJustify: 'auto'  }}  >
  <h1 style={{ fontWeight: '800' }} > jewerly design</h1>
  <p style={{ marginLeft:'100' ,textJustify: '-moz-initial' ,fontSize: '17px' }} > Jewellery designers are trained professionals who use a variety of materials, such as precious metals, gems, stones and crystals, to create accessories for the ears, neck, hands, fingers, feet and toes. Jewellery design requires a lot of creativity, imagination and technical knowledge.</p>
  <img  style={{width:300 ,height:300 ,borderStyle:'solid' ,borderSize:1 ,borderColor:'brown' }} src={myphoto}  alt=' jewerlydesign' />
  </div>
    </div>
  );
}

export default App;
