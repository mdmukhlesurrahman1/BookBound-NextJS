"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { format } from "date-fns";

const MyProfile = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user);
    return (
        <div className="w-80 md:w-100 mx-auto shadow-sm border-2 bg-base-200 border-base-300 p-10 my-10 flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <Avatar className="border-2 border-base-content w-25 h-25">
                <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                    <span className="text-3xl font-bold">{user?.name[0].toUpperCase()}</span>
                </Avatar.Fallback>
            </Avatar>
            <h3 className="font-bold text-xl">{user?.name}</h3>
            <p className="text-lg font-semibold italic">Email: {user?.email}</p>
            <Link className="btn btn-primary" href="/my-profile/update-profile">
                Update Profile
            </Link>
        </div>
    );
    n;
};

export default MyProfile;
