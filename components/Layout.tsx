import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Nav } from "./Nav.tsx";

export function Layout(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <Head>
        <title>Tailwind in Fresh</title>
        <link rel="stylesheet" href="./reset.css"></link>
        <link rel="stylesheet" href="./not-twind-integrated.css"></link>
        <link rel="stylesheet" href="./theme.css"></link>
        <link rel="stylesheet" href="./global.css"></link>
      </Head>

      <Nav></Nav>

      {props.children}
    </>
  );
}
