import React from 'react'
import {Formik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
const initialValues={
    name:'',
    email:'',
    password:''
}
const onSubmit=(values)=>{
    console.log(values)
}
const validationSchema=Yup.object({
    name:Yup.string().required("Required!!"),
    email:Yup.string().email("Invalid email Format").required("Required"),
    password:Yup.string().min(7,"Password Length should be greater than 7").required("Required")
})

const FormUsingFormComponent = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} className='mt-2 ml-8'>
      
 <Form>
 <div className='flex flex-col gap-2 mt-4'>
 <label htmlFor='name'>Name</label>
 <Field className='w-[10%] p-1 rounded-sm  border border-gray-400' type='text' id="name" name="name" placeholder='Enter Name'/>
<ErrorMessage className='text-red-500'  component="div" name="name"/>
 </div>
 <div className='flex flex-col gap-2 mt-4'>
 <label htmlFor='email'>Email</label>
 <Field className='w-[10%] p-1 rounded-sm border border-gray-400' type='email' id="email" name="email" placeholder='Email'/>
 <ErrorMessage className='text-red-500' component="div" name="email"/>
 </div>
 <div className='flex flex-col gap-2 mt-4 '>
 <label htmlFor='password'>Password</label>
 <Field className='w-[10%] p-1 rounded-sm border border-gray-400' type='password' id="password" name="password" placeholder='Enter password'/>
 <ErrorMessage className='text-red-500' component="div" name="password"/>
 </div>
 <button type='submit' className='mt-7 w-[10%] bg-blue-500 py-1 px-3 text-white font-semibold rounded-sm'>Submit</button>

</Form>
     
        
 </Formik>
  )
}

export default FormUsingFormComponent