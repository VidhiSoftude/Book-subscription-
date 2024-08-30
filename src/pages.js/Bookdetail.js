// src/pages/BookDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();

  // Mock data for demo purposes
  const books = [
    {
      id: '1',
      title: "Like Mother, Like Daughter",
      genre: "Literary fiction",
      imageUrl: "https://static.bookofthemonth.com/cdn-cgi/image/fo…/covers/list/LikeMotherLikeDaughter_200x300.jpg",
      description: "A compelling story about family bonds and secrets.",
    },
    {
      id: '2',
      title: "Five Star Stranger",
      genre: "Literary fiction",
      imageUrl: "https://static.bookofthemonth.com/cdn-cgi/image/fo…/covers/list/FiveStarStranger_200x300.jpg",
      description: "A riveting tale of mystery and intrigue.",
    },
    {
      id: '3',
      title: "The Lost Story",
      genre: "Fantasy",
      imageUrl: "https://static.bookofthemonth.com/cdn-cgi/image/fo…/covers/list/TheLostStory_200x300.jpg",
      description: "An epic adventure set in a magical world.",
    },
    {
      id: '4',
      title: "The God of the Woods",
      genre: "Literary fiction",
      imageUrl: "https://static.bookofthemonth.com/cdn-cgi/image/fo…/covers/list/TheGodOfTheWoods_200x300.jpg",
      description: "A deep dive into nature and the human psyche.",
    },
    {
      id: '5',
      title: "The Great Alone",
      genre: "Historical fiction",
      imageUrl: "https://static.bookofthemonth.com/cdn-cgi/image/fo…/covers/list/GreatAlone_200x300.jpg",
      description: "A historical novel set in the Alaskan wilderness.",
    },
    {
      id: '6',
      title: "The Wishing Game",
      genre: "Contemporary fiction",
      imageUrl: "https://static.bookofthemonth.com/cdn-cgi/image/fo…/covers/list/TheWishingGame_200x300.jpg",
      description: "A heartwarming story of hope and dreams.",
    },
  ];

  const book = books.find(b => b.id === id);

  if (!book) return <p>Book not found!</p>;

  return (
    <div className="container">
      <h1>{book.title}</h1>
      <img src={book.imageUrl} alt={book.title} className="img-fluid mb-3" />
      <h3>Genre: {book.genre}</h3>
      <p>{book.description}</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default BookDetail;
