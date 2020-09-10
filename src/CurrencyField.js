import React, { useState } from "react";
import PropTypes from "prop-types";

import { useCurrency } from "./hooks";
import TextField from "@material-ui/core/TextField";

function CurrencyField({ onChange, defaultValue, value, separator, ...rest }) {
  const [state, setState] = useState({
    value: defaultValue,
  });

  const handleChange = (e) => {
    const valuesAsCurrency = useCurrency(e.target.value, separator);

    setState({ value: valuesAsCurrency });

    if (onChange) {
      e.persist();

      onChange(e, valuesAsCurrency);
    }
  };

  function getValue(e) {
    return value ?? state.value;
  }

  return (
    <TextField
      type="number"
      value={getValue()}
      onChange={(e) => handleChange(e)}
      {...rest}
    />
  );
}

CurrencyField.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  separator: PropTypes.oneOf([".", ","]).isRequired,
};

export default CurrencyField;
