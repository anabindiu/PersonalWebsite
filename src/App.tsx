// src/App.tsx
import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "@/pages/Index";
import Development from "@/pages/Development";
import Painting from "@/pages/Painting";
import Photography from "@/pages/Photography";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<Index />} />
                <Route path="/development" element={<Development />} />
                <Route path="/painting/*" element={<Painting />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
