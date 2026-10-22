export const contact = {
  email: "fedemoretto94@gmail.com",
  linkedin: "https://www.linkedin.com/in/morettofede/",
  github: "https://github.com/fedemoretto11",
  // Enable only after an updated CV and anonymous access have been reviewed.
  resumeUrl: null,
}

export const contactLinks = [
  { id: "email", href: `mailto:${contact.email}`, external: false },
  { id: "linkedin", href: contact.linkedin, external: true },
  { id: "github", href: contact.github, external: true },
]
