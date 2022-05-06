import React from 'react'
import loadingIcon from '../assets/loading.svg'

const Loading = (props) => {

    return (
        <>
            {
                props.isLoading ? (
                    <div className='loading'>
                        <img src={loadingIcon} className='loading-icon' />
                    </div>) :
                    (<div>
                    </div>)
            }
        </>
    );
};

export default Loading;