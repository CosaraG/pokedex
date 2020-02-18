import React from 'react';
import { Loader } from 'semantic-ui-react';


import './personalLoading.scss';

const PersonalLoading = () => {
    return (
        <div className="personalLoading">
            <Loader active  inline='centered' className='loaderComponent-loader' />
        </div>
    )
};

export default PersonalLoading;
