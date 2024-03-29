import React from "react";

function Community() {
    return (
        <main className="h-screen pt-10 flex flex-col justify-start items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold my-5">Connect & Discover</h1>
                <p className="text-xl">Welcomen to our Community</p>
            </div>
            <div className="w- h-screen flex flex-row justify-start items-start text-center">
                <div className="h-screen w-1/4 pt-12 border-r border-accent">
                    OVERVIEW
                </div>
                <div className="h-scereen w-screen pt-12">BLOGSECTION</div>
                <div className="h-scereen w-1/4 pt-12">TRENDING</div>
            </div>
        </main>
    );
}

export default Community;
