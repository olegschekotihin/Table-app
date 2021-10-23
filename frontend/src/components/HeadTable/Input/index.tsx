import React from "react";
import styled from 'styled-components';

export interface InputProps {
  onchange: () => void
  dataAttr: string
}

const InputFilter = styled.input`
  border: 1px solid #646464;
  border-radius: 10px;
  padding: 8px;
  margin: 5px 0;
`;

function Input({onchange, dataAttr}: InputProps) {
  return(
    <div>
      <InputFilter
        type='text'
        onChange={onchange}
        data-name={dataAttr}/>
    </div>
  )
}

export default Input