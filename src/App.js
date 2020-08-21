import React, { useState } from 'react';
import './styles/css/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Chat from './components/Chat'
import Login from './components/Login'
import { useStateValue } from './StateProvider';

function App() {
	const [{ user }, dispatch] = useStateValue();
  	return (
		// BEM naming convention 
    	<div className="app">
      		<Router>
				  {!user ? (
					  <Login />
				  ):
				  ( <>
					<Header />
					<div className="app__body">
						<Sidebar />
						<Switch>
							<Route path="/room/:roomId">
								<Chat />
							</Route>
							<Route path="/">
								<h1>Welcome</h1>
							</Route>
						</Switch>
					</div>
					</>
				  )}
			</Router>	
    	</div>
  	);
}

export default App;
