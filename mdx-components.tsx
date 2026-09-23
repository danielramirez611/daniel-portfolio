import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="mb-6 text-4xl font-bold text-white" {...props} />
    ),

    h2: (props) => (
      <h2 className="mt-10 mb-4 text-2xl font-semibold text-white" {...props} />
    ),

    p: (props) => <p className="mb-4 leading-7 text-slate-400" {...props} />,

    ...components,
  };
}
