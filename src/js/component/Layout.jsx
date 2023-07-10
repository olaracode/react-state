import React from "react";

// Navbar y mi footer
export const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Bootstrap
        </a>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <div className="bg-body-tertiary mt-5 p-5">
      El footer de nuestra aplicación!
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quo
        placeat, accusantium veritatis itaque vitae incidunt dolore nemo enim
        minima aliquid non nobis! Aspernatur labore molestiae, pariatur
        reiciendis architecto autem unde alias accusamus asperiores vero
        cupiditate voluptas! Fuga ipsam doloremque dolorem ratione, assumenda
        aut cum laborum non voluptatum mollitia. Officia.
      </p>
    </div>
  );
};

/**
 * exporta Footer como Navbar
 *
 */
