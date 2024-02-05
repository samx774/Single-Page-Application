import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Contact from './Components/Contact/Contact.jsx';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage.jsx';

let routers = createBrowserRouter([
  {path:'', element: <Layout/>, children:[
    {index:true , element: <Home/>},
    {path:'about' , element: <About/>},
    {path:'portfolio' , element: <Portfolio/>},
    {path:'contact' , element: <Contact/>},
    {path:'*' , element: <NotFoundPage/>},
  ]}
])

function App() {
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}

export default App;
