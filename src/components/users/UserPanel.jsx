import UserSelect from "./UserSelect";

function UserPanel() {
    return (
        <div className="flex">
            <form className="min-w-max">
                <label htmlFor="user-select" className="hidden">
                    Users
                </label>
                <UserSelect />
            </form>
        </div>
    );
}

export default UserPanel;
