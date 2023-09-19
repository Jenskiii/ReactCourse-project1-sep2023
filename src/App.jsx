
import { User } from "./User"
import "./user.css"
import user from "./user.json"

console.log(user)

function App() {
  return (
    <>
  <User name={user.name} phoneNumber={user.phoneNumber} age={user.age} address={user.address}>
  </User>
    </>
  )
}

export default App
