import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './assets/App.css';

import CardComponent from './components/Card';
import NavBar from './components/layout/NavBar';
import { getItems, MockItems } from './services/mock';
import DrawerComponent from './components/layout/Drawer';

const App: React.FC = () => {
  const [ data, setData ] = useState<MockItems[]>([])
  const [ visible, setVisible ] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    getItems()
      .then(data => setData(data))
      .catch(error => console.log({ error }))
  }, [])

  return (
    <div className="App">
      <NavBar showDrawer={showDrawer} />
      <DrawerComponent onClose={onClose} visible={visible} />
      <div className="item-container">
        {
          data.map(items => (<CardComponent
            description={items.description}
            id={items.id}
            image={items.image}
            price={items.price}
            title={items.title} />))
        }
      </div>
    </div>
  )
}

export default App
