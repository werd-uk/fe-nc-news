import { Link } from "react-router";
import { Skull } from "@phosphor-icons/react";
import UserPanel from "./users/UserPanel";

function Header() {
    return (
        <>
            <header className="sm:flex col-span-full items-center bg-white rounded-md text-black py-2 px-6 mb-2 justify-between">
                <div>
                    <Link to="/">
                        <h1 className="flex text-nowrap text-xl sm:text-2xl md:text-3xl">
                            <span className="flex flex-nowrap">
                                <Skull className="mt-[2px] me-1" />
                                Dread-it
                            </span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex gap-3 items-center">
                    <div className="flex border-1 rounded-sm p-2 gap-2">
                        <h2>Topics:</h2>
                        <Link to="/">/all</Link>
                        <Link to="/topics/coding">/coding</Link>
                        <Link to="/topics/cooking">/cooking</Link>
                        <Link to="/topics/football">/football</Link>
                    </div>
                </nav>
                <UserPanel />
            </header>
        </>
    );
}

export default Header;
