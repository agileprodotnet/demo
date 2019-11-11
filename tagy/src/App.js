import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import {
  MDBEdgeHeader
} from 'mdbreact'


function App() {
  return (
    <>
      <Header />
      <div class="mt-3 mb-3">
        Content
    </div>
      <Footer />
    </>
  );
}

export default App;
