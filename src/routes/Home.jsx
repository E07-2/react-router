import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main style={{ textAlign: "center" }}>
        <h2>Welcome to react router</h2>
        <p>Home</p>
      </main>
      <Outlet />
      <nav style={{ textAlign: "center" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link> |{" "}
        <Link to="team">Team</Link> |{" "}
        <Link to="contact">Contact</Link>
      </nav>
    </>
  );
};

export default Home;
