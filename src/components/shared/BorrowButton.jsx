"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const BorrowButton = () => {
    const router = useRouter();
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const successToast = () => {
        if (!user) {
            router.push("/login");
        } else {
            toast.success("Borrow This Book Successfully!");
        }
    };

    return (
        <div>
            <button onClick={successToast} className="btn btn-primary mt-10">
                Borrow This Book
            </button>
        </div>
    );
};

export default BorrowButton;
