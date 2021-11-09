import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from '../App'

const Products = props => {
    const contexx = useContext(BookContext)

    return (
      <div>
        <div className="menu">
           <button className="btn btn-dark disabled">Kitap Listesi</button>
           <button className="btn btn-dark"><Link to="/sepetim">Sepetim</Link></button>
        </div>
        
        {contexx.data.map((book) => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.name} />
            <div>
              <h4>{book.name}</h4>
              <p>Yazar: {book.author}</p>
              <p>Fiyat: &#8378; {book.price}</p>
              <button
                onClick={() => {
                  contexx.setData3(
                    contexx.data3.map((item) =>
                      item.id === book.id
                        ? { ...item, alınan: item.alınan + 1 }
                        : { ...item }
                    )
                  );
                }}
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Products;
