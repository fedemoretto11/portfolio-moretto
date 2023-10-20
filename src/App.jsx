import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainContainer from "./components/Main/MainContainer"
import { agergarDocumento, subirFoto } from "./components/db/data"



function App() {
  
  // subirFoto()
  // agergarDocumento("toDoList")


  return (
    <>
      <Header />
      <MainContainer />
      <Footer />
    </>
  )
}

export default App
