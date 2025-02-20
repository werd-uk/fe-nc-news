import { Link } from "react-router";
import { Skull } from "@phosphor-icons/react";
import UserPanel from "./users/UserPanel";

function Header() {
    return (
        <>
            <header className="flex p-2 col-span-full items-center bg-white rounded-md text-black py-2 px-6 mb-2 justify-between">
                <div className="flex grow">
                    <Link to="/">
                        <h1 className=" text-nowrap text-xl sm:text-2xl">
                            <span className="flex flex-nowrap ">
                                <Skull className="sm:mt-[2px] me-1 sm:me-3" />
                                <span className="text-nowrap sr-only lg:not-sr-only">Dread-it</span>
                            </span>
                        </h1>
                    </Link>
                </div>
                <div className="flex gap-4 justify-between grow">
                    <nav className="gap-3 items-center max-w-fit">
                        <div className="flex border-1 border-gray-300 rounded-md p-2 gap-2 sm:text-sm">
                            <h2>Topics:</h2>
                            <Link to="/">/all</Link>
                            <Link to="/topics/coding">/coding</Link>
                            <Link to="/topics/cooking">/cooking</Link>
                            <Link to="/topics/football">/football</Link>
                        </div>
                    </nav>
                    <UserPanel className="min-w-[20px]" />
                </div>
            </header>
        </>
    );
}

export default Header;
