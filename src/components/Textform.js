import React , {useState} from 'react'

export default function Textform(props) {
    const handleupclick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        // setText("you have clicked on handleupclick")
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleonchange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
        
    }
    const [text,setText]=useState('');
    // wrong way =  text="write here"
    // correct way is-
    // setText("write here");
  return (
   <>
        <div class="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
         <div class="mb-3">
         <textarea class="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
         </div>
         <button class="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to upper case</button>
         </div>
           <div class="container" style={{color: props.mode==='dark'?'white':'black'}}>
           <h1>Your text summery</h1>
           <p>{text.split(" ").length} words,{text.length} characters</p>
           <p>{0.008*text.split(" ").length} Minutes read</p>
           <h2>preview</h2>
           <p>{text.length>0?text:"Enter your text to preview it here"}</p>
           </div>
   </>
  )
}
