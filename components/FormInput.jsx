import { useState } from "react";
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="formInput ">
      <label className="inputLabel">{label}</label>
      <input
        className="input"
        {...inputProps}
        onChange={onChange}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="error-message">{errorMessage} </span>
    </div>
  );
};

export default FormInput;
