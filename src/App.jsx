import ChangeColor from "./components/ChangeColor"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  return (
    <div className="flex flex-col bg-slate-600 h-screen text-slate-200 justify-center items-center">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  )
}

export default App
