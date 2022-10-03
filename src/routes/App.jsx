import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css'
import RecoveryPassword from './../containers/RecoveryPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home.jsx';
import NotFound from './../pages/NotFound.jsx';
import SingUp from './../containers/SingUp';



const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/sing-up" element={<SingUp />} />
					<Route exact path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="*" element={<NotFound />} />
					{/* Archivo por default */}
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
// Layaout se abre y se cierra porque recibe {children}
// login se cierra desde el principio porque no recibe ningun valor.