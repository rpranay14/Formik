import React from 'react';
import {Formik,Form} from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';

const FormikContainer = () => {
    const dropdownOptions=[
        {key:'Select an Option',value:''},
        {key:'option1',value:'value1'},
        {key:'option2',value:'value2'},
        {key:'option3',value:'value3'},
        {key:'option4',value:'value4'},
    ]
    const radioOptions=[
       
        {key:'option1',value:'value1'},
        {key:'option2',value:'value2'},
        {key:'option3',value:'value3'},
        {key:'option4',value:'value4'},
    ]
    const initialValues={email:'',description:'',selectOption:'',radioOption:''};
    const validationSchema=Yup.object({
        email:Yup.string().required("Required!!"),
        description:Yup.string().required("Required!!"),
        selectOption:Yup.string().required("Required!!"),
        radioOption:Yup.string().required("Required!!")
    });
    const onSubmit=(values)=>{
        console.log(values)
    }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
       { (formik)=>(
      
        <Form  className='mt-2 ml-8'>
            <FormikControl label="Email" name="email" type="email" control="input"/>
            <FormikControl label="Description" name="description" type="text" control="textarea"/>
            <FormikControl label="Select Option" name="selectOption"  control="select" options={dropdownOptions}/> 
          <FormikControl label="Select a option" name="radioOption" control="radio" options={radioOptions}/>
            <button type='submit'>Submit</button>
        </Form>
       )

        }
    </Formik>
  )
}

export default FormikContainer