import React from 'react'
import { Controller } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'

const CustomSelect = ({ name, control, label, options, rules, defaultValue = '' }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          label={label}
          error={!!error}
          helperText={error ? error.message : null}
          variant="outlined"
          fullWidth
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  )
}

export default CustomSelect