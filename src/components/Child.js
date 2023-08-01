import React, { useState } from "react";

const Child=({arr})=>{
    let [tab,setTab]=useState(null);
    
    function handleClick(i){
        setTab(i)
    }

    return(
        <div>
            {
                arr.map((element,index)=>(
                    <li key={index} onClick={()=>handleClick(index)}>
                        {element.title}
                    </li>
                ))
            }
            {
               arr[tab] && <p>{arr[tab].content}</p>
            }
        </div>
    )

}

export default Child