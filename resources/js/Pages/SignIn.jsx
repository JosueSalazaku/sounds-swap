import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
    return (
        <main className="flex flex-col justify-start items-center">
            <div className="mt-20 flex flex-col justify-start items-center">
                <h1 className="text-3xl p-5">
                    Do You Want To Sell Your Un-used Audio Equipement?
                </h1>
                <h3 className="text-center text-lg">
                    Make some money from your audio equipement that is just
                    sitting there <br /> collecting dust, by selling it here for
                    free.
                </h3>
            </div>
            <form
                action=""
                className="flex flex-col border mt-20 border-black rounded-md p-20"
            >
                <h2 className="font-black my-10 text-2xl">Welcome Back</h2>
                <div className="mt-5 mb-5 flex flex-col gap-5 w-96">
                    <input type="text" placeholder="@" className="rounded-md" />
                    <input
                        type="password"
                        placeholder="password"
                        className="rounded-md"
                    />
                </div>
                <button className="bg-primary h-10 font-bold text-white rounded-md">
                    Log in
                </button>
                <div className="flex flex-col border-t pt-5 border-accent mt-5 gap-5">
                    <button className="border-2 h-10 font-bold text-black rounded-md hover:bg-gray-200">
                        GOOGLE
                    </button>
                    <button className="border-2 h-10 font-bold text-black rounded-md hover:bg-gray-200">
                        Apple
                    </button>
                    <h1 className="mt-2 text-center">
                        No account? <Link to="/Signin"><strong className="text-primary">Sign Up</strong></Link>
                    </h1>
                </div>
            </form>
        </main>
    );
}

export default SignIn;
