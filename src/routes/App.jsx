import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css'
import RecoveryPassword from './../containers/RecoveryPassword';
import { BrowserRouter, Switch, Route } from 'react-router-dom;'
import Layout from './../containers/Layout';
import Login from './../containers/Login';



const App = () => {
	return (
		<BrowserRouter>	

			<Switch>
				<Layout>
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path="recovery-password" component={RecoveryPassword}/>
					<Route component={NotFound}/> 
					{/* Componente por default */}
				</Layout>
			</Switch>
		</BrowserRouter>
	);
}

export default App;

// Layaout se abre y se cierra porque recibe {children}
// login se cierra desde el principio porque no recibe ningun valor.