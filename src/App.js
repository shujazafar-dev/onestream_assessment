import "react-datetime/css/react-datetime.css";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store'

import Home from './pages/Home'
import TodoDetail from './pages/TodoDetail'
import { Main } from './containers/Main'
function App() {
  return (
    <Provider store={store}>
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/**
                *  @Requirement  :  Need to create a route for todo details page here;
                * 
                */}
           
          </Routes>
        </BrowserRouter>
      </Main>
    </Provider>
  );
}

export default App;
