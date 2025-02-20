import Header from "./components/Header";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import SingleArticle from "./pages/SingleArticle";
import { NotFound } from "./pages/errors/ErrorPages";
import { Routes, Route, useParams } from "react-router";

function App() {
    const { id } = useParams();

    return (
        <div className="bg-white dark:bg-black justify-center p-3">
            <Routes>
                <Route path="*" element={<Header />}></Route>
            </Routes>
            <main className="bg-white rounded-md text-black p-5 justify-items-center">
                <Routes>
                    <Route path="/articles">
                        <Route path=":id" element={<SingleArticle />} />
                        <Route path="*" element={<NotFound />} />
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
