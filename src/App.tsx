import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './assets/App.scss';

import CardComponent from './components/Card';
import NavBar from './components/layout/NavBar';
import { getItems, MockItems } from './services/mock';
import DrawerComponent from './components/layout/Drawer';
import ProductListing from './screens/ProductListing';

const App: React.FC = () => {

  const [ visible, setVisible ] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };



  return (
    <div className="App">
      <NavBar showDrawer={showDrawer} />
      <DrawerComponent onClose={onClose} visible={visible} />
      <ProductListing />
    </div>
  )
}

export default App
