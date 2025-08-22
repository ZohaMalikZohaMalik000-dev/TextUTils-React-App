//rfc
import React, { useState } from 'react'
// import { useFormState } from 'react
export default function About(props) { 
    // let MyStyle = {
    //     color : 'white',
    //     backgroundColor:' black'
    // }
        const [myStyle, setMyStyle]  = useState ({
                    color : 'black',
                backgroundColor:'white', 
                
        }) 

        // const [btnText, SetBtnText]  = useState ("Enable Dark Mode")
        // const toggleMode = () =>{
        //     if(MyStyle.color === 'black'){
        //         setMyStyle({ 
        //             color : 'white',
        //             backgroundColor: 'black',
        //             border :  '1px solid white'
        //         })
        //         SetBtnText("Enable Light Mode")
        //     }
        //     else{
        //         setMyStyle({  
        //             color : 'black',
        //         backgroundColor: 'white'
        //         })
        //         SetBtnText("Enable Dark Mode");
        //     }
        // }
        let MyStyle = {
            color : props.mode === 'dark'?'white':'#053b69ff',
            backgroundColor :props.mode === 'dark'?'#053b69ff':'white',
            border : '1px solid',
            borderColor : props.mode === 'dark'?'white':'#053b69ff'
        }
        return (
                <div className="container" style = {{color : props.mode === 'dark'?'white':'#053b69ff'}}>
                    <h1 className='mg-3'>About Us</h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item" style = {MyStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style = {MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {MyStyle}>
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or-
                </div>
                </div>
            </div>
            <div className="accordion-item" style = {MyStyle} >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style = {MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {MyStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item" style = {MyStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style = {MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {MyStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
            {/* <div className="container  my-3">
                <button onClick={toggleMode} type="button" className="btn btn-primary">{btnText}</button>
        </div>  */}
            </div>
            )
}
