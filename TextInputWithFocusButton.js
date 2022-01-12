import React, {useRef} from 'react';

function TextInputWithFocusButton(){
    const elm = useRef(null);
    const onButtonClick =() =>{
        elm.current.focus();
    }
    return (
        <>
            <input ref={elm} type="text"></input>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
export default TextInputWithFocusButton;