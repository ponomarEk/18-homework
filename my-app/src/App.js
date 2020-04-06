import React, { Fragment } from "react";
import {
  Switch,
  Route
} from "react-router-dom";



import Layout from './layout/index';
import Home from './Pages/Home/home';
import Posts from './Pages/Posts/posts';
import Photos from './Pages/Photos/photos';
import Contacts from './contacts';
import Render from './Pages/ContactsRender/render'
import Header from "./layout/Header/header";
import Post from "./Components/Components2/Post/Post";


export default function App() {
  return (
    <> 
   <Header/>
   <Switch>
   <Route exact path='/' component={Home}/>
   <Route path='/posts' component={Posts}/>
   <Route path='/contacts' component={Contacts}/>

   <Route path='/photos' component={Photos}/>
 </Switch>
 </>
  );
}
