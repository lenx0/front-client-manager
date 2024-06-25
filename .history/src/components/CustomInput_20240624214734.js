// components/CustomInput.js
import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

const CustomInput = ({ name, control, label, type = 'text', rules, defaultValue = '' }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          error={!!error}
          helperText={error ? error.message : null}
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
};

export default CustomInput;
