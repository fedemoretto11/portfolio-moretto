import Main from "./Main"
import Sidebar from "./Sidebar"

function MainContainer() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Main />
      <Sidebar />
    </div>
  )
}
export default MainContainer