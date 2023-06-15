import React from 'react'
import { Routes,Route } from 'react-router-dom' 
import Home from './Assignment/Home'
import Index2 from './Assignment1/Index'
import Index from './Assignment2/Index'
import CustomForm from './Assignment3/CustomForm'
import NavigaitionBar from './Assignment/NavigaitionBar'
import { Provider} from 'react-redux'
// import formstore from './Assignment3/formstore';
import Store from './ReduxAssignment/Store'
import NewApplicantTable from './Assignment3/NewApplicantTable'

const App = () => {
  return (
    <Provider store={Store} >
    <div>
      <NavigaitionBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Assignment1' element={<Index2/>}/>
        <Route path='/Assignment2' element={<Index/>}/>
        <Route path='/Assignment3' element={<CustomForm/>}/>
        <Route path='/newTable' element={<NewApplicantTable></NewApplicantTable>}></Route>
      </Routes>
      
    </div>
    </Provider>
  )
}

export default App
