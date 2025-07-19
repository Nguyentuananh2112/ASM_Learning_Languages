import { auth } from "@clerk/nextjs/server";


const adminIds = [
    "user_2xV5uFE0LJ3wS01OLv4QAS9AP2G"
];

export const isAdmin = async () => {
    const { userId } = await auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
};