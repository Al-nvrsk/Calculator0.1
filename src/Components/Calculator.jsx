import React, { useState } from "react";
import './style.css'


function Calculator(){

    let [currentNumber, setcurrentNumber] = useState('0')
    let [topNumber, settopNumber] = useState('0')
   
    function InputNumber(number) {
        if (currentNumber == '0' && currentNumber.length == 1){
            return setcurrentNumber(number.toString())
        }
        else { return setcurrentNumber(currentNumber + number)
        }
    }

    function Backspace(value){
        if (value.length > 1) {
           return setcurrentNumber(value.split('').slice(0, value.length-1).join(''))
        }
        if (value.length==1) {
            return setcurrentNumber('0')
        }
    }

    function BackspaceMark(value){
            return (value.split('').slice(0, value.length-1).join(''))
        }
        
    const AddPoint  =  ( ) => {
        ( currentNumber.indexOf('.') >=0)
        ? currentNumber 
        : setcurrentNumber(currentNumber + '.')
        }

    function Converter(value){
        if (value.indexOf(".")>0) {
            return (parseFloat(value))
        }
        else {return (parseInt(value))}
    }

    function MainOperation (character){
            if (topNumber=='0') {
             return (settopNumber(currentNumber+character),
             setcurrentNumber('0') )
         }
         else {
            if (topNumber.indexOf(character)>0) {return (settopNumber(Equal()+character), setcurrentNumber('0'))
            } 
            else {return (settopNumber(BackspaceMark(topNumber)+character))}
            }
    }
    
    function Equal () {
        if (topNumber.indexOf('+')>0){
            return (Converter(topNumber)+Converter(currentNumber)).toString()   
        }
        if (topNumber.indexOf('-')>0){
            return (Converter(topNumber)-Converter(currentNumber)).toString()
        }
        if (topNumber.indexOf('*')>0){
            return (Converter(topNumber)*Converter(currentNumber)).toString()
        }
        if ((topNumber.indexOf('/')>0)&&(currentNumber!=='0')){
            return (Converter(topNumber)/Converter(currentNumber)).toString()
        }
        return Converter(topNumber).toString()
    }
    function EqualButton (){
        if (currentNumber==0) {return }
        else {return (settopNumber(Equal()+'='), setcurrentNumber('0'))}
    }

    function Del (){
        return (
            setcurrentNumber('0'),
            settopNumber('0')
        )
    }

 return  (
       <div className="Main">
           <div className="Output">
                <div className='top_Number'>{topNumber}</div>
                <div className="current_Number">{currentNumber}</div>
           </div>
                <button className="span-two">AC</button>
                <button className="span-two" onClick={()=>Del()}>DEL</button>
                <button onClick={()=>InputNumber(7)}>7</button>
                <button onClick={()=>InputNumber(8)}>8</button>
                <button onClick={()=>InputNumber(9)}>9</button>
                <button onClick={()=>MainOperation('/')}>/</button> 
                <button onClick={()=>InputNumber(4)}>4</button>
                <button onClick={()=>InputNumber(5)}>5</button>
                <button onClick={()=>InputNumber(6)}>6</button>
                <button onClick={()=>MainOperation('*')}>*</button>
                <button onClick={()=>InputNumber(1)}>1</button>
                <button onClick={()=>InputNumber(2)}>2</button>
                <button onClick={()=>InputNumber(3)}>3</button>
                <button onClick={()=>MainOperation('-')}>-</button>
                <button onClick={()=>InputNumber(0)}>0</button>
                <button onClick={()=>AddPoint()}>.</button>
                <button className="span-two" onClick={()=>MainOperation('+')}>+</button>
                <button className="span-two" onClick={()=>Backspace(currentNumber)}>&#129044;</button>
                <button className="span-two" onClick={()=>EqualButton()}>=</button>

       </div>)


 }
export default Calculator