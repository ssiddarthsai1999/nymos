import React from "react";

function TeamCard({ item }) {
    return (
        <div className="w-[300px] border border-[#444444] rounded-md p-3  justify-center gap-2 flex-col flex teamCardBg">
            <img
                src={item.image}
                alt=""
                className="w-[300px] rounded-md h-[300px] object-cover"
            />

            <div className="flex justify-between items-center align-middle p-2 ">
                <div className="">
                    {" "}
                    <h3> {item.name}</h3>
                    <p>{item.role}</p>
                </div>
                <div className="">
                    <i class="fa-brands fa-twitter fa-fade fa-xl"></i>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
