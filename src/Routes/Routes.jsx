import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/login";
import SignUp from "../pages/Signup/Signup";
import Error from "../pages/Error/Error";
import InstructorsPage from "../pages/Instructor/InstructorsPage";
import ClassesPage from "../pages/Classes/ClassesPage";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard"
import Additem from "../pages/Dashboard/AddItem/Additem";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'classes',
        element: <ClassesPage></ClassesPage>
      },
      {
        path: 'instructor',
        element: <InstructorsPage></InstructorsPage>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
        
      ]
    },
    {
        path: 'dashboard',
        element:<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        children:[
            {
                path: 'additem',
                element: <Additem></Additem>
            },
            {
                path: 'adminhome',
                element: <AdminHome></AdminHome>
            }

        ]

    },
    {
        path: '*',
        element: <Error></Error>
    }
  ]);