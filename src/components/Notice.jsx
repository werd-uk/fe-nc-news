function Notice({ message, level = "notice" }) {
    const severity = {
        alert: "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400",
        notice: "text-amber-800 bg-amber-50 dark:bg-gray-800 dark:text-amber-400",
        success: "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400",
    };

    return (
        <>
            <div className={`flex ${severity[level]} p-2 text-sm rounded-lg gap-2`} role="alert">
                <span className="font-medium">{message}</span>
            </div>
        </>
    );
}

export default Notice;
