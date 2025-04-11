type language =
  | "React"
  | "NodeJs"
  | "MongoDB"
  | "Pusher"
  | "Tailwindcss"
  | "Angular"
  | "NestJS"
  | "VueJs"
  | "GraphQL";

export interface projectInterface {
  url: string;
  name: string;
  description: string;
  languages: Array<language>;
}
