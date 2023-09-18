// COMPONENTS:
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import OneTWShowPage from "./pages/OneTVShowPage";
import Footer from "./components/footer";

// OTHER:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//STYLES
import './styles/index.scss'

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <main className="app-container">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/singleshow/:id" element={<OneTWShowPage />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </QueryClientProvider>
      </main>
    </>
  );
};

export default App;
