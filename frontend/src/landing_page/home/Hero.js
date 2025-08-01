 import React from 'react';
 function Hero() {
    return ( 
         <div classname='container p-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png'   className='mb-5' />
                <h1 className='mt-5'>Invest in everything </h1>
                <p>Online platform to invest in stocks,derivatives,mutual funds, and more</p>
                <button  className='p-2 btn btn-primary fs-5 mb-5' style={{width:"25%",margin: "0 auto",}}>Sign-up Now</button>
            </div>
        </div>
     );
 }
 
 export default Hero ;