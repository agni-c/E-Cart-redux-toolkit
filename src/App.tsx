import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './assets/App.scss';

import CardComponent from './components/Card';
import NavBar from './components/layout/NavBar';
import { getItems, MockItems } from './services/mock';
import DrawerComponent from './components/layout/Drawer';
//screens
import ProductListing from './screens/ProductListing';
import ProductDetails from './screens/ProductDetails';
import WishList from './screens/WishList';


import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { getProductDetails, toggleCart } from './redux';
import { useAppSelector } from './redux/hooks';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {

  const visible = useAppSelector(state => state.cart.isOpen)
  const dispatch = useDispatch()

  const showDrawer = () => {
    dispatch(toggleCart())
  };
  const onClose = () => {
    dispatch(toggleCart())
  };



  return (
    <div className="App">
      <Router>
        <NavBar showDrawer={showDrawer} />
        <DrawerComponent onClose={onClose} visible={visible} />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/wishlist" component={WishList} />
          <Route exact path="/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
