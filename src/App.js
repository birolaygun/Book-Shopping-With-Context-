import React, {useState} from "react";
import "./styles.css";
import { Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";

import { data, data2 } from "./data";
import { createContext } from "react";

export const BookContext = createContext()

export default function App() {
  const [data3, setData3] =useState(data2) 
  return (
    <div className="App">
      <BookContext.Provider value={{ data, data2, data3, setData3 }}>
      <h1>
        Alışveriş Sepeti   
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/sepetim" component={Cart} />
            
      </BookContext.Provider>
</div>
  );
}
