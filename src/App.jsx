import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Discography from "./pages/Discography";
import Members from "./pages/Members";

export default function App() {
    return (
        <div className="min-h-screen bg-black text-zinc-100">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/discography" element={<Discography />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
