import { JSX } from "preact";

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
    />
  );
}
