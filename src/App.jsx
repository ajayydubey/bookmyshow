
import { Route } from "react-router-dom";
//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Components 
 

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.Page";



function App() {
  return (
    <>
  <DefaultHOC  path="/" excat component={HomePage}/>
  <MovieHOC  path="/movie/:id" excat component={Movie}/>
  </>
  );

}


export default App;











/*
 <div className="App">
      <h1 className="text-6xl hover:text-blue-500"> 
        Hello World
      </h1>
      
      <button className="border-2 px-2 py-1 border-blue-500 rounded bg-blue-500 text-white hover:bg-transparent hover:text-blue-500"> Tailwind</button>

    </div> 
*/