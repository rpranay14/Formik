import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import UseFormikHookComponent from './UseFormikHookComponent'
import FormUsingFormComponent from './FormUsingFormComponent'
import FormikContainer from './ProductionReadyCode/FormikContainer'

const MainComponent = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate replace to={'/useformikhook'}/>}></Route>
        <Route path="/useformikhook" element={<UseFormikHookComponent/>}/>
        <Route path="/formikhookboilerplate" element={<UseFormikHookComponent/>}/>
        <Route path="/useformikcomponent" element={<FormUsingFormComponent/>}/>
        <Route path="/production" element={<FormikContainer/>}/>
    </Routes>
  )
}

export default MainComponent