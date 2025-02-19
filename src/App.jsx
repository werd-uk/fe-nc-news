import Header from "./components/Header";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import { Routes, Route, useParams } from "react-router";

function App() {
    const { id } = useParams();

    return (
        <div className="bg-white dark:bg-black justify-center p-3">
            <Routes>
                <Route path="/*" element={<Header />}></Route>
            </Routes>
            <main className="bg-white rounded-md text-black p-5 justify-items-center">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles/:id" element={<SingleArticle />} />
                    <Route path="/*" element={<p>{JSON.stringify(id) || "PAGE NOT FOUND"}</p>} /> {/* 404 to go here */}
                </Routes>
            </main>

            <footer className=" bg-white rounded-md text-black p-5 ">Footer</footer>
        </div>
    );
}

export default App;
