import React, { useRef } from 'react'
import EmojiPicker from './emojiPicker'

const EmojiPickerInput = () => {

    const refInput = useRef(null);

    function handleClick(){
        refInput.current.focus()
    }
  return (
    <div>
        <input ref={refInput}/>
        <button onClick={handleClick}>Da Click</button>
        <EmojiPicker/>
    </div>
  )
}

export default EmojiPickerInput