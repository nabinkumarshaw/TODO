import { useState } from "react";

export default function TodoList(){
    let[Todo,SetTodo]=useState(["sleep well","buying foods"]);
    let[newTodo,SetnewTodo]=useState(" ");  //to detect the input value
    function additems(){
       // console.log("adding new items");
       SetTodo([...Todo,newTodo]);
       SetnewTodo("");
    }

    function newTodoValue(event){
        SetnewTodo(event.target.value);
    }
    
    return(
    <div>
        <h1>To Do List</h1>
        <input type="text" placeholder="Add Task" value={newTodo} onChange={newTodoValue}></input>
        <button onClick={additems}style={{backgroundColor:"yellow",marginLeft:"5px"}}>Add Items</button>
        <hr></hr>
        <ul>
            {
                Todo.map((todos)=>{
                     return <li>{todos}</li>
                })
            }
        </ul>
    </div>
    );
}