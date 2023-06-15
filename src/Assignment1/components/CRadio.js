import React from "react";
import {Radio} from "@mui/material";
const CRadio =(props)=>{
    const{...restProps}=props
    return(
        <>
       <Radio {...restProps}/>
        </>
    )
}
export default CRadio