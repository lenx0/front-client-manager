import React from 'react'
import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'

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
          InputLabelProps={type === 'date' ? { shrink: true } : {}}
          fullWidth
          sx={{
            '& .MuiInputBase-input': {
              padding: 2,
            },
          }}
        />
      )}
    />
  )
}

export default CustomInput
