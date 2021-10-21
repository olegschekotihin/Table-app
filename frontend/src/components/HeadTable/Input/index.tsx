import React from "react";

export interface InputProps {
  onchange: () => void
  dataAttr: string
}

function Input({onchange, dataAttr}: InputProps) {
  return(
    <div>
      <input
        type='text'
        onChange={onchange}
        data-name={dataAttr}/>
    </div>
  )
}

export default Input