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

//STYLES
import "./styles/index.scss";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <main className="app-container">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
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
          </BrowserRouter>
        </QueryClientProvider>
      </main>
    </>
  );
};

export default App;
