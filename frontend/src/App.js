import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from './components/About';
import Header from './components/Header';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Body from "./components/Body";
import Contact from "./components/Contact";


let Applayout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/signin",
        element:<Signin/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
