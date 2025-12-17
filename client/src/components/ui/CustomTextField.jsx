import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const CustomTextField = React.forwardRef(
  (
    {
      value,
      onChange,
      onFocus,
      onBlur,
      onClick,

      placeholder,
      label,
      name,
      id,
      type = "text",

      size = "small",
      fullWidth = true,

      startAdornment,
      endAdornment,

      error = false,
      helperText,
      disabled = false,
      required = false,

      multiline = false,
      rows,

      sx = {},
      ...rest
    },
    ref
  ) => {
    return (
      <TextField
        ref={ref}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
        placeholder={placeholder}
        label={label}
        name={name}
        id={id}
        type={type}
        size={size}
        fullWidth={fullWidth}
        error={error}
        helperText={helperText}
        disabled={disabled}
        required={required}
        multiline={multiline}
        rows={rows}
        slotProps={{
          input: {
            startAdornment: startAdornment && (
              <InputAdornment position="start">
                {startAdornment}
              </InputAdornment>
            ),
            endAdornment: endAdornment && (
              <InputAdornment position="end">
                {endAdornment}
              </InputAdornment>
            ),
          },
        }}
        sx={{
          // Hover
          "& .MuiOutlinedInput-root:hover fieldset": {
            borderColor: "#C71E1E",
          },

          // Focus
          "& .MuiOutlinedInput-root.Mui-focused fieldset": {
            borderColor: "#C71E1E",
          },

          // Label focus
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#C71E1E",
          },

          // Error state
          "& .MuiOutlinedInput-root.Mui-error fieldset": {
            borderColor: "#d32f2f",
          },

          ...sx, // allow override
        }}
        {...rest}
      />
    );
  }
);

export default CustomTextField;
