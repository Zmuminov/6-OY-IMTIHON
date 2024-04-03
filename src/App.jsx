// IMPORT START
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// IMPORT END

// FUNCTION START
function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  // LANG START
  const [lang, setLang] = useState("uz");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    let lang = localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
      setLang(lang);
    }
  }, []);

  function handleChangeLang(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  }
  // FUNCTION'S START
  // FUNCTION'S END
  return (
    <>
      <div className="allHeaderTopDivWrapper">
        <div className="container">
          <div className="headerWrapper">
            <div className="HeaderTop">
              <button className="btnLink">Sign in / Guest</button>
              <button className="btnLink">Create Account</button>
            </div>
          </div>
        </div>
      </div>
      <BrowserRouter>
        <div className="AllheaderBottomDivWrapper">
          <div className="container">
            <div className="headerBottom">
              <NavLink>C</NavLink>
              <div className="linkWrapper">
                <NavLink className="activeWrapper" to="/">
                  Home
                </NavLink>
                <NavLink className="activeWrapper" to="/about">
                  About
                </NavLink>
                <NavLink className="activeWrapper" to="/products">
                  Products
                </NavLink>
                <NavLink className="activeWrapper" to="/cart">
                  Cart
                </NavLink>
              </div>
              <div>
                <button className="btn-theme" onClick={toggleTheme}>
                  {theme}
                </button>
                <select
                  className="select"
                  onChange={handleChangeLang}
                  value={lang}
                >
                  <option value="uz">uz</option>
                  <option value="ru">ru</option>
                  <option value="en">en</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>}>
              Home
            </Route>
            <Route path="/about" element={<About></About>}>
              About
            </Route>
            <Route path="/products" element={<Products></Products>}>
              Products
            </Route>
            <Route path="/cart" element={<Cart></Cart>}>
              Cart
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
// FUNCTION END

export default App;
