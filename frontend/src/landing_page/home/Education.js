 import React from 'react';
 function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='Media/education.svg' style={{width:"70%"}} />

                </div>
                <div className='col-6'>
                <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p> Versity,the largest online stock market education book in the world covering everything from the basics to advance trading.</p>
                    <a href=''  style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right"></i></a> 
                    <p className='mt-5'> Trading Q&A, the most active trading and investment community in india for all your market related queries.</p>
                    <a href=''  style={{textDecoration:"none"}}>Trading Q&A  <i class="fa-solid fa-arrow-right"></i></a> 
                    
                </div>
            </div>
        </div>
     );
 }
 
 export default Education ;