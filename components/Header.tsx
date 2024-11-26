import { JSX } from "preact/jsx-runtime";

export default function Header(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <header>
      {props.children}
    </header>
  );
}
