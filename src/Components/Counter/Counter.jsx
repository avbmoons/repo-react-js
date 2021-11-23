//import { useEffect, useMemo, useState } from "react";
import { useEffect, useRef, useState } from "react";
import { usePrevious } from "../../Hooks/usePrevious";

export const Counter=()=>{

    const [count,setCount] = useState(0);   //  это стейт для счетчика

    const [text,setText] = useState("");   //  это тоже стейт для контролируемой формы в инпуте

    let ref=useRef(null); //это чистка интервала

    const countRef=useRef(null);
    const textRef=useRef(null);

    useEffect(()=>{
        ref.current=setInterval(()=>{},1000);
    return () => {clearInterval(ref.current)};    //выполняется при размонтировании
    });

    const handleCountChange=()=>setCount(count+1);
    //const handleCountChange=()=>setCount((prev)=>prev+1);
    const handleTextChange=(e)=>setText(e.target.value);

    const previous=usePrevious(count);

    return (
        <div>
            <div ref={countRef}>{count}</div>
            <div>previous{previous}</div>
            <input value={text} onChange={handleTextChange} />  
            <button onClick={handleCountChange}>Click me</button>
            <button onClick={handleTextChange}>Send me</button>
            <div ref={textRef}>{text}</div>
        </div>
    );

};