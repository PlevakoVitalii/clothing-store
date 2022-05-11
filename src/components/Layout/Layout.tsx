import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">&copy; ReactRouter Tutorials 2021</footer>
    </>
  );
};

export { Layout };
