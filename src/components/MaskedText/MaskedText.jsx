import maskingUtility from "./MaskingUtility";

function MaskedText({text,gueesLetter})
{
    let getMaskedString = maskingUtility(text,gueesLetter);
    return(
      <>
        {
            getMaskedString.map((letter,index)=>{
           return <span key={index}>{letter}</span>
           })
        }
      </>
    )
}

export default MaskedText;