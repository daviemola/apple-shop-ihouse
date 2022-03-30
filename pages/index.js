import Contact from "../components/Home/Contact";
import GridCards from "../components/Home/GridCards";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <GridCards />
      <Contact />
    </Layout>
  );
}
