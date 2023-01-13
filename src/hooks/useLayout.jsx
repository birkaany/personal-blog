import { HeroSection } from "../components";
import Layout from "../components/Layout/Layout";

function LayoutProvider({ children, hasHero }) {
  if (hasHero)
    return (
      <Layout>
        <HeroSection />
        {children}
      </Layout>
    );

  return <Layout>{children}</Layout>;
}

export default LayoutProvider;
