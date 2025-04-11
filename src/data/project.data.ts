import { projectInterface } from "../interface/project.interface";

export const projects: Array<projectInterface> = [
  {
    name: "Post Social",
    description:
      "Post Social es una aplicación web tipo Twitter que permite a los usuarios publicar comentarios, dejar “me gusta” y responder con nuevos comentarios en cada publicación. Está enfocada en la interacción rápida y directa entre usuarios. Desarrollada con tecnologías como React, Node.js, TailwindCSS y MongoDB, integra autenticación y una experiencia fluida tipo red social",
    languages: ["VueJs", "GraphQL", "NestJS", "MongoDB"],
    url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744309707/images/project-1_jtjhag.png",
  },
  {
    name: "Instagram Clone",
    description:
      "Aplicación web inspirada en Instagram, que permite a los usuarios subír fotos, dejar comentarios y reaccionar con 'me gusta'.",
    languages: ["Angular", "Tailwindcss", "NestJS", "MongoDB"],
    url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744309707/images/project-1_jtjhag.png",
  },
  {
    name: "Mensaje Individual",
    description:
      "Aplicación web de mensajería en tiempo real, inspirada en WhatsApp, enfocada en conversaciones privadas entre dos usuarios. Cuenta con autenticación mediante JWT, asegurando que solo el emisor y el receptor puedan acceder a sus mensajes.",
    languages: ["React", "Tailwindcss", "NodeJs", "MongoDB", "Pusher"],
    url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744309707/images/project-1_jtjhag.png",
  },
  {
    name: "Mensaje Grupal",
    description:
      "Aplicación web de mensajería instantánea enfocada en la comunicación en grupo. Inspirada en Messenger, permite enviar mensajes en tiempo real mediante WebSockets con Pusher. Desarrollada con React, Node.js y MongoDB.",
    languages: ["React", "NodeJs", "MongoDB", "Pusher"],
    url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744309707/images/project-1_jtjhag.png",
  },
];
