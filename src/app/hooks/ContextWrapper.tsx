"use client"
import { createContext, useContext, useEffect, useState } from "react";


export const FullScreenContext = createContext < any > ({});
export const IsLoadedContext = createContext < any > (false);



 const ContextWrapper  = ({children}:  {
        children: React.ReactNode;
      }
      ) => {
        const [isfullscreen,
          setFullScreen] = useState(false);

          const [isLoaded,
            setLoaded] = useState(false);
            

            return (
                <FullScreenContext.Provider value={{isfullscreen,setFullScreen}}>
                <IsLoadedContext.Provider value={{isLoaded,setLoaded}}>
            {children}
    </IsLoadedContext.Provider>
    </FullScreenContext.Provider>
            )
        }

export default ContextWrapper

export const useFullscreen = () => useContext(FullScreenContext);
export const useLoadState = () => useContext(IsLoadedContext);
