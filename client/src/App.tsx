import React from "react";
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import ApiInterface from '@/assets/api-interface.svg';
import Logo from '@/assets/menu-burger.png';
export const App = () => {
  return (
    <div className={'container'}>
      <pre>
        log fd
        PLATFORM {__PLATFORM__}
      </pre>
      <Outlet />
      <img src={Logo} alt="logo" width={30} />
      <p>
        <ApiInterface width={30} height={30}></ApiInterface>
      </p>
      <h1>React App</h1>
      <p>
        <Link to='/registration'>registration</Link>
      </p>
      <p>
        <Link to='/login'>login</Link>
      </p>
      <button type='button' className={classes.button}>test</button>
    </div>
  );
};
