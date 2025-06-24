import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { RingLoader } from 'react-spinners';

import './Loading.css';



function ScrollToTop() {

  const { pathname } = useLocation();

  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {

    setIsLoading(true);



    const timer = setTimeout(() => {

      setIsLoading(false);

    }, 1000);



    return () => clearTimeout(timer);

  }, [pathname]);



  useEffect(() => {

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  }, [pathname]);



  return (

    <>

      {isLoading && (

        <div className="loading-screens">

< RingLoader    color="#ad343e" />


        </div>

      )}

    </>

  );

}



export default ScrollToTop;