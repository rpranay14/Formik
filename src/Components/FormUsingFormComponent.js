import React from 'react'
import {Formik,Form,Field, ErrorMessage,FieldArray} from 'formik';
import * as Yup from 'yup';
const initialValues={
    name:'',
    email:'',
    password:'',
    comment:'',
    address:"",
    social:{
      facebook:'',
      twitter:''
    },
    phoneNumbers:['']
}
const onSubmit=(values)=>{
    console.log(values,"valuews")
}
const validationSchema=Yup.object({
    name:Yup.string().required("Required!!"),
    email:Yup.string().email("Invalid email Format").required("Required"),
    password:Yup.string().min(7,"Password Length should be greater than 7").required("Required"),
    address:Yup.string().min(10,"Address must be minimum 10 chars")
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
 <div className='flex flex-col gap-2 mt-4 '>
 <label htmlFor='comment'>Comment</label>
 <Field as="textarea" className='w-[10%] p-1 rounded-sm border border-gray-400' type='comment' id="comment" name="comment" placeholder='Enter comment'/>
 <ErrorMessage className='text-red-500' component="div" name="comment"/>
 </div>
 <div className='flex flex-col gap-2 mt-4 '>
 <label htmlFor='comment'>Address</label>
 <Field name="address">
  {(props)=>{
    console.log(props);
    const {form,meta,field}=props;
   return(
    <>
<input type="text" className='w-[10%] p-1 rounded-sm border border-gray-400' {...field} />
{meta.touched && meta.error ? <p>{meta.error}</p>:null}
</>
   ) 
  }}
 </Field>
 </div>
 <div className='flex flex-col gap-2 mt-4 '>
 <label htmlFor='comment'>Facebook</label>
 <Field className='w-[10%] p-1 rounded-sm border border-gray-400' type='facebook' id="facebook" name="social.facebook" placeholder='Facebook'/>
 <ErrorMessage className='text-red-500' component="div" name="social.facebook"/>
 </div>
 <div className='flex flex-col gap-2 mt-4 '>
 <label htmlFor='comment'>Twitter</label>
 <Field className='w-[10%] p-1 rounded-sm border border-gray-400' type='facebook' id="facebook" name="social.twitter" placeholder='Facebook'/>
 <ErrorMessage className='text-red-500' component="div" name="social.twitter"/>
 </div>
 <div className='flex flex-col gap-2 mt-4 '>
 <label htmlFor='comment'>Phone Numbers</label>
 <FieldArray className='w-[10%] p-1 rounded-sm border border-gray-400' name='phoneNumbers'>
  {(props)=>{
    const {push,remove,form}=props;
    const {values}=form;
    const {phoneNumbers}=values;
    return(
      <div>
        {phoneNumbers.map((phoneNumber,index)=>(
          <div key={index}>
            <Field name={`phoneNumbers[${index}]`}/>
            <button type='button' onClick={()=>remove(index)}>-</button>
            <button type='button' onClick={()=>push('')}>+</button>
          </div>

        ))}</div>
    )

  }}
 </FieldArray>
 <ErrorMessage className='text-red-500' component="div" name="social.twitter"/>
 </div>
 <button type='submit' className='mt-7 w-[10%] bg-blue-500 py-1 px-3 text-white font-semibold rounded-sm'>Submit</button>

</Form>
     
        
 </Formik>
  )
}

export default FormUsingFormComponent