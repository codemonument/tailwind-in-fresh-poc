import { JSX } from "preact";

export function Nav(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <nav class="flex flex-row bg-gray-900 pl-2">
      <a class="p-3" href="./">Main</a>
      {/* <a class="p-3" href="/links">Where to Find Me</a> */}
    </nav>
  );
}
