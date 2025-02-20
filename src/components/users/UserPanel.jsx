import UserSelect from "./UserSelect";

function UserPanel() {
    return (
        <div className="flex gap-3">
            <form className="min-w-xs">
                <label htmlFor="user-select" className="hidden">
                    Users
                </label>
                <UserSelect />
            </form>
        </div>
    );
}

export default UserPanel;
