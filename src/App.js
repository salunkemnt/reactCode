import React from 'react'
import { Routes,Route } from 'react-router-dom' 
// import HomePAge from './Assignment/HomePAge'
import Home from './Assignment/Home'
// import Index2 from './Assignment1/Index2'
import Index from './Assignment2/Index'
import Index1 from './Assignment3/Index1'
import NavigaitionBar from './Assignment/NavigaitionBar'
import { Provider} from 'react-redux'
// import store from './redux contsiner/Store'
import BookContainer from './redux contsiner/BookContainer'
import ApplicantTable from './Assignment3/ApplicantTable'
import formstore from './Assignment3/formstore';
const App = () => {
  return (
    <Provider store={formstore} >
    <div>
      <NavigaitionBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/Assignment1' element={<Index2/>}/> */}
        <Route path='/Assignment2' element={<Index/>}/>
        <Route path='/Assignment3' element={<Index1/>}/>
        <Route path='/ApplicantTable' element={<ApplicantTable/>}/>
        
      </Routes>
      {/* <BookContainer></BookContainer> */}
      {/* <ApplicantTable></ApplicantTable> */}
    </div>
    </Provider>
  )
}

export default App
