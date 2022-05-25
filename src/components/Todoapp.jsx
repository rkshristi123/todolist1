import React from "react"
import Todoinput from "./Todoinput"
import Todolist from "./Todolist"
import  style from "./todo.module.css"
import { v4 as uuidv4 } from 'uuid';

const Todoapp =()=>{
    

    const [todoarr,setTodoarr]= React .useState([])
    const[complete,setComplete]=React.useState([])

    const todoadd=(todoinput)=>{
         setTodoarr([
             ...todoarr,{value:todoinput ,id:uuidv4()  },
         ])
        //  console.log(todoarr)
    };

    const deletetodo=(value)=>{
         let newtodo= todoarr.filter((todo) => todo.value!==value)
         setTodoarr(newtodo)
    }
    

    const isCompleted=(value)=>{
        let newtodo= todoarr.filter((todo) => todo.value!==value)
        setTodoarr(newtodo)
        setComplete([
            ...complete,{ value:value ,id:uuidv4() },
        ])
         console.log(complete)
      
       
    
    }



    return (
      <div className={style.box}>
        <Todoinput  todoadd={todoadd}/>
        <Todolist todoarr={todoarr} deletetodo={deletetodo} isCompleted={isCompleted} complete={complete}  />
        </div>
    )

}

export default Todoapp