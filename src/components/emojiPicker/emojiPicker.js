import {forwardRef, useState} from 'react';

import {data as emojiList} from './data'

export function EmojiPicker(props,inputRef){

    const[isOpen,setIsOpen] = useState(false);
    const[emojis,setEmojis] = useState(emojiList);

    function handleClickOpen(){
        setIsOpen(!isOpen)
    }

    function EmojiPickerContainer(){
        return <div>
            <input />
            <div>
                {
                    emojiList.map(emoji =><div>{emoji.symbol}</div>)
                }
            </div>
        </div>
    }

    return <div>
            <button onClick={handleClickOpen}>😉</button>

            {isOpen ? <EmojiPickerContainer/> : ""}
            </div>
}

export default forwardRef(EmojiPicker);