import { JSX } from "preact";

export const style =
  "bg-yellow dark:bg-black text-black dark:text-yellow border-black dark:border-yellow placeholder:text-gray focus:outline-none focus:ring-2 ring-red border text-sm rounded-lg w-full";

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      class={`${style} ${props.class ?? ""}`}
    />
  );
}
