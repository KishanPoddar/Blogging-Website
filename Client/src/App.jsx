import React, { useContext } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Context } from "./context/Context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";

const App = () => {
  const { user } = useContext(Context); 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
