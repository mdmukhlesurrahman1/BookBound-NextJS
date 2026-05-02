import Link from "next/link";

const RegisterPage = () => {
    return (
        <div className="mx-auto py-20">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
                <legend className="fieldset-legend">Register</legend>

                <label className="label">Name</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Your Name"
                    required
                />

                <label className="label">Email</label>
                <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                />

                <label className="label">Password</label>
                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                />

                <label className="label">Photo Url</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Photo Url"
                />

                <button className="btn btn-primary my-4">Register</button>

                <p className="text-center">
                    You have an account?{" "}
                    <Link className="font-semibold text-primary" href="/login">
                        <u>Login</u>
                    </Link>
                </p>

                <p className="mt-4 text-center font-semibold">-or-</p>
                <button className="btn btn-outline btn-primary mt-4 rounded-full">
                    Login with Google
                </button>
            </fieldset>
        </div>
    );
};

export default RegisterPage;
