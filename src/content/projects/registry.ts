export const projectContent = {
  "hub-programacion": () => import("./hub-programacion.mdx"),
};

export type ProjectContentSlug = keyof typeof projectContent;
