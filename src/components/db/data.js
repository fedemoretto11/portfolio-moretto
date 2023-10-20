import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.envVITE_appId,
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const data = getStorage(app)

export async function agergarDocumento(referencia) {
  let imageURL;
  let indiviudalImageRef = ref(data, `images/${referencia}.webp`)
  let url = getDownloadURL(indiviudalImageRef)
    try {
      await url.then((res) => {imageURL = res})
    } catch (error) {
      console.log(error, "error here")
    }  

    let proyecto = {
      title: "To Do List",
      description: "Desarrollé una aplicación de lista de tareas como un proyecto personal para perfeccionar mis capacidades en programación utilizando JavaScript y Programación Orientada a Objetos (POO). La aplicación permite la gestión de tareas pendientes con una interfaz fácil de usar, lo que facilita el seguimiento y la actualización de las tareas en tiempo real.",
      type: "varios",
      img: imageURL,
      githubLink: "https://github.com/fedemoretto11/To-Do-List",
      webLink: "https://fedemoretto11.github.io/To-Do-List/"
    }
  // addDoc(collection(db, "projects"), proyecto)
  //   .then((res) => {
  //     console.log(res, "Docu subido correctamente")
  //   })
  //   .catch((err) => {
  //     console.error(err, "error de carga de documento")
  //   })
}


// const imagesFolderRef = ref(data, 'images')
// const indiviudalImageRef = ref(data, 'images/toDoList.webp')
const metadata = {
  contentType: 'image/webp' 
}

export function subirFoto() {
  fetch('/public/toDoList.webp')
  .then((response) => response.blob())
  .then((blob) => {
      uploadBytes(indiviudalImageRef, blob, metadata)
        .then((snapshot) => {
          console.log("uploaded by Fede", snapshot)
        })
        .catch((err) => {
          console.error("not catch", err)
        })
    })
    .catch((err) => {
      console.error(err, "hay un mistake")
    })
}

// export function getUrl(referencia) {
//   let indiviudalImageRef = ref(data, `images/${referencia}.webp`)
//   getDownloadURL(indiviudalImageRef)
//     .then((url) => {
//       console.log(typeof url)
//       console.log(url)
//     })
//     .catch((err) => {
//       console.error(err, "error de obtencion de url")
//     })
//   }




