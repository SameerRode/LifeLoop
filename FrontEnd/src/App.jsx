import './App.css'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import {  Layout, Signup , Signin, Home ,Addtocart , Createtodo , ShowCart ,Showtodo } from './components/functions'
function App() {
  return (<div>

    <BrowserRouter>

        <Routes>

            <Route path="/" element={<Layout/>}> 
                  <Route path='/' element={<Home/>} />
                  <Route path='/auth/sign-up' element={<Signup/>}/>
                  <Route path='/auth/sign-in' element={<Signin/>}/>
                  <Route path='/shop/Addtocart' element={<Addtocart/>}/>
                  <Route path='/shop/Cart' element={<ShowCart/>}/>
                  <Route path='/task/Createtodo' element={<Createtodo/>}/>
                  <Route path='/task/Showtodo' element={<Showtodo/>}/>
                <Route/>
            </Route>

        </Routes>
    
    </BrowserRouter>
    </div>
  )
}


export default App