import { useState } from 'react';
import './App.css';
import Nav from './components/Navigation/Nav';
import Products from './components/Products/Products';
import Recommended from './components/Recommended/Recommended';
import Sidebar from './components/Sidebar/Sidebar';

// data
import products from './db/data';
import Card from './components/Essential/Card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // input filter
  const [query, setQuery] = useState("");

  // handle change
  const handleInputChange= (e)=>{
    setQuery(e.target.value);
  }

// filter data from db. 
  const filteredItems = products.filter(
    (product)=>product.title.toLowerCase().indexOf(query.toLowerCase())!== -1
  );


  // Radio filter
  const handleRadioChange = (e)=>{
    setSelectedCategory(e.target.value);
  }
  // button filter
  const handleButton=(e)=>{
    setSelectedCategory(e.target.value);
  }

  // items filtered by selection
  const filteredData = (selected, query, products)=>{
    let filteredProducts = products;
    if(query){
      filteredProducts = filteredItems;
    }
    if(selected){
      filteredProducts = filteredProducts.filter(({category, title, color, newPrice, company})=>{
        return(
        category === selected || 
        color === selected || 
        title === selected || 
        newPrice === selected || 
        company === selected
      )})
    }
    return filteredProducts.map(({img, title, reviews, star, newPrice, prevPrice})=>{
      return(
        <Card 
          key={Math.random()}
          img={img}
          title={title}
          reviews = {reviews}
          star = {star}
          newPrice= {newPrice}
          prevPrice = {prevPrice}
        />
      )
    })
  }

  const result = filteredData(selectedCategory, query, products)

  
  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleButton={handleButton} />
      <Products result={result} />
    </>
  );
}

export default App;
