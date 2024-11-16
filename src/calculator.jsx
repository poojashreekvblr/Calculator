import {useState } from "react";
import { evaluate } from "mathjs";
function Calculator(){
    const [input,setInput]=useState({
        expression:'',
        res:'',
    });
    function handleAC(){
        setInput((prev)=>({
            ...prev,
            expression:'',
            res:'',
        }));
        return;
    }
    function handleSubmit(){
        try{
        const res=evaluate(input.expression);
        setInput((prev)=>({
            ...prev,
            res:res.toString(),
        }));
    }catch(error){
        setInput((prev)=>({
            ...prev,
            res:'error',
        }));
    }
}
function handleClick(val){
    setInput((prev)=>({
        ...prev,
        expression:prev.expression+val,
    }));
}
    return(
        <div className="main">
            <h1 className="title">Calculator</h1>
            <div className="row">
                <div id="input">{input.expression}</div>
                <button className="corner" onClick={handleAC}>AC</button>
            </div>
            <div className="row">
                <div id="output">{input.res}</div>
                <button className="corner" onClick={handleSubmit}>=</button>
            </div>
            <div className="row">
                <button onClick={()=>handleClick('1')}>1</button>
                <button onClick={()=>handleClick('2')}>2</button>
                <button onClick={()=>handleClick('3')}>3</button>
                <button className="corner" onClick={()=>handleClick('+')}>+</button>
            </div>
            <div className="row">
                <button onClick={()=>handleClick('4')}>4</button>
                <button onClick={()=>handleClick('5')}>5</button>
                <button onClick={()=>handleClick('6')}>6</button>
                <button className="corner" onClick={()=>handleClick('-')}>-</button>
            </div>
            <div className="row">
                <button onClick={()=>handleClick('7')}>7</button>
                <button onClick={()=>handleClick('8')}>8</button>
                <button onClick={()=>handleClick('9')}>9</button>
                <button className="corner" onClick={()=>handleClick('*')}>*</button>
            </div>
            <div className="row">
                <button onClick={()=>handleClick('0')}>0</button>
                <button onClick={()=>handleClick('(')}>(</button>
                <button onClick={()=>handleClick(')')}>)</button>
                <button className="corner" onClick={()=>handleClick('/')}>/</button>
            </div>
        </div>
        
    );
}

export default Calculator;