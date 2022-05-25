import React from "react"
import Todoitem from "./Todoitem"
import  style from "./todo.module.css"
import Completeditem from "./Completeditem"

const Todolist=({todoarr,deletetodo,isCompleted,complete,btncomplete}) =>{
const [show,setShow] =React.useState(true)
    return (
      <div className={style.box3}>
          
              {
                  todoarr.map((todo)=>(
                   <Todoitem  key={todo.id} value={todo.value} deletetodo={deletetodo} isCompleted={isCompleted} />
                  ))
              }
              <div>
                  <button className={style.btn1} onClick={()=>setShow(!show)} >{show?" Hide Completed todo":"Show completed todo"}</button>
                 {show?<div>
                    { complete.map((el)=>(
                        <Completeditem valuec={el.value} key={complete.id} />
                     )) }
                 </div> : false}
                
                     </div> 
      </div>

        
    )
}

export default Todolist