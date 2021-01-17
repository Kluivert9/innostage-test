import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import Loader from '../../components/Loader';
import Routes from '../../components/Routes';
import { getVisibilityLoader } from '../../store/reducers/app/selectors';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css';

export default function App() {
  const visibilityLoader = useSelector(getVisibilityLoader);

  return (
    <BrowserRouter>
      <Routes />
      {visibilityLoader && <Loader />}
      <ReactNotification />
    </BrowserRouter>
  );
}
