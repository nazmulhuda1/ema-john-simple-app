import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Order from './components/Order/Order';
import Main from './Layout/main';
import Shop from './components/Shop/Shop'
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { ProductAndCartLoader } from './loaders/ProductAndCartLoader';

const router = createBrowserRouter([{
  path: '/', element: <Main></Main>, children: [
    {
      path: '/', element: <Shop></Shop>,
      loader: async () => {
        return fetch('products.json');
      }
    },
    {
      path: '/shops', element: <Shop></Shop>,
      loader: async () => {
        return fetch('products.json');
      }
    },
    {
      path: '/orders', element: <Order></Order>,
      loader: ProductAndCartLoader,
    },
    {
      path: '/inventory', element: <Inventory></Inventory>
    },
    {
      path: '/about', element: <About></About>
    }
  ]

}])



function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
