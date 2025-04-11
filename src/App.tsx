import Layout from "./layout/Layout";
import { Outlet } from "react-router";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
