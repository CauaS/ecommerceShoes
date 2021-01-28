import React from 'react';

import Routes from "./src/routes";
import DataContext from "./src/components/Context/Provider"

export default function App() {
  return(
     <>
      <DataContext>
          <Routes />
      </DataContext>
    </>
  )
} 