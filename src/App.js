import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Navbar from './components/Navbar';
import {useEffect, useState} from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = () => {
    fetch('books.json').then(resp => resp.json()).then(data => setBooks(data.books)).catch(err => console.log(err))
  }

  useEffect(fetchBooks, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"  element={ <Home /> }/>
        <Route path="/books"  element={ <BookList books={books} setSelectedBook={setSelectedBook}/> }/>
        <Route path="/books/:id"  element={ <Book selectedBook={selectedBook} /> }/>
        <Route path="/contact"  element={<Contact /> }/>
      </Routes>
    </>
  );
}

export default App;
