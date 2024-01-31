import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
const initialValues={
    name:'',
    email:'',
    password:''
}
const onSubmit=(values)=>{
    console.log(values)
}
const validationSchema={
    name:Yup.string().required("Required"),
    email:Yup.email("Invalid email").required("Required"),
    password:Yup.string().min(7,"PAssword should have min 7 characters").required("Required")
}

const UseFormikReduceBoilerPlate = () => {
    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
  return (
    <div className='mt-2 ml-8'>
        <p className='text-center'>Removing BoilerPlate useFormik() Hook</p>
        <form onSubmit={formik.handleSubmit}>
            <div className='flex flex-col gap-2 mt-4'>
            <label htmlFor='name'>Name</label>
            <input className='w-[10%] p-1 rounded-sm  border border-gray-400' type='text' id="name" name="name" placeholder='Enter Name' {...formik.getFieldProps('name')}/>
            {formik.touched.name && formik.errors.name ? <p className='text-red-500'>{formik.errors.name}</p> :null}
            </div>
            <div className='flex flex-col gap-2 mt-4'>
            <label htmlFor='email'>Email</label>
            <input className='w-[10%] p-1 rounded-sm border border-gray-400' type='email' id="email" name="email" placeholder='Email' {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email ? <p className='text-red-500'>{formik.errors.email}</p> :null}
            </div>
            <div className='flex flex-col gap-2 mt-4 '>
            <label htmlFor='password'>Password</label>
            <input className='w-[10%] p-1 rounded-sm border border-gray-400' type='password' id="password" name="password" placeholder='Enter password' {...formik.getFieldProps('password')}/>
            {formik.touched.password && formik.errors.password ? <p className='text-red-500'>{formik.errors.password}</p> :null}
            </div>
            <button type='submit' className='mt-7 w-[10%] bg-blue-500 py-1 px-3 text-white font-semibold rounded-sm'>Submit</button>
          
        </form>
        
 </div>
  )
}

export default UseFormikReduceBoilerPlate