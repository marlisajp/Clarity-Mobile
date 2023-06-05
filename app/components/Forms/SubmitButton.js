import React from 'react';
import { useFormikContext } from 'formik';

import AppLargeButton from '../Buttons/AppLargeButton';

function SubmitButton({ title, color }) {
  const { handleSubmit } = useFormikContext();
  return <AppLargeButton title={title} onPress={handleSubmit} color={color} />;
}

export default SubmitButton;
