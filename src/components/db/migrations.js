import { addDoc, collection } from "firebase/firestore"
import { db } from "./data"

project = {
  description: "Proyecto final del curso de JavaScript, que consiste en un carrito de compras completamente funcional. El proyecto ha sido desarrollado desde cero y cuenta con la integración de la API de Mercado Libre.",
  githubLink: "https://github.com/fedemoretto11/SuperMusicChanguito",
  webLink: "https://fedemoretto11.github.io/SuperMusicChanguito/",
  title: "Super Music Changuito",
  type: "varios",
}

function addToDB(){
  const docAdded = addDoc(collection(db, "projects"), project)
  console.log(docAdded)
}

// addToDB()

