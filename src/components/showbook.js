// src/components/ShowBook.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ShowBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      try {
        // Replace with your API endpoint
        axios.get(`http://localhost:4001/book/get-books`).then(result=>{
          console.log(result.data);
          setBook(result.data)
        }).catch(err=>{
          console.log(err)
        });
        // setBook(response.data);
      } catch (err) {
        setError('Failed to fetch book details');
      } finally {
        setLoading(false);
      }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!book) return <p>Book not found</p>;

  return (
    <section className="container mt-5">
      <div className="row">
      {book.map((book,index)=>
      <section key={index}>
        <div className="col-lg-6">
          <img src={book.image} alt="no image.." className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h1>{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Price:</strong> {book.price}</p>
        </div>
      </section>
      )}
      </div>
    </section>
  );
};

export default ShowBook;
