import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAVIGATION_LINKS } from "../utils/constants";
import Dock from "../blocks/Components/Dock/Dock";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500  text-left"
          >
            My Blog
          </Link>
          <Dock
            items={NAVIGATION_LINKS.map((link) => ({
              icon: link.icon ? (
                <img
                  src={link.icon}
                  alt={link.label}
                  className="w-8 h-8 object-cover rounded-full"
                />
              ) : (
                <span className="text-xl">{link.label[0]}</span>
              ),
              label: link.label,
              onClick: () => navigate(link.path),
              className:
                location.pathname === link.path ? "bg-blue-500/20" : "",
            }))}
            magnification={70}
            distance={150}
            baseItemSize={40}
            panelHeight={60}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
