import { useState } from "react";
import TextInputForm from "./TextInputForm";
import {  useNavigate } from "react-router-dom";

// ! This file is made to use Presenter Container designing pattern principal.
// !The TextInputFormContainer contains the logic and calling part of ui(Presenter Container).
function TextInputFormContainer(){
    // let inputType='Password';    This will not work
    const [inputType, setInputType] = useState('Password'); // This will work
    const [inputValue, setInputValue]= useState('');

    const navigate=useNavigate();

    function handleFormSubmit(e){
        e.preventDefault();
        console.log("Form submitted ",inputValue);
        if(inputType){
            // If the input value is some word than navigate to PlayGame page else do nothing
            // ! Remember what is diffrence between Link and useNavigate hooks in React
            // <Link to='/play' >Play Game</Link>

            navigate('/play',{state:{wordPassed:inputValue}});        // This is UseLocation hook method
            // navigate(`/play?text=${inputValue}`)        // This is QueryParams method of passing value
            // navigate(`/play/${inputValue}`)                  // THis is PathParams method of passing values but it is not working now.
        }
        else
        {
            alert("Please input some Word");
        }
    }

    function handleTextInputChange (e){
        console.log("Input Text changed");

        console.log(e.target.value);

        setInputValue(e.target.value);
    }

    function handleShowHideClick(){
        console.log("Clicked on show/hide Button");
        if(inputType==='Password'){
            // inputType='Text';
            setInputType('text');
        }
        else{
            // inputType='Password';
            setInputType('Password')
        }
    }
    // The Below return calls the UI Feature
    return(
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
            inputType={inputType}
        />
    )
}

export default TextInputFormContainer;