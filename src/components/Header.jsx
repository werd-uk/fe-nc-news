import { Link } from "react-router";
import { Skull } from "@phosphor-icons/react";
import UserPanel from "./users/UserPanel";

function Header() {
    return (
        <>
            <header className="flex col-span-full items-center bg-white rounded-md text-black py-2 px-6 mb-2 justify-between">
                <div>
                    <Link to="/">
                        <h1 className="flex flex-nowrap text-xl sm:text-2xl md:text-3xl">
                            <span className="flex flex-nowrap">
                                <Skull className="mt-[2px] me-1" />
                                Dread-it
                            </span>
                        </h1>
                    </Link>
                </div>
                <UserPanel />
            </header>
        </>
    );
}

export default Header;
