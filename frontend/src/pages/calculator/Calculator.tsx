import {useState} from "react";
import {Button, Drawer} from "@mui/material";
import CalculatorDrawer from "./CalculatorDrawer.tsx";

// interface formValues{
//     input: string;
// }
function Calculator() {
    const [input, setInput] = useState<string>("");

    function isLastInputOperator(char: string): boolean {
        if (typeof char !== 'string') {
            console.error('isLastInputOperator expects a string argument');
            return false;
        }
        return !!char.charAt(char.length - 1).match(/[+*-/]/);
    }

    const handleInput = (e: any) => {
        console.log(e.target.innerHTML);
        if(isLastInputOperator(input) && e.target.innerHTML.match(/[+*-/]/)){
            alert("Operator is already there");
        }else{
            setInput((prev) => prev + e.target.innerHTML);
        }
        if(e.target.innerHTML == "="){
            setInput(eval(input));
        }
        if(e.target.innerHTML == "clear"){
            setInput("");
        }
        console.log(input)
    }


    return (
    <>
        <div className="border w-[500px] h-56 ">
            <div className="flex flex-row flex-wrap justify-between h-full">
                <div className="border rounded basis-12/12 w-full" >
                    <div className="border m-3 items-center h-5 bg-amber-200"><p className={"text-right"}>{input}</p></div>
                </div>
                <div id={"input-1"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>1</div>
                <div id={"input-2"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>2</div>
                <div id={"input-3"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>3</div>
                <div id={"input-plus"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>+</div>

                <div id={"input-4"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>3</div>
                <div id={"input-5"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>5</div>
                <div id={"input-6"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>6</div>
                <div id={"input-minus"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>-</div>

                <div id={"input-7"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>7</div>
                <div id={"input-8"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>8</div>
                <div id={"input-9"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>9</div>
                <div id={"input-multiply"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>*</div>

                <div id={"input-0"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>0</div>
                <div id={"input-clear"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>clear</div>
                <div id={"input-equal"} className="border basis-3/12 hover:bg-amber-100 cursor-pointer" onClick={handleInput}>=</div>
            </div>
        </div>
        <CalculatorDrawer/>
    </>
    );
}

export default Calculator;