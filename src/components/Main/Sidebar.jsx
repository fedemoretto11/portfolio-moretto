function Sidebar() {
  return (
    <aside className="sidebar sm:fixed flex sm:flex-col gap-10 sm:gap-2 p-4 justify-center sm:justify-end items-center w-full sm:w-[82px]">
      <a href="https://www.linkedin.com/in/morettofede/" target="_blank"><i className="sidebar__icon bi bi-linkedin"></i></a>
      <a href="https://github.com/fedemoretto11" target="_blank"><i className="sidebar__icon bi bi-github"></i></a>
      <a href="https://twitter.com/fedemoretto11" target="_blank"><i className="sidebar__icon bi bi-twitter"></i></a>
      <a href="https://www.instagram.com/fedemoretto11/" target="_blank"><i className="sidebar__icon bi bi-instagram"></i></a>
    </aside>
  )
}
export default Sidebar