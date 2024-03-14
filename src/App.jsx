import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainContainer from "./components/Main/MainContainer"

import {NextUIProvider} from "@nextui-org/react";


function App() {
  
  // subirFoto()
  // agergarDocumento("toDoList")


  return (
    <NextUIProvider>
      <Header />
      <MainContainer />
      <Footer />
    </NextUIProvider>
  )
}

export default App
