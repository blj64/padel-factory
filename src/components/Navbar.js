import { Link } from "react-router-dom";
import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full bg-black text-white py-6 px-4 md:px-8 flex justify-between items-center navbar fixed z-50">
            <div className="w-[124px] h-[32px]">
                <Link to="/">
                    <img src="https://padel-factory.fr/wp-content/uploads/2020/02/PadelFactoryLogo.png" alt="logo" />
                </Link>
            </div>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] hover:border-b-4 hover:border-b-red-padel ${
                            active === nav.title ? "border-b-4 border-red-padel" : ""
                        } ${index === navLinks.length - 1 ? "pr-5 pl-5" : "pr-5 pl-5"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <Link to={nav.link}>{nav.title}</Link>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${
                        !toggle ? "hidden" : "flex"
                    } p-6 bg-testing1 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                    active === nav.title ? "text-white" : "text-dimWhite"
                                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <Link to={nav.link}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
