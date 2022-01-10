import React, {useState} from 'react'


   


export default function Form(props) {

    const [text, setText] = useState("")

    const setClickUpperHandler = () =>{
        // console.log("button was clicked" + text)
       let newText = text.toUpperCase();
        setText(newText)
    }
    const setClickLowerHandler = () =>{
        // console.log("button was clicked" + text)
       let newText = text.toLowerCase();
        setText(newText)
    }
    const setClickClearHandler = () =>{
        // console.log("button was clicked" + text)
       let newText = " ";
        setText(newText)
    }
    const setClickCopyHandler = () =>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const setClickExtraHandler = () =>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
    }
    const setChangeHandler = (event) =>{
       
        setText(event.target.value);

        //   setText("button pressed")a
    }
    
    return(
        <>
        <div>
  <h1>{props.headings}</h1>
<div className="mb-3" >
  <label for="myBox" />
  <textarea className="form-control" value={text} onChange={setChangeHandler} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={setClickUpperHandler}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={setClickLowerHandler}>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={setClickClearHandler}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={setClickCopyHandler}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={setClickExtraHandler}>Remove Extra Spaces</button>



</div>

<div className='container my-3'>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} Words and {text.length} charecters</p>
    <p>{0.019 * text.split(" ").length}Minutes To Read</p>
    <h2>PREVIEW</h2>
    <p>{text}</p>
</div>
</>
    )
};
