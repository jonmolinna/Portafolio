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
    images: [
      {
        name: "Imagen 1",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744649031/images/4_posts_social/img-1_e1938n.png",
          },
        ],
      },
      {
        name: "Imagen 2",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744649031/images/4_posts_social/img-2_zni0ed.png",
          },
        ],
      },
      {
        name: "Imagen 3",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744649030/images/4_posts_social/img-3_djenw3.png",
          },
        ],
      },
      {
        name: "Imagen 4",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744649030/images/4_posts_social/img-4_siruw4.png",
          },
        ],
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
    images: [
      {
        name: "Imagen 1",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744648262/images/3_instagrem_clone/img-1_flasrm.png",
          },
        ],
      },
      {
        name: "Imagen 2",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744648264/images/3_instagrem_clone/img-2_jbvvuy.png",
          },
        ],
      },
      {
        name: "Imagen 3",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744648263/images/3_instagrem_clone/img-3_sctuzh.png",
          },
        ],
      },
      {
        name: "Imagen 4",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744648262/images/3_instagrem_clone/img-4_xbrjhk.png",
          },
        ],
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
    images: [
      {
        name: "Imagen 1",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744645243/images/2_mensaje_individual/img-1_luebwc.png",
          },
        ],
      },
      {
        name: "Imagen 2",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744645243/images/2_mensaje_individual/img-2_xssw7m.png",
          },
        ],
      },
      {
        name: "Imagen 3",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744645242/images/2_mensaje_individual/img-3_yq5xhw.png",
          },
        ],
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
    images: [
      {
        name: "Imagen 1",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744640986/images/1_mensaje_grupal/img-1_zyeq0g.png",
          },
        ],
      },
      {
        name: "Imagen 2",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744640986/images/1_mensaje_grupal/img-2_yqgmml.png",
          },
        ],
      },
      {
        name: "Imagen 3",
        posts: [
          {
            id: 1,
            url: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744640986/images/1_mensaje_grupal/img-3_ytu5a7.png",
          },
        ],
      },
    ],
  },
];
