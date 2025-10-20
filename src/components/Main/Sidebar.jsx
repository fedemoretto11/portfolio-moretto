const socialLinks = [
  {
    href: "https://www.linkedin.com/in/morettofede/",
    icon: "bi-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/fedemoretto11",
    icon: "bi-github",
    label: "GitHub",
  },
  {
    href: "https://twitter.com/fedemoretto11",
    icon: "bi-twitter-x",
    label: "X (Twitter)",
  },
  {
    href: "https://www.instagram.com/fedemoretto11/",
    icon: "bi-instagram",
    label: "Instagram",
  },
]

function Sidebar() {
  return (
    <aside className="order-last mt-8 flex w-full justify-center px-6 pb-10 sm:order-none sm:mt-0 sm:sticky sm:top-32 sm:h-[calc(100vh-8rem)] sm:w-24 sm:items-start sm:px-0">
      <div className="flex w-full max-w-sm items-center justify-between gap-4 rounded-full border border-slate-800 bg-slate-900/70 px-6 py-3 shadow-lg shadow-slate-950/40 backdrop-blur sm:flex-col sm:rounded-3xl sm:px-4 sm:py-6">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-2xl text-slate-300 transition hover:text-emerald-300"
          >
            <i className={`bi ${link.icon}`} aria-hidden="true" />
          </a>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
