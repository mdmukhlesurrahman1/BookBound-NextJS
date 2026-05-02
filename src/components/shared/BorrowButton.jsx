"use client"
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const BorrowButton = () => {
    const notify = () => toast.success("Borrow This Book Successfully!");

    return (
        <div>
            <button onClick={notify} className="btn btn-primary mt-10">
                Borrow This Book
            </button>
            <ToastContainer />
        </div>
    );
};

export default BorrowButton;
