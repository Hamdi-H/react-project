import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/Home';
import CreatePage from './components/Create';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
              <Navbar/>
         <div className="content" >
          <Switch>
               <Route exact path="/">
                 <HomePage/>
              </Route>

               <Route path="/Create">
                 <CreatePage/>
                </Route>
{/* 
               <Route path="/Blog-details/:id">
                 <BlogDetails/>
               </Route>
               <Route path="*">
                <NotFound/>
               </Route> */}

           </Switch>
        </div>
      </div>
   </Router>
  );
}

export default App;
