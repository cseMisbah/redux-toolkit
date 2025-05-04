import AddBook from "../features/books/AddBook";
import BooksView from "../features/books/BooksView";
import EditBook from "../features/books/EditBook";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Navbar from "../layouts/Navbar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            Home
          </Route>
          <Route path="/show-books" element={<BooksView></BooksView>}></Route>
          <Route path="/add-book" element={<AddBook></AddBook>}></Route>
          <Route path="/edit-book" element={<EditBook></EditBook>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
