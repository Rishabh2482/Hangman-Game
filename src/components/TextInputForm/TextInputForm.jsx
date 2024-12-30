import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideClick}){

    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    placeholder={"Enter a word here"}
                    label={"Enter word or phrase here"}
                    onChangeHandler={handleTextInputChange}
                    type={inputType}
                />
            </div>

            <div>
                <Button 
                    styleType="warning" 
                    text={inputType==='Password'?'Show':'Hide'}
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div>
                <Button
                    type={"submit"}
                    styleType={"primary"}
                    text={"Submit"}                      
                 />
            </div>
        </form>
    )
}
export default TextInputForm;