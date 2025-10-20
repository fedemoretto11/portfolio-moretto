import Main from "./Main"
import Sidebar from "./Sidebar"

function MainContainer() {
  return (
    <div className="relative flex w-full flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 sm:flex-row">
      <div className="flex-1">
        <Main />
      </div>
      <Sidebar />
    </div>
  )
}

export default MainContainer
