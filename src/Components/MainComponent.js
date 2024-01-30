import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import UseFormikHookComponent from './UseFormikHookComponent'

const MainComponent = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate replace to={'/useformikhook'}/>}></Route>
        <Route path="/useformikhook" element={<UseFormikHookComponent/>}/>
    </Routes>
  )
}

export default MainComponent