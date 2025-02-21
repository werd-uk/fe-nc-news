import { Link } from "react-router";
import { Skull } from "@phosphor-icons/react";
import UserPanel from "./users/UserPanel";

function Header() {
    return (
        <>
            <header className="flex p-2 bg-white rounded-md text-black mb-2">
                <div className="flex w-full justify-between items-center flex-col sm:flex-row gap-2">
                    <div className="flex items-center text-2xl md:text-xl">
                        <Skull className="mx-1 xs:m-2" />
                        <h1>
                            <span className="text-nowrap sr-only md:not-sr-only max-sm:not-sr-only">Dread-it</span>
                        </h1>
                    </div>
                    <nav className="flex border-1 border-gray-300 rounded-md p-2 gap-2 xs:text-sm">
                        <h2>Topics:</h2>
                        <Link to="/">/all</Link>
                        <Link to="/topics/coding">/coding</Link>
                        <Link to="/topics/cooking">/cooking</Link>
                        <Link to="/topics/football">/football</Link>
                    </nav>
                    <UserPanel />
                </div>
            </header>
        </>
    );
}

export default Header;
