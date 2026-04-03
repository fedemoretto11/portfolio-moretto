import PropTypes from "prop-types"

function Icon({ name, className = "h-5 w-5", title }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    "aria-hidden": title ? undefined : "true",
    role: title ? "img" : undefined,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  }

  const icons = {
    send: (
      <path d="M3 11.5 20.5 4l-5.7 16-3.5-5.3L3 11.5Z M11.3 14.7l9.2-10.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    ),
    menu: (
      <>
        <path d="M4 7h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M4 12h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    mail: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="m5.5 8.5 6.5 5 6.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    file: (
      <>
        <path d="M8 3.5h6l4 4V20a.5.5 0 0 1-.5.5h-9A2.5 2.5 0 0 1 6 18V5.5A2 2 0 0 1 8 3.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M14 3.5V8h4" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="m12 11.5-.01 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="m9.5 15 2.5 2.5L14.5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    pin: (
      <>
        <path d="M12 20s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5V12l3.2 2.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    laptop: (
      <>
        <rect x="5" y="6" width="14" height="9" rx="1.8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 18h17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    github: (
      <path d="M12 3.7a8.6 8.6 0 0 0-2.7 16.8c.4.1.6-.2.6-.5v-1.9c-2.5.5-3-1.1-3-1.1-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.3-2-.2-4.1-1-4.1-4.4 0-1 .4-1.9 1-2.5-.1-.2-.4-1.1.1-2.4 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.2.1 2.4.7.6 1 1.5 1 2.5 0 3.4-2.1 4.2-4.1 4.4.3.3.6.8.6 1.7v2.5c0 .3.2.6.6.5A8.6 8.6 0 0 0 12 3.7Z" fill="currentColor" />
    ),
    grid: (
      <>
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    building: (
      <>
        <path d="M4.5 20.5h15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M6.5 20V6.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1V20" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 9.5h1.5M13.5 9.5H15M9 13h1.5M13.5 13H15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    stars: (
      <>
        <path d="m12 4 1.3 3.4L16.7 9l-3.4 1.3L12 13.7l-1.3-3.4L7.3 9l3.4-1.6L12 4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="m18.5 14 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8ZM5.5 13l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5.5" width="16" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 3.8v3.4M16 3.8v3.4M4 9.5h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    external: (
      <>
        <path d="M14 5.5h4.5V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M10 14 18.5 5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M18.5 13v4a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 17V7A1.5 1.5 0 0 1 7 5.5h4" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3.5" y="7" width="17" height="11.5" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 7V5.7A1.7 1.7 0 0 1 10.7 4h2.6A1.7 1.7 0 0 1 15 5.7V7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 11.5h17" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    linkedin: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.2 10.2v5.6M8.2 7.9h.01M12 10.2v5.6M12 12.7c0-1.5 1-2.5 2.4-2.5 1.6 0 2.3 1 2.3 3v2.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    layers: (
      <>
        <path d="m12 4 8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="m4 12 8 4 8-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="m4 16 8 4 8-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="6.5" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.5 6.5v7c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.5 10c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    people: (
      <>
        <path d="M9.5 11.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4ZM15.8 10.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.5 18c.5-2.2 2.3-3.6 4-3.6s3.5 1.4 4 3.6M14 17.8c.3-1.6 1.6-2.8 3-2.8 1.1 0 2.1.6 2.8 1.7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
  }

  return (
    <svg {...commonProps}>
      {title ? <title>{title}</title> : null}
      {icons[name] ?? icons.stars}
    </svg>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
}

Icon.defaultProps = {
  className: "h-5 w-5",
  title: undefined,
}

export default Icon
