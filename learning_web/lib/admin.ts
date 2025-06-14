import { auth } from "@clerk/nextjs/server";


const adminIds = [
    "user_2ySDIKSv3uijauf0CNcCkLaPb2j"
];

export const isAdmin = async () => {
    const { userId } = await auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
};