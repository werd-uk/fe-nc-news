import UserSelect from "./UserSelect";

function UserPanel() {
    return (
        <div className="flex justify-end items-center">
            <form className="xl:min-w-xs min-w-18 h-fit">
                <label htmlFor="user-select" className="hidden">
                    Users
                </label>
                <UserSelect />
            </form>
        </div>
    );
}

export default UserPanel;
