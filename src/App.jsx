function App() {
    return (
        <div className="flex-nowrap gap-5 bg-white dark:bg-black min-h-[100dvh] min-w-[100dvw] justify-center p-10">
            <div className="grid grid-cols-12 gap-1">
                <header className="flex col-span-full bg-white rounded-md text-black p-5 min-fit">Logo</header>
                <main className="flex col-span-full bg-white rounded-md text-black p-5 min-fit">Middle</main>
                <footer className="flex col-span-full bg-white rounded-md text-black p-5 min-fit">Footer</footer>
            </div>
        </div>
    );
}

export default App;
