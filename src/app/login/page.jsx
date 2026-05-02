import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="mx-auto py-20">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                />

                <button className="btn btn-primary my-4">Login</button>

                <p className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                        className="font-semibold text-primary"
                        href="/register"
                    >
                        <u>Register</u>
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

export default LoginPage;
