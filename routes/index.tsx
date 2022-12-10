import { HeroBanner } from "../components/HeroBanner.tsx";
import { Layout } from "../components/Layout.tsx";

export default function Home() {
  return (
    <Layout>
      <main class="p-4 w-full h-full ">
        <HeroBanner></HeroBanner>
      </main>
    </Layout>
  );
}
