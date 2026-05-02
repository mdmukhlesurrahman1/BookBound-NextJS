"use client"
import React from "react";
import { toast } from "react-toastify";

const BorrowButton = () => {
    const successToast = () => toast.success("Borrow This Book Successfully!");

    return (
        <div>
            <button onClick={successToast} className="btn btn-primary mt-10">
                Borrow This Book
            </button>
        </div>
    );
};

export default BorrowButton;
