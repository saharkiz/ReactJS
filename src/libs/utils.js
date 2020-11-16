import React, {useEffect, useState} from 'react';
export const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = false;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export const useCSS = url => {
    useEffect(() => {
      const script = document.createElement('link');
  
      script.href = url;
      script.rel = 'stylesheet';
      script.type = 'text/css'
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };

const TOKEN_KEY = "vccmoderator";
const SET_KEY = "atstime"

export const login = (token) => {
    //console.log(token);
    var object = new Date().getTime();
    localStorage.setItem(SET_KEY, object);
    localStorage.setItem(TOKEN_KEY, token);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    console.log("logout")
}

export const getLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        const itemExpiry = localStorage.getItem(SET_KEY)
        if (!itemExpiry) {
          localStorage.removeItem(TOKEN_KEY);
        }
        var now = new Date()
        now.setDate(now.getDate());
       // console.log( parseInt(itemExpiry)+10000 < now.getTime())

        if ( parseInt(itemExpiry)+10000000 <  now.getTime()) {
          localStorage.removeItem(TOKEN_KEY);
          window.open( '/'
                      ,'_self'
          );
          return "";
        }
        return localStorage.getItem(TOKEN_KEY);
    }
} 

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return false; //show admin
    }

    return true; //show login
}