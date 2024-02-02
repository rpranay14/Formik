import { ErrorMessage, Field } from 'formik'
import React from 'react'

const Select = (props) => {
    const {label,name,options,...rest}=props
  return (
    <div className='flex flex-col gap-2 mt-4'>
        <label htmlFor={name}>{label}</label>
        <Field as="select"  className='w-[10%] p-1 rounded-sm  border border-gray-400' id={name} name={name} {...rest}>
        {options.map((option)=>(
            <option key={option.value} value={option.value}>{option.key}</option>
        ))}
            </Field>
        <ErrorMessage className='text-red-500' name={name}  component="div"/>
    </div>
  )
}

export default Select