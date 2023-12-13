import React, {useEffect} from "react";
import {FieldHookConfig, FormikProps, useField, useFormikContext} from "formik";
import {iFormValues} from "./formValues.type";

interface iFieldProps {
  id?: string,
  name: string,
  label: string
}
const MyField: React.FC<iFieldProps & FieldHookConfig<string>> = ({label, ...props}) => {
  const [field, meta] = useField(props)
  const { values: { fieldA, fieldB, fieldC}, touched, setFieldValue } = useFormikContext<iFormValues>()

  useEffect(() => {
    console.log({ fieldA, fieldB, fieldC })
    if (touched.fieldA && touched.fieldB && touched.fieldC) {
      setFieldValue('fieldB', fieldA + fieldC + 1)
      setFieldValue('fieldC', fieldA * fieldB + 2)
    }
  }, [fieldA, fieldB, fieldC])

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="number" {...field} />
      {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
    </>
  )
}

export default MyField