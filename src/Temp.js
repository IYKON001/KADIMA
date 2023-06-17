import { useState } from "react";
function Temp(){
    const [number, setNumber] = useState(0)
    const [color, setColor] = useState("neutral")
    const[emoji, setEmoji] = useState("")


    const handleIncrease = () => {
        const newTemp = number + 1
        if (number === 20) return;
        setNumber(newTemp)
        newTemp == 0 ? setColor("neutral") : null
        newTemp >= 5 ? setColor("hot") : null
        newTemp >= 10 ? setColor("hotter") : null
        newTemp >= 15 ? setColor("veryHot") : null
        newTemp == 15  ? setEmoji(<span>&#129327;🥵</span>) : null
        newTemp == -5 ? setColor("neutralnpm run") : null
        newTemp <= -10 ? setColor("cold") : null
        newTemp <= -15 ? setColor("colder") : null
        newTemp == -15 ? setEmoji("") : null;

    }   


    const handleDecrease = () => {
        const newTemp = number - 1
        if (number === -20) return;
        setNumber(newTemp)
        newTemp == 0 ? setColor("neutral") : null
        newTemp <=-5 ? setColor("cold") : null
        newTemp <=-10 ? setColor("colder") : null
        newTemp <= -15 ? setColor("coldest") : null
        newTemp <= -15 ? setEmoji(<span>&#x1F976;😨</span>) : null
        newTemp == 5 ? setColor("neutral") : null
        newTemp == 10 ? setColor("hot") : null
        newTemp == 15 ? setColor("hotter") : null
        newTemp == 15 ? setEmoji("") : null;

    }



    return <div>
        <div className="texts">
             <h2>Temp-Ra-Ture</h2>
               <p> click on a button to increase or decrease the temprature.... </p>
               <p> <i>it has a max-temp of 20&#8451; and a min-temp of -20&#8451;</i></p>
            </div>
        <div className="wrapper">
            <div className="emoji">{emoji}</div>
            <div className={`displayTemp ${color}`}>{number}&#8451;</div>
            <div className="buttonWrapper">
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
            </div>

        </div>
    </div>
}

export default Temp;    