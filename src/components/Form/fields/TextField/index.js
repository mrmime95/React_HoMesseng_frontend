import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaterialTextField from '@material-ui/core/TextField'
import { Field } from 'formik'

const StyledTextField = styled(MaterialTextField)``

function SelectField({ required, type = 'text', name, autoFocus, placeholder, onChange, id, label, ...props }) {
  return (
    <Field name={name} required={required} {...props}>
      {({ field, form }) => (
        <StyledTextField
          type={type}
          variant="outlined"
          margin="normal"
          fullWidth
          id={id || name}
          label={label}
          name={name}
          autoFocus={autoFocus}
          placeholder={placeholder}
          required={required}
          value={form.values[name] || ''}
          onChange={e => {
            form.setFieldValue(field.name, e.target.value)
            if (onChange) onChange(e.target.value)
          }}
        />
      )}
    </Field>
  )
}

SelectField.propTypes = {
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default SelectField
