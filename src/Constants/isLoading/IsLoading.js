import React from 'react';
import RingLoader from "react-spinners/RingLoader";

import './Loading.scss';

const IsLoading = () => {
  return (
    <div className = 'app__isLoading'>
        <RingLoader color="#d87d4a" height={200} width={200}/>
    </div>
  )
}

export default IsLoading;