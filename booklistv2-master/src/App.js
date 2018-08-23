import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

import BookList from "./components/layout/BookList";
let imgUrl = 'https://cdn.allwallpaper.in/wallpapers/706x400/11755/beach-blue-sky-706x400-wallpaper.jpg'; 

class App extends Component {
  render() {
      return (
          <div style={{
              backgroundImage: 'url(' + imgUrl + ')',
              backgroundSize: 'cover',
              overflow: 'hidden'
          }}>
              <Provider store={store} >
                  <Router>
                      <Route exact path="/" component={BookList} />
                  </Router>
              </Provider>
          </div>
    
    );
  }
}

export default App;
