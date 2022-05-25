import React from "react"
import  style from "./todo.module.css"

const Todoitem=({value,deletetodo,isCompleted})=>{
    return(
        <>
        <div className={style.box4}>
            
        <div className={style.box5}>
            <input className={style.inp} onClick={()=>isCompleted(value)} type="checkbox"/>
            <h5>{value}</h5>
            </div>
        
       <a  onClick={()=> deletetodo(value)}> <i class="fa-solid fa-trash"></i></a>
            
          
        </div>
        

    
        </> 
    )
}
export default Todoitem