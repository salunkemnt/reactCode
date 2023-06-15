import React, { useState } from 'react'

const Myproject = () => {
    const[txt,setTxt]=useState('Shardul');
    const[no,setNo]=useState("");
    const regex= /^[A-Za-z0-9]*$/ ;
    const textHandler= (e) => {
        let mytext=e.target.value;
        
        if(regex.test(mytext))
        {
            setTxt(e.target.value)
        }
        else{
            alert("you are not doing right")
        }
}
     const numberHandler=(e) => {
        no=e.target.value;
        
        setNo(e.target.value)
    
     }

  return (
    <div>
        <form>
      text:<input type='text' onChange={textHandler}></input><br></br>
      number:<input type='mynumber' onChange={numberHandler}></input><br></br>
      <input type="button" value="Submit"></input>
      {txt}<br></br>
      {no}
      </form>
    </div>
  )
}

export default Myproject
