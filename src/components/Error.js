import React from 'react';
import { useRouteError } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Error = () => {
    const error = useRouteError();
  const { status, statusText } = error;
  const isOnline=useOnline()
  if (!isOnline) {
    return <h1>Please Check Your Internet Connection</h1>;
  }
  return (
      <div>
          <h1>Opps!!!</h1>
          <h2>Something Went Wrong</h2>
          <h2>{status}-Page {statusText}</h2>
    </div>
  )
}

export default Error;