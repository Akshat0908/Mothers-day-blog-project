import React from "react";

export const FooterByAnima = (): JSX.Element => {
  // Navigation links data for easy mapping
  const navLinks = [
    { text: "Home", href: "#" },
    { text: "About me", href: "#" },
    { text: "Categories", href: "#" },
    { text: "Contact", href: "#" },
  ];

  return (
    <footer className="w-full py-8 bg-white border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
        <div className="mb-6 md:mb-0">
          <h2 className="[font-family:'Cormorant_Garamond',Helvetica] font-bold text-x03-dark text-[32px] leading-normal">
            Personal Travel
          </h2>
          <p className="font-caption font-[number:var(--caption-font-weight)] text-x04-gray text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
            Copyrights © 2020. All Rights Reserved.
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-x04-gray text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] whitespace-nowrap [font-style:var(--subtitle-2-font-style)] hover:text-black transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
