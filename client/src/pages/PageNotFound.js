import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const PageNotFound = () => {
  return (
    <Layout title={"Page Not Found!"}>
      <div className="text-center">
        <h1>404</h1>
        <h4>Page Not Found</h4>
        <p>
          Go back to <Link to="/">HomePage</Link>
        </p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
