import React from "react";

function SignUp() {
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
            <form action="" className="flex flex-col border mt-20 border-black rounded-md p-20">
                <h2 className="font-black py-5 text-2xl">Sign up for a free account</h2>
                <div className="flex flex-row space-x-5 mb-5">
                    <input type="text" />
                    <input type="text" />
                </div>
                <input type="text" />
          <input type="text" />
          <button>Registger</button>
            </form>
        </main>
    );
}

export default SignUp;
