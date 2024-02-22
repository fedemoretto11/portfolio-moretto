function Footer() {


  return (
    <div className="footer w-full flex flex-col justify-center items-center p-4">
      <p className="text-xs md:text-base text-center">Desarrollado por Federico Moretto</p>
      <p className="text-xs md:text-base text-center">Copyright &#169; - {new Date().getFullYear()} - Todos los derechos reservados</p>
    </div>
  )
}
export default Footer