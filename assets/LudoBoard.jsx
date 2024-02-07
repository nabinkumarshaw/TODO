import { useState } from "react";

function LudoBoard(){
    let [Moves,SetMoves]=useState({Blue:0,Green:0,Red:0,Yellow:0})
    let [Emp,SetEmp]=useState(["empty"]);

    function handelblue(){
        Moves.Blue+=1;
        SetMoves((prev) => {
            return {...prev}
        });
        
        SetEmp((pre)=>{
            return [...pre,"blue Moving"]
        });
        console.log(Emp);
    };
    

    function handelgreen(){
        Moves.Green+=1;
        SetMoves((prev) => {
            return {...prev}
        });
    };

   
    return (
         
        <div>
        <p>Game Begins</p>
        <p>Bluetext={Emp}</p>
        <p>BlueMoves={Moves.Blue}</p>
        <button onClick={handelblue} style={{backgroundColor:"blue",color:"black"}}>+1</button>
        <p>GreenMoves={Moves.Green}</p>
        <button onClick={handelgreen} style={{backgroundColor:"green",color:"black"}}>+1</button>
        <p>RedMoves={Moves.Red}</p>
        <button style={{backgroundColor:"red",color:"black"}}>+1</button>
        <p>YellowMoves={Moves.Yellow}</p>
        <button style={{backgroundColor:"yellow",color:"black"}}>+1</button>
        </div>
    );
}
export default LudoBoard;