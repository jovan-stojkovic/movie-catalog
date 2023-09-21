// PAGES:
import HomePage from "./pages/HomePage";
import TopRated from "./pages/TopRated";
import Action from "./pages/Action";
import Comedy from "./pages/Comedy";
import Horror from "./pages/Horror";
import Romance from "./pages/Romance";
import Documentaries from "./pages/Documentaries";

// COMPONENTS:
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

// OTHER:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";

//STYLES
import "./styles/index.scss";
import "./styles/toggle.scss";

const queryClient = new QueryClient();
export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <main className="app-container" id={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
              <button className="toggle" onClick={toggleTheme} id={theme}>
                <img
                  src="https://www.iconbolt.com/iconsets/fluent-emoji-flat/sun.svg"
                  alt="theme"
                />
              </button>
              <NavBar />

              <BackToTopButton />
              <Routes>
                <Route className="wrap" path="/" element={<HomePage />} />
                <Route path="/toprated" element={<TopRated />} />
                <Route path="/action" element={<Action />} />
                <Route path="/comedy" element={<Comedy />} />
                <Route path="/horror" element={<Horror />} />
                <Route path="/romance" element={<Romance />} />
                <Route path="/documentaries" element={<Documentaries />} />
              </Routes>
              <Footer />
            </ThemeContext.Provider>
          </BrowserRouter>
        </QueryClientProvider>
      </main>
    </>
  );
};

export default App;
