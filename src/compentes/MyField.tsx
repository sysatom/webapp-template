import React from "react";
import {useField} from "@formiz/core";
import {Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {FaX} from "react-icons/fa6";
import './MyField.sass';

const MyField = (props: any) => {
  const {
    id,
    isValid,
    isPristine,
    isSubmitted,
    resetKey,
    setValue,
    value,
  } = useField(props)
  const { label, type, required } = props
  const [isFocused, setIsFocused] = React.useState(false);
  const showError = !isValid && !isFocused && (!isPristine || isSubmitted)

  return (
    <InputGroup className={`form-group ${showError ? 'is-error' : ''}`}>
      <label
        className="demo-label"
        htmlFor={id}
      >
        { label }
        {required && ' *'}
      </label>
      <Input
        key={resetKey}
        id={id}
        type={type || 'text'}
        value={value || ''}
        className="demo-input"
        onChange={e => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-invalid={!isValid}
        aria-describedby={!isValid ? `${id}-error` : undefined}
        isInvalid={showError}
      />
      {showError && (
        <InputRightElement>
          <FaX color='red.500' />
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export default MyField;
