import React from "react"
import {Form, Formik} from "formik"
import {iFormValues} from "./formValues.type"
import MyField from "./MyField";

const initialValues: iFormValues = {
  fieldA: 0,
  fieldB: 0,
  fieldC: 0
}
const SampleForm: React.FC<{}> = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => { console.log(JSON.stringify(values)) }}>

      <Form>
        <MyField name={'fieldA'} label={'FieldA'} /><br/>
        <MyField name={'fieldB'} label={'B=A+C+1'} /><br/>
        <MyField name={'fieldC'} label={'C=A*B+2'} /><br/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default SampleForm