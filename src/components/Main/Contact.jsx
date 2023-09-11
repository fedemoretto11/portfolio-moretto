function Contact() {
  return (
    <section id="contact" className="contact flex flex-col justify-center items-center gap-10 sm:ml-[82px]">
      <h2 className="contact__title text-4xl md:w-96 text-center">Contactame</h2>
      <p className="contact__description w-3/6 text-center">
      Estoy abierto a nuevas oportunidades laborales. Puedes contactarme a través de mis redes sociales o enviándome un email.
<br /><br />  Te dejo un link de descarga de mi CV
      </p>
      <div className="flex gap-12">
        <a className="contact__btn py-2 md:px-6 md:py-4 text-center text-xl w-24 md:w-36" href="mailto:fedemoretto94@gmail.com">E-MAIL</a>
        <a className="contact__btn py-2 md:px-6 md:py-4 text-center text-xl w-24 md:w-36" href="https://drive.google.com/file/d/1rs2PRMyinNfGShFtPOX_aWm_Y8SeCkH-/view?usp=sharing" target="_blank" download>CV</a>
      </div>
    </section>
  )
}
export default Contact