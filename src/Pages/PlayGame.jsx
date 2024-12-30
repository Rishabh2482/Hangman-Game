import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame(){
// 1st way
    const location=useLocation();
    console.log(location.state.wordPassed);

// 2nd way (by queryParams)
    // const [searchParams]= useSearchParams();
    // console.log(searchParams['text']);   This is Wrong
    // console.log(searchParams.get('text')); // This is Correct why ?

//  3rd way (by PathParms)
    // const{text1}= useParams();
    // console.log({text1},{text3});
    
    return(
        <div>
            <h1>Play Game </h1>
            <MaskedText text={location.state.wordPassed} gueesLetter={['h','l','U']}/>
            <Link to="/start" className="text-blue-600">Start Game</Link>
        </div>
    )
}

export default PlayGame;