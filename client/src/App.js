import React from 'react';
import Router from './router'
import { Route } from 'react-router-dom'
import Header from './components/layouts/header'
import Footer from './components/layouts/footer'

function App() {
  return (
    <div>
      <Route component={Header} />
      <Route component={Router} />
      <Route component={Footer} />
    </div>
  );
}

export default App;
