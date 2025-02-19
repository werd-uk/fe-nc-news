import UserSelect from "./UserSelect";

function UserPanel() {
    return (
        <div className="flex items-center gap-3">
            <form className="max-w-sm mx-auto">
                <label htmlFor="user-select" className="hidden">
                    Users
                </label>
                <UserSelect />
            </form>
        </div>
    );
}

export default UserPanel;
