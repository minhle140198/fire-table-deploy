import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

export const RouterContext = React.createContext({});

interface ICustomBrowserProps {
  children: React.ReactNode;
}

const CustomBrowserRouter: React.FC<ICustomBrowserProps> = ({ children }) => (
  <HashRouter>
    <Route>
      {routeProps => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </HashRouter>
);

export default CustomBrowserRouter;
