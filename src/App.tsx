import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import UserDetailsForm from "./pages/UserDetailsForm"
import EditForm from "./pages/EditFrom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<UserDetailsForm />} />
          <Route path="/edituser/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App