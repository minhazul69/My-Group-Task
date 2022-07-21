import React from "react";
import "./UserFlow.css";

const UserFlow = () => {
  return (
    <div className="container mx-auto mt-32">
      {/* GRID USERFLOW CARD */}
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3  gap-0 md:px-4 sm:px-4">
        <div className="lg:translate-x-10">
          <div className="flex items-center mb-8">
            <a href="" className="ac-create-icon m-auto">
              <i class="fa-solid fa-user-plus text-3xl"></i>
            </a>
          </div>
          <h1 className="text-center text-xl">Creat an account</h1>
          <p className="text-center text-sm">
            Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit
            amet consectetu. Agencies to define their new business objectives
            and then create
          </p>
        </div>
        {/* LARGE DEVICE ARROW ICON */}
        <div className="hidden lg:block">
          <div
            style={{ marginTop: "108px" }}
            className="flex items-center justify-center lg:translate-x-6"
          >
            <i class="fa-solid fa-arrow-right-long rotted-up"></i>
          </div>
        </div>
        {/* MEDIUM DEVICE ARROW ICON */}
        <div className="lg:hidden md:block hidden ">
          <div
            style={{ marginTop: "108px" }}
            className="flex items-center justify-center "
          >
            <i class="fa-solid fa-arrow-right-long rotted-solid"></i>
          </div>
        </div>
        {/* SMALL DEVICE ARROW ICON */}
        <div className="lg:hidden md:hidden ">
          <div className="flex items-center justify-center my-10">
            <i class="fa-solid fa-arrow-down rotted-solid"></i>
          </div>
        </div>
        {/* USERFLOW CARD */}
        <div className="lg:-translate-y-16">
          <div className="flex items-center mb-8">
            <a href="" className="ac-create-icon m-auto">
              <i class="fa-solid fa-credit-card text-3xl"></i>
            </a>
          </div>
          <h1 className="text-center text-xl">Add Money</h1>
          <p className="text-center text-sm">
            Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit
            amet consectetu. Agencies to define their new business objectives
            and then create
          </p>
        </div>
        {/* SMALL DEVICE ARROW ICON */}
        <div className="lg:hidden md:hidden ">
          <div className="flex items-center justify-center my-10">
            <i class="fa-solid fa-arrow-down rotted-solid"></i>
          </div>
        </div>
        {/* LARGE DEVICE ARROW ICON */}
        <div className="hidden lg:block">
          <div
            style={{ marginTop: "108px" }}
            className="flex items-center justify-center lg:-translate-x-"
          >
            <i class="fa-solid fa-arrow-right-long rotted-down"></i>
          </div>
        </div>
        {/* USERFLOW CARD */}
        <div className="lg:-translate-x-10">
          <div className="flex items-center mb-8">
            <a href="" className="ac-create-icon m-auto">
              <i class="fa-solid fa-earth-americas text-3xl"></i>
            </a>
          </div>
          <h1 className="text-center text-xl">Start Transaction</h1>
          <p className="text-center text-sm">
            Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit
            amet consectetu. Agencies to define their new business objectives
            and then create
          </p>
        </div>
        {/* MIDDLE DEVICE ARROW ICON */}
        <div className="lg:hidden md:block hidden">
          <div
            style={{ marginTop: "108px" }}
            className="flex items-center justify-center lg:-translate-x-"
          >
            <i class="fa-solid fa-arrow-left-long rotted-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFlow;
