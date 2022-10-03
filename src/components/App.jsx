import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css'


const App = () => {
	return (
		<Layout>
			<Login/>
		</Layout>
	);
}

export default App;

// Layaout se abre y se cierra porque recibe {children}
// login se cierra desde el principio porque no recibe ningun valor.