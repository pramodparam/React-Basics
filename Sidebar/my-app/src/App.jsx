import { useState } from "react";

const navItems = ["home", "settings", "build", "cloud", "mail", "bookmark"];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="page">
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <header>
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>

          {/* <div>{isOpen ? <p>Logo</p> : ""}</div> */}
        </header>
        <nav>
          {navItems.map((item) => (
            <button key={item} type="button">
              <span className="material-symbols-outlined">{item}</span>
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </aside>
    </section>
  );
};

export default App;
