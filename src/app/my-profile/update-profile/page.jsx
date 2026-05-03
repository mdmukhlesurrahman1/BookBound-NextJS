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
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UpdateProfilePage = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        await authClient.updateUser({
            name,
            image,
        });
        router.push("/my-profile");
        toast.success("Updated Successfully!");
    };
    return (
        <Card className="mx-auto py-10 my-10 bg-base-200 border-2 border-base-300 shadow-lg w-80 md:w-100">
            <h1 className="text-center text-2xl font-bold">
                Update Information
            </h1>

            <Form
                onSubmit={onSubmit}
                className="flex flex-col gap-4 mx-auto w-70 md:w-80 "
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

                <Button type="submit" className="bg-primary w-full">
                    Update Information
                </Button>
            </Form>
        </Card>
    );
};

export default UpdateProfilePage;
