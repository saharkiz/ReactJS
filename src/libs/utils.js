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

export const login = (token) => {
    console.log(token);
    localStorage.setItem(TOKEN_KEY, token);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    console.log("logout")
}

export const getLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        //var t = JSON.stringify(localStorage.getItem(TOKEN_KEY));
        return localStorage.getItem(TOKEN_KEY);
    }
} 

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return false; //show admin
    }

    return true; //show login
}