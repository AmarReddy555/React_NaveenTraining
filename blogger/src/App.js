import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Posts from './Components/Posts';
import Header from './Components/Header';
import Home from './Components/Home';
import Nav from './Components/Nav';
import PostForm from './Components/PostForm';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div className="container">
                    <Header /> 
                    <Nav />
                    <Switch>
                        <Route path="/posts/new" component={PostForm} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/" component={Home} />                        
                    </Switch>
                    {/* <Home />
                    <Posts /> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;