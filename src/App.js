import React from 'react';
import './App.css';
import AuthForm from './Components/Auth/Auth-form';
import ResultWindow from './Components/ResultWindow/Result-window';

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="app__title">Whats in store</h1>
      </header>
      <main className="app__info-windows">
      <section>
          <ResultWindow/>
        </section>
        <section>
          <AuthForm/>
        </section>
      </main>
    </div>
  );
}

export default App;
