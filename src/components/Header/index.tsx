"use client";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../motion/ResizableNavbar";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);

  const navItems = [
    {
      name: "Sobre",
      link: "/sobre",
    },
    {
      name: "Projetos",
      link: "/projetos",
    },
    {
      name: "Contato",
      link: "/contato",
    },
  ];

  return (
    <Navbar setVisible={setVisible} visible={visible}>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo visible={visible} />
        <NavItems items={navItems} visible={visible} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo visible={visible} />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
