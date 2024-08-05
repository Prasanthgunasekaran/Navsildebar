import { useState } from "react";
import './Navbar22.scss';

const navItems = ["home", "settings", "build", "cloud", "mail", "bookmark"];

const Navbar22 = () => {
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
            <div>
                <h1>Hello</h1>
            </div>
        </section>
    );
};

export default Navbar22;

