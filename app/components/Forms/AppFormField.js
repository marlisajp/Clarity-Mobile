import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from './AppTextInput';

function AppFormField({
  maxLength,
  name,
  width,
  style,
  numberOfLines,
  secureTextEntry,
  ...otherProps
}) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <AppTextInput
      style={style}
      onBlur={() => setFieldTouched(name)}
      onChangeText={(text) => setFieldValue(name, text)}
      value={values[name]}
      width={width}
      maxLength={maxLength}
      multiline={!secureTextEntry} // set multiline dynamically
      secureTextEntry={secureTextEntry}
      numberOfLines={numberOfLines}
      {...otherProps}
    />
  );
}

export default AppFormField;
