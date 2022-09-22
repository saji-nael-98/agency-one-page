import React from 'react';
import './Companies.css'
import image1 from '../../assests/images/facebook.svg'
import image2 from '../../assests/images/google.svg'
import image3 from '../../assests/images/microsoft.svg'
import image4 from '../../assests/images/ibm.svg'

function Companies(props) {
    return (
        <section className={'companies'}>
            <div>
                <img width={200}  src={image1}/>
            </div>
            <div>
                <img width={150}  src={image2}/>
            </div>
            <div>
                <img width={200} src={image3}/>
            </div>
            <div>
                <img width={100} src={image4}/>
            </div>
        </section>
    );
}

export default Companies;