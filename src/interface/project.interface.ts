export type language =
  | "React"
  | "NodeJs"
  | "MongoDB"
  | "Pusher"
  | "Tailwindcss"
  | "Angular"
  | "NestJS"
  | "VueJs"
  | "GraphQL";

export interface linkInterface {
  name: string;
  url: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface projectInterface {
  name: string;
  description: string;
  languages: Array<language>;
  links: Array<linkInterface>;
}
