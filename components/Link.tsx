import { JSX } from "preact/jsx-runtime";

export default function Link(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props}>
      {props.children}
    </a>
  );
}
