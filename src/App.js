import React from 'react';
import logo from './assets/images/logo.png';

const App = () => {
  return (
    <div className="h-100 d-flex flex-column bg-dark align-items-center justify-content-center gap-5">
      <img src={logo} alt="logo" width="200" />
      <div className="text-light fs-3">React-Electron-Boilerplate</div>
    </div>
  );
};

export default App;
