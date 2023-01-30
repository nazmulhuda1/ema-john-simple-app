import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Order from './components/Order/Order';
import Main from './Layout/main';
import Shop from './components/Shop/Shop'
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { ProductAndCartLoader } from './loaders/ProductAndCartLoader';
import SingUp from './components/SingUp/SingUp';
import Login from './components/Login/Login';
import Shipping from './components/Shipping/Shipping';
import PrivetRoute from './routers/PrivetRoute';

const router = createBrowserRouter([{
  path: '/', element: <Main></Main>, children: [
    {
      path: '/', element: <Shop></Shop>,
    },
    {
      path: '/shops', element: <Shop></Shop>,
    },
    {
      path: '/orders', element: <Order></Order>,
      loader: ProductAndCartLoader,
    },
    {
      path: '/inventory', element: <Inventory></Inventory>
    },
    {
      path: '/shipping', element: <PrivetRoute><Shipping></Shipping></PrivetRoute>
    },
    {
      path: '/about', element: <About></About>
    },
    {
      path: '/singup',
      element: <SingUp></SingUp>
    },
    {
      path: '/login',
      element: <Login></Login>
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
