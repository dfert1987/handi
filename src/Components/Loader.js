import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';
import '../Styles/Loading.css';

const Loader = () => {
    return <Spinner className='spin' color='info'>Loading...</Spinner>;
};

export default Loader;
