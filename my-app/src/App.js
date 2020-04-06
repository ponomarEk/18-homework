import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import Layout from './layout/index';
import Home from './Pages/Home/home';
import Posts from './Pages/Posts/posts';
import Photos from './Pages/Photos/photos';
import Contacts from './Pages/Contacts/contactBook';
import Render from './Pages/ContactsRender/render'


export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route path="/contacts/:id" >
            <Render/>
          </Route>
          <Route path="/contacts">
            <Contacts/>
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
