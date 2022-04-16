import React,{useState} from 'react'

export default function TextForm (props) {
    const [text,settext] = useState("")

    const upperHandler = () => {
        let newtext = text.toUpperCase();
        settext(newtext)
        console.log("You Clicked to upperCase Button")
    }
    const lowerHandler = () => {
        let newtext1 = text.toLowerCase();
        settext(newtext1);
        console.log("You Clicked to LowerCase Button")

    }
    const changeHandler = (event) => {
        settext(event.target.value)  
      }
    const clearHandler = () => {
        settext("")
        console.log("You Clicked to Clear Button")
    }
    return(
        <React.Fragment>
            
           <div className="mb-3 my-3">
               <h1 className='my-1'>{props.heading}</h1>
               <textarea className="form-control" value={text} onChange={changeHandler} id="mybox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={upperHandler}>Upper Case</button>
            <button className='btn btn-primary mx-1' onClick={lowerHandler}>Lower Case</button>
            <button className='btn btn-success mx-1' onClick={clearHandler}>Clear text</button>
            <div className="conatiner my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
            </div>
        </React.Fragment>
    )
}