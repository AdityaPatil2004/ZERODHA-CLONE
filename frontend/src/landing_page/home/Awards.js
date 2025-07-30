 import React from 'react';
 function Awards() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                   <img src='Media/LargestBroker.svg' /> 

                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes i nIndia by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 '>
                        <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commidity derivatives</p>
                        </li>
                        <li>
                            <p>Curreency derivatives</p>
                        </li>
                        
                    </ul>

                        </div>
                        <div className='col-6'>
                        <ul>
                        <li>
                            <p> Stocks and IPO's</p>
                        </li>
                        <li>
                            <p>Direct Mutual Funds</p>
                        </li>
                        <li>
                            <p>Bonds and Government Securities</p>
                        </li>
                        
                    </ul>
                    

                        </div>
                    </div>
                    <img src='Media/pressLogos.png' style={{width:"90%"}} /> 
                    
                </div>

            </div>
         </div>
     );
 }
 
 export default Awards ;