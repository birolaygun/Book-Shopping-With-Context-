import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from '../App'


const Cart = () => {
        const contexx = useContext(BookContext)

        return (
    <div>
          
        <div className="menu">
           <button className="btn btn-dark "><Link to="/">Kitap Listesi</Link></button>
           <button className="btn btn-dark disabled">Sepetim</button>
        </div>

<h3 className="m-2">sepet toplamı:  &#8378; <span className="myclass">
   {((contexx.data3.[0].price * contexx.data3.[0].alınan)+(contexx.data3.[1].price * contexx.data3.[1].alınan)+
(contexx.data3.[2].price * contexx.data3.[2].alınan)+(contexx.data3.[3].price * contexx.data3.[3].alınan)+
(contexx.data3.[4].price * contexx.data3.[4].alınan)).toFixed(2)} </span></h3>

{
    (contexx.data3.filter((book1)=> (book1.alınan  > 0))).map(book2 => 


      <div className="book">
       <img src={book2.image} alt={book2.name} />
        <div>
        <h4>{book2.name}</h4>
        <p>Yazar: {book2.author}</p>
        <p>Fiyat:  &#8378; {book2.price}</p>
        <p>Sepetinizde bu kitaptan toplam {book2.alınan} adet var.</p>
          <p>Toplam: &#8378; {(book2.price * book2.alınan).toFixed(2)} </p>
          <button onClick={()=>{ if (book2.alınan > 0)
        {
            contexx.setData3(contexx.data3.map(item=> item.id === book2.id ? {...item, alınan: item.alınan - 1} : {...item}))

        } else {alert("sepette zaten yok")}
        }} >-</button>
          <button onClick={()=>{ 
        
            contexx.setData3(contexx.data3.map(item=> item.id === book2.id ? {...item, alınan: 0} : {...item}))

        }} > Sepetten Çıkar</button>
          <button onClick={()=>{ 
        
            contexx.setData3(contexx.data3.map(item=> item.id === book2.id ? {...item, alınan: item.alınan + 1} : {...item}))

        }}  >+</button>
        </div>
      </div>

) } 


    </div>
  );
};

export default Cart;
