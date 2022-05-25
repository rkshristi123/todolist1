import React from  "react"
import  style from "./todo.module.css"

const Completeditem=({valuec})=>{

    

    return(
        <>

<div className={style.box4}>
            
            <div className={style.box5}>
                <input className={style.inp}  type="checkbox" checked="checked"/>
                <h5 className={style.striked}>{valuec}</h5>
                </div>
            
           <a  > <i class="fa-solid fa-trash"></i></a>
    
    
              
            </div>
        </>
    )
}
export default Completeditem