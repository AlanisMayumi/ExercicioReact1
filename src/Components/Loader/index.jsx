import React from 'react'
import loader from '../../assets/loader.gif'

const Loader = props =>(
    <div>
        <img 
        style={{ width: 75 }}
            alt="Loader icon"
            src={loader}
        />
    </div>
)
export default Loader;