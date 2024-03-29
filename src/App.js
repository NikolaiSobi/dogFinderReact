import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { DogDetails } from './DogDetails';
import { routeChange } from './RouteChange';
import { useState } from 'react';

function App(props) {
const [dogs, setDogs] = useState(props)
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/dogs' element={props.dogs.map((dog, idx) => {return <img id={idx} className={`${dog.name}`} onClick={() => routeChange(dog.name)} src={dog.src} width="250" height="250"/>})}></Route>
          <Route path='/dogs/:name' element={<DogDetails details={dogs}/>}></Route>
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "https://www.southernliving.com/thmb/tXa6uF93OgesMpTj8UVX6HfMNZw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-185743593-2000-507c6c8883a44851885ea4fbc10a2c9e.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "https://www.southernliving.com/thmb/cmiO85FoCZcZJneLhKaMr7su0wc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-459878644-2000-e12866dacc3c41718bd3fc2cc309a207.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "https://www.southernliving.com/thmb/JmtbnsnoGBx0xD4MJrPSj_D_Nig=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-617929555-2000-dce03085d2e74122aa8fa7153e77c85a.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "https://www.southernliving.com/thmb/CM7m34I91QeAA6O2FQcrfh2_-Eo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-513284433-2000-bd323ecfb5764c99a7da05e115b74f50.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
