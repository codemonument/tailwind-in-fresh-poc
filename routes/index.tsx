import { Head } from "$fresh/runtime.ts";
import { HeroBanner } from "../components/HeroBanner.tsx";
import { Layout } from "../components/Layout.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <Layout>
      <main class="p-4 w-full h-full ">
        <HeroBanner></HeroBanner>
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </main>
    </Layout>
  );
}
