import { JSX } from "preact/jsx-runtime";

export default function Footer(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return <footer>{props.children}</footer>;
}
