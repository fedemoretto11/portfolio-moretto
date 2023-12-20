import { addDoc, collection } from "firebase/firestore"
import { db } from "./data"

project = {
  description: "Sitio web para Corporación Capital, empresa de RRHH especializada en contratación de personal y soluciones para empleadores. Ofrece sección de postulación a empleos y contacto directo con empleadores.",
  githubLink: "https://github.com/fedemoretto11/corporacion-capital",
  webLink: "https://corporacion-capital.vercel.app/",
  title: "Corporacion Capital - No terminado",
  type: "sitioWeb",
  img:"https://firebasestorage.googleapis.com/v0/b/portfolio-moretto.appspot.com/o/images%2FCorporacionCapital.png?alt=media&token=99393175-780d-4873-aeb8-fe9ce7fffb77",
  isFinished: false,
}

function addToDB(){
  const docAdded = addDoc(collection(db, "projects"), project)
  console.log(docAdded)
}

// addToDB()

