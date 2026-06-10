import './App.css'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import {  Layout, Signup , Signin, Home ,Addtocart,Cart , Createtodo , Showtodo } from './components/functions'
function App() {
  return (<div>

    <BrowserRouter>

        <Routes>

            <Route path="/" element={<Layout/>}> 
                  <Route path='/' element={<Home/>} />
                  <Route path='/auth/sign-up' element={<Signup/>}/>
                  <Route path='/auth/sign-in' element={<Signin/>}/>
                  <Route path='/shop/Addtocart' element={<Addtocart/>}/>
                  <Route path='/shop/Cart' element={<Cart/>}/>
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