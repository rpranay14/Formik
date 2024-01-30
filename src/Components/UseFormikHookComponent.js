import { useFormik } from 'formik'
import React from 'react';

const initialValues={
    
        name:"",
        email:"",
        password:""
    
}
const onSubmit=(values)=>{
    console.log(values)
}
const validate=(values)=>{
    let errors={}
    if(!values.name){
        errors.name="Required"
    }
    
    else if(!values.email){
        errors.email="Required"
    }
    else if(!values.password){
        errors.password="Required"
    }
  
    else if(values.password.length<7){
        console.log("hii")
        errors.password="Password length should be greater than 7"
    }
    return errors

}

const UseFormikHookComponent = () => {
    const formik=useFormik({
        initialValues,
        onSubmit,
        validate
    })
  
  return (
    <div className='mt-2 ml-8'>
        <p className='text-center'>Form Create using useFormik() Hook</p>
        <form onSubmit={formik.handleSubmit}>
            <div className='flex flex-col gap-2 mt-4'>
            <label htmlFor='name'>Name</label>
            <input className='w-[10%] p-1 rounded-sm  border border-gray-400' type='text' id="name" name="name" placeholder='Enter Name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}/>
            {formik.touched.name && formik.errors.name ? <p className='text-red-500'>{formik.errors.name}</p> :null}
            </div>
            <div className='flex flex-col gap-2 mt-4'>
            <label htmlFor='email'>Email</label>
            <input className='w-[10%] p-1 rounded-sm border border-gray-400' type='email' id="email" name="email" placeholder='Email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email ? <p className='text-red-500'>{formik.errors.email}</p> :null}
            </div>
            <div className='flex flex-col gap-2 mt-4 '>
            <label htmlFor='password'>Password</label>
            <input className='w-[10%] p-1 rounded-sm border border-gray-400' type='password' id="password" name="password" placeholder='Enter password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
            {formik.touched.password && formik.errors.password ? <p className='text-red-500'>{formik.errors.password}</p> :null}
            </div>
            <button type='submit' className='mt-7 w-[10%] bg-blue-500 py-1 px-3 text-white font-semibold rounded-sm'>Submit</button>
          
        </form>
        
 </div>
  )
}

export default UseFormikHookComponent