import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen pt-4">
      <Header />
      <main className="pt-8 pb-24">
        <Outlet />
      </main>
      <footer className="text-center text-xs text-muted-foreground py-8">
        © {new Date().getFullYear()} — Crafted with care
      </footer>
    </div>
  );
};

export default Layout;