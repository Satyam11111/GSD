import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Home - Ecommerce"}>
      <h4> HomePage</h4>
      <pre>{localStorage.getItem("auth")}</pre>
    </Layout>
  );
};

export default HomePage;
