import React from 'react';
import './App.scss';

import HeaderComponents from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const App = () => {
  return (
    <div>
      <HeaderComponents />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
