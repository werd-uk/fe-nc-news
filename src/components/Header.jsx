import { Link } from "react-router";
import { Skull } from "@phosphor-icons/react";
import UserPanel from "./users/UserPanel";

function Header() {
    return (
        <>
            <header className="flex col-span-full items-center bg-white rounded-md text-black py-2 px-6 mb-2 justify-between">
                <div></div>
                <div>
                    <Link to="/">
                        <h1 className="flex flex-nowrap text-3xl items-center">
                            <span className="pe-1">
                                <Skull />
                            </span>
                            Dread-it
                        </h1>
                    </Link>
                </div>
                <UserPanel />
            </header>
        </>
    );
}

export default Header;
