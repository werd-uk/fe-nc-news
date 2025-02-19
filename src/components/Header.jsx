import { Link } from "react-router";
import { Skull } from "@phosphor-icons/react";

function Header() {
    return (
        <>
            <Link to="/">
                <header className="flex col-span-full bg-white rounded-md text-black p-2 mb-2 justify-center">
                    <h1 className="flex flex-nowrap text-3xl items-center">
                        <span className="pe-1">
                            <Skull />
                        </span>
                        Dread-it
                    </h1>
                </header>
            </Link>
        </>
    );
}

export default Header;
