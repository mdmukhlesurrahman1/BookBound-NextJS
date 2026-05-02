"use client";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";

export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });
        if (!error) {
            toast.success("Login Successfully!");
        } else {
            toast.error(error.message);
        }
    };

    return (
        <Card className="mx-auto py-10 my-10 bg-base-200 border-2 border-base-300 shadow-lg w-80 md:w-100">
            <h1 className="text-center text-2xl font-bold">Login</h1>

            <Form
                className="flex flex-col gap-4 mx-auto w-70 md:w-80"
                onSubmit={onSubmit}
            >
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value,
                            )
                        ) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <FieldError />
                </TextField>

                <Button type="submit" className="bg-primary w-full">
                    Login
                </Button>
            </Form>
            <p className="text-center mt-5">
                Don&apos;t have an account?{" "}
                <Link className="font-semibold text-primary" href="/register">
                    <u>Register</u>
                </Link>
            </p>

            <p className="mt-4 text-center font-semibold">-or-</p>
            <button className="btn btn-outline btn-primary mt-4 rounded-full w-70 md:w-80 mx-auto">
                <BsGoogle /> Login with Google
            </button>
        </Card>
    );
}
