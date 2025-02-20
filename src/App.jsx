import Header from "./components/Header";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import SingleArticle from "./pages/SingleArticle";
import { NotFound } from "./pages/errors/ErrorPages";
import { Routes, Route, useParams } from "react-router";

function App() {
    const { id } = useParams();

    return (
        <div className="bg-white dark:bg-gray-500 justify-center p-3 h-fit">
            <Routes>
                <Route path="*" element={<Header />}></Route>
            </Routes>
            <main className="bg-white rounded-md text-black justify-items-center mb-2">
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

            <footer className=" bg-white rounded-md text-black p-5 ">Footer</footer>
        </div>
    );
}

export default App;
