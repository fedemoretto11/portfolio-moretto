import Main from "./Main"

function MainContainer() {
  return (
    <div className="relative overflow-hidden">
      <div className="brand-glow left-[-12rem] top-24 h-96 w-96 bg-[rgba(58,115,224,0.08)]" aria-hidden="true" />
      <div className="brand-glow bottom-[-6rem] right-[-10rem] h-80 w-80 bg-[rgba(121,183,255,0.06)]" aria-hidden="true" />
      <Main />
    </div>
  )
}

export default MainContainer
