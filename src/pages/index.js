import Layout from "@theme/Layout";
import {Redirect} from "@docusaurus/router";

export default function Home() {
  return (
    <Layout>
      <Redirect to="/docs/intro" />
    </Layout>
  );
}
