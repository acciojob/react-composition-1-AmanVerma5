import React from "react";
import { useState } from "react";
import Child from "./Child";

const Parent=()=>{

    let arr=[
        {
          title:"Tab 1",
          content:"This is the content for Tab 1."
        },
        {
          title:"Tab 2",
          content:"This is the content for Tab 2."
        },
        {
          title:"Tab 3",
          content:"This is the content for Tab 3."
        }
      ]


    return(
        <div className="output">
            <h1>Output:</h1>
            <Child arr={arr} />
        </div>
    )
}
export default Parent