import { FiLink } from "react-icons/fi";
import { projectInterface } from "../interface/project.interface";
import { FaGithub } from "react-icons/fa";

export const projects: Array<projectInterface> = [
  {
    name: "Post Social",
    description:
      "Post Social es una aplicación web que permite a los usuarios publicar comentarios, dejar “me gusta” y responder con nuevos comentarios en cada publicación.",
    languages: ["VueJs", "GraphQL", "NestJS", "MongoDB"],
    links: [
      {
        name: "Web",
        url: "https://photos-graphql-nestjs-vue.firebaseapp.com",
        Icon: FiLink,
      },
      {
        name: "Client",
        url: "https://github.com/jonmolinna/Photos_Graphql_Vue_2",
        Icon: FaGithub,
      },
      {
        name: "Server",
        url: "https://github.com/jonmolinna/Photos_Graphql_Nestjs",
        Icon: FaGithub,
      },
    ],
  },
  {
    name: "Instagram Clone",
    description:
      "Aplicación web inspirada en Instagram, que permite a los usuarios subír fotos, dejar comentarios y reaccionar con 'me gusta'.",
    languages: ["Angular", "Tailwindcss", "NestJS", "MongoDB"],
    links: [
      {
        name: "Web",
        url: "https://angular-firebase-9b19e.web.app",
        Icon: FiLink,
      },
      {
        name: "Client",
        url: "https://github.com/jonmolinna/posts_social_angular-2",
        Icon: FaGithub,
      },
      {
        name: "Server",
        url: "https://github.com/jonmolinna/posts_social_nestjs",
        Icon: FaGithub,
      },
    ],
  },
  {
    name: "Mensaje Individual",
    description:
      "Aplicación web de mensajería en tiempo real, inspirada en WhatsApp, enfocada en conversaciones privadas entre dos usuarios.",
    languages: ["React", "Tailwindcss", "NodeJs", "MongoDB", "Pusher"],
    links: [
      {
        name: "Web",
        url: "https://chat-app-react-be893.web.app",
        Icon: FiLink,
      },
      {
        name: "Client",
        url: "https://github.com/jonmolinna/chat-app-react",
        Icon: FaGithub,
      },
      {
        name: "Server",
        url: "https://github.com/jonmolinna/chat-app-nodejs",
        Icon: FaGithub,
      },
    ],
  },
  {
    name: "Mensaje Grupal",
    description:
      "Aplicación web de mensajería instantánea enfocada en la comunicación en grupo. Inspirada en Messenger, permite enviar mensajes en tiempo real mediante WebSockets con Pusher.",
    languages: ["React", "NodeJs", "MongoDB", "Pusher"],
    links: [
      {
        name: "Web",
        url: "https://messenger-react-4389.web.app",
        Icon: FiLink,
      },
      {
        name: "Client",
        url: "https://github.com/jonmolinna/messenger_react",
        Icon: FaGithub,
      },
      {
        name: "Server",
        url: "https://github.com/jonmolinna/messenger_backend",
        Icon: FaGithub,
      },
    ],
  },
];
