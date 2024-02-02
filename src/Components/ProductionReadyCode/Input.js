import { ErrorMessage, Field } from 'formik'
import React from 'react'

const Input = (props) => {
    const {name,label,...rest}=props;

  return (
    <div className='flex flex-col gap-2 mt-4'>
        <label htmlFor={name}>{label}</label>
        <Field className='w-[10%] p-1 rounded-sm  border border-gray-400' id={name} name={name} {...rest}></Field>
        <ErrorMessage className='text-red-500' name={name} component='div'/>
    </div>
  )
}

export default Input