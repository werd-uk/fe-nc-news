import Header from "./components/Header";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import SingleArticle from "./pages/SingleArticle";
import { NotFound } from "./pages/errors/ErrorPages";
import { Routes, Route } from "react-router";

function App() {
    return (
        <div className="flex flex-col bg-white dark:bg-gray-500 p-3 h-[100dvh] overflow-auto">
            <Routes>
                <Route path="*" element={<Header />}></Route>
            </Routes>
            <main className="grow bg-gray-300 rounded-md text-black justify-items-center mb-2 relative">
                <Routes>
                    <Route path="/articles">
                        <Route path=":id" element={<SingleArticle />} />
                    </Route>
                    <Route path="/topics/:topic_name" element={<Topics />} />
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="/*" element={<NotFound />} />
                    </Route>
                </Routes>
            </main>

            <footer className=" bg-white rounded-md text-black p-5 ">
                Dread-it was bought to you by <a href="https://dev.werd.uk">https://dev.werd.uk/</a>
            </footer>
        </div>
    );
}

export default App;
