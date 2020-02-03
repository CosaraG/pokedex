import React from 'react';
import { Loader } from 'semantic-ui-react';

import './loaderComponent.scss';

const LoaderComponent = () => {
    return (
        <div className="loaderComponent">
            <Loader active size='huge' inline='centered' className='loaderComponent-loader' />
        </div>
    )
};

export default LoaderComponent;
