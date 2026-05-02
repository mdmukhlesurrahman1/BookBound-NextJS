"use client";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";

export default function SignUpPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        if (!error) {
            router.push("/login");
            toast.success("Register Successfully!");
        }
        else{
            toast.error(error.message);
        }
    };

    return (
        <Card className="mx-auto py-10 my-10 bg-base-200 border-2 border-base-300 shadow-lg w-80 md:w-100">
            <h1 className="text-center text-2xl font-bold">Register</h1>

            <Form
                className="flex flex-col gap-4 mx-auto w-70 md:w-80 "
                onSubmit={onSubmit}
            >
                <TextField isRequired name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                    <FieldError />
                </TextField>

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
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1
                        number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2 justify-between">
                    <Button type="submit" className="bg-primary w-full">
                        Register
                    </Button>
                    <Button
                        type="reset"
                        variant="secondary"
                        className="text-primary font-semibold w-full"
                    >
                        Reset
                    </Button>
                </div>
            </Form>
            <p className="text-center mt-5">
                You have an account?{" "}
                <Link className="font-semibold text-primary" href="/login">
                    <u>Login</u>
                </Link>
            </p>

            <p className="mt-4 text-center font-semibold">-or-</p>
            <button className="btn btn-outline btn-primary mt-4 rounded-full w-70 md:w-80 mx-auto">
                <BsGoogle /> Login with Google
            </button>
        </Card>
    );
}
