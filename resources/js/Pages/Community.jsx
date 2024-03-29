import React from "react";

function Community() {
    return (
        <main className="h-screen pt-10 flex flex-col justify-start items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold my-5">Connect & Discover</h1>
                <p className="text-xl">Welcomen to our Community</p>
            </div>
            <div className="h-screen w-screen flex flex-row justify-start items-start text-center">
                <div className="h-screen w-1/6 pt-12 border-r border-accent">
                    OVERVIEW
                </div>
          <div className=" flex - flex-col h-screen w-screen justify-start items-center pt-12 gap-7">
                <textarea name="" id="" cols="30" rows="10"className="border-2 border-accent w-96 h-44"></textarea>
                <div className="border-2 rounded-xl border-accent w-96 h-44"></div>
                <div className="border-2 rounded-xl border-accent w-96 h-44"></div>
                <div className="border-2 rounded-xl border-accent w-96 h-44"></div>
                <div className="border-2 rounded-xl border-accent w-96 h-44"></div>
                </div>
                <div className="h-screen w-1/6 pt-12 rounded-xl mr-10 px-10 bg-secondary">TRENDING</div>
            </div>
        </main>
    );
}

export default Community;
