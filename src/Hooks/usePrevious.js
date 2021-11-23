import { useEffect, useRef } from "react";

//  функция получения предыдущего значения
export const usePrevious=(value)=>{
    const ref=useRef(null);

    useEffect(()=>{
        //console.log("useEffect");
        ref.current=value;
    },[value]);

    return ref.current;

};
