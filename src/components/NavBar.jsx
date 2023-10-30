import {headerLogo} from "../assets/images";
import {navLinks} from "../constants";
import { useState } from "react";

const NavBar = () => {
  const [menuView, setMeanuView]    = useState("hidden");
  const [activeLink, setActiveLink] = useState("");

  const handleHamburgerClick = () => {
    setMeanuView(!menuView);
    const dropDownMenu = document.getElementById('drop-down-menu-id');
    dropDownMenu.classList.toggle('open-menu');
  }

  return (
    <header className="padding-x py-8 fixed shadow-xl bg-slate-100 z-10 w-full">
      <nav className="flex justify-between items-center top-0 max-container">
        <a href="#home" label="Home">
          <img src={headerLogo} alt="Logo" width={130} height={29}/>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-monts errat leading-normal text-lg text-slate-gray">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <div onClick={handleHamburgerClick}
            className="drop-down-menu-class object-contain cursor-pointer" id='drop-down-menu-id'>
              <div className='w-[28px] h-[28px] drop-down-menu-div'>
                <span className='line-1 bg-slate-gray'></span>
                <span className='line-2 bg-slate-gray'></span>
                <span className='line-3 bg-slate-gray'></span>
              </div>
          </div>
          <div className={`p-6 bg-slate-100 shadow-xl absolute top-19 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
            ${menuView === "hidden" ? "hidden" : (!menuView ? "flex" : "reverse-animation")} navbar-drop-down-menu`}>
              <ul className="list-none flex justify-end items-start gap-4 flex-col max-lg:block">
              {navLinks.map((item) => (
                <li className="pb-2" key={item.label} onClick={() => setActiveLink(item.href)}>
                  <a onClick={handleHamburgerClick} href={item.href} className={`font-montserrat leading-normal hover:font-semibold hover:text-coral-red 
                    cursor-pointer text-l ${activeLink === item.href ? "text-coral-red font-semibold" : "text-slate-gray"}`}>
                      {item.label}
                    </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
