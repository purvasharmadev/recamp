import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./Auth/RequiresAuth";

// pages
import  HomePage  from "./Pages/HomePage/home-page";
import PageNotFound from "./Pages/PageNotFound/page-not-found";
import DashBoard from "./Pages/Dashboard/dash-board";
import Todo from "./Components/Todo/todo";

export default function URLRoutes() {
    return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={
        <RequiresAuth>
          <DashBoard/>
        </RequiresAuth>
        } />
       <Route path="/todo" element={
        <RequiresAuth>
          <Todo/>
        </RequiresAuth>
        } />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    );
  }
