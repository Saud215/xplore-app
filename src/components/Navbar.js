import { pageLinks, socialLinks } from "../data";
import Title from "./Title";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center ">
          <div className="nav-header ">
            <div className="nav-logo">
              <Title firstPart={"X"} secondPart={"Plore"} />
            </div>
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              const { id, href, text } = link;

              return (
                <li key={id}>
                  <a href={href} className="nav-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
