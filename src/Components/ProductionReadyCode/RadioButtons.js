import { ErrorMessage, Field } from 'formik'
import React from 'react'

const RadioButtons = (props) => {
    const {label,name,options,...rest}=props
  return (
    <div className='flex flex-col gap-2 mt-4'>
        <label htmlFor={name}>{label}</label>
        <Field   name={name} {...rest}>
            {({field})=>(
            options.map((option)=>(
                <>
                <input type='radio' id={option.value} {...field} value={option.value} checked={option.value===field.value} />
                <label htmlFor={option.value}>{option.key}</label>
                </>
            ))
            )}
            </Field>
        <ErrorMessage className='text-red-500' name={name} component="div"/>
    </div>
  )
}

export default RadioButtons