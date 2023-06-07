import React, { useState } from "react";

function Typingspeed() {
  let str = "i am from kolkata i am new here";

  const [text, setText] = useState(str.split(""));
  const [customtext, setCustomtext] = useState("");
  const [showtext,setShowText]=useState(text.join(""))

  const handleChange = (e) => {
    let char=e.target.value
    if(char[char.length-1]==text[0]){
        let arr=text
        let removeChar=arr.shift()
        setCustomtext(customtext + removeChar)
        setText(arr)
        setShowText(text.join(""))
       
    }
    console.log(char,char[char.length-1]);
  };
  return (
    <div>
      <h1>
        <span style={{ color: "green" }}>{customtext}</span>
        <span style={{ color: "black" }}>{text.length==0?"":showtext}</span>
      </h1>
      <input onChange={(e) => handleChange(e)} type="text" />
    </div>
  );
}

export default Typingspeed;
