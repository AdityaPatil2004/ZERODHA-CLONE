 import React from 'react';
 function Stats() {
    return ( 
         <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidance</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with rs 3.5+ lakh crores worth of equity investments</p>
                    <h2 className='fs-4'> No spam or gimmicks</h2>
                    <p className='text-muted'> No gimmicks,spam,"gamification",or annoying push notification. High quality apps that you use at your pace,the way you like</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'> Not just an app,but a whole ecosystem.Our invesrtments in 30+ fintech startsup offer you tailored services specific to your needs</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>with initiatives like Nudge and kill switch,  we dont just facilitate transaction, but actively help you do better with yor money. </p>

                </div>
                <div className='col-6 p-5'>
                    <img src='Media/ecosystem.png' style={{width:"90%"}} />
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products  </a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo  </a>
                    </div>
                </div>

            </div>
         </div>
     );
 }
 
 export default Stats ;