import { useState, useEffect, useContext } from "react";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { CaretUpDown } from "@phosphor-icons/react";
import { Check } from "@phosphor-icons/react";
import { getUsers } from "../../api/api";
import { UserAccount } from "../contexts/UserAccount";

export default function UserSelect() {
    const noUser = [
        {
            id: 999,
            name: "Not Logged In",
            avatar: "https://images.pexels.com/photos/942304/pexels-photo-942304.jpeg?w=700&h=700",
        },
    ];
    const { loggedInUser, setLoggedInUser } = useContext(UserAccount);
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(noUser[0]);

    useEffect(() => {
        getUsers().then((users) => {
            setUserList(users);
        });
    }, []);

    useEffect(() => {
        setLoggedInUser(selectedUser);
    }, [selectedUser]);

    return (
        <Listbox value={selectedUser} onChange={setSelectedUser}>
            <Label className="block text-sm/6 font-medium text-gray-900">Select user: {loggedInUser.name}</Label>
            <div className="relative mt-2">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                        <img alt="" src={selectedUser.avatar_url || "https://images.pexels.com/photos/942304/pexels-photo-942304.jpeg?w=700&h=700"} className="size-5 shrink-0 rounded-full" />
                        <span className="block truncate">{selectedUser.name || "Not Logged In"}</span>
                    </span>
                    <CaretUpDown aria-hidden="true" className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm">
                    <ListboxOption
                        value="none"
                        className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden">
                        <div className="flex items-center">
                            <img alt="" src="https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg?w=700&h=700" className="size-5 shrink-0 rounded-full" />
                            <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">Not Logged In</span>
                        </div>

                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                            <Check aria-hidden="true" className="size-5" />
                        </span>
                    </ListboxOption>
                    {userList.map((user) => (
                        <ListboxOption
                            key={user.username}
                            value={user}
                            className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden">
                            <div className="flex items-center">
                                <img alt="" src={user.avatar_url} className="size-5 shrink-0 rounded-full" />
                                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{user.name}</span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                <Check aria-hidden="true" className="size-5" />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
}
