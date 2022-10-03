// Parte principal del proyecto
import React from 'react';

const Layout = ({children}) => {
  return ( 
    <div className="Layout">
      {children}
    </div>
   );
}
// Layaout recibe componentes hijos
export default Layout;