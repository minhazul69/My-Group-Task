import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./Dashboard1.css";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
// USER TRANSACTION FAKE DATA
const fakeTransaction = [
  {
    _id: 1,
    img: "https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    name: "User Name",
    location: "Location",
    money: 465,
  },
  {
    _id: 2,
    img: "https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    name: "User Name",
    location: "Location",
    money: 345,
  },
  {
    _id: 3,
    img: "https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    name: "User Name",
    location: "Location",
    money: 545,
  },
  {
    _id: 4,
    img: "https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    name: "User Name",
    location: "Location",
    money: 235,
  },
  {
    _id: 5,
    img: "https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    name: "User Name",
    location: "Location",
    money: 955,
  },
  {
    _id: 6,
    img: "https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    name: "User Name",
    location: "Location",
    money: 713,
  },
];
const COLORS = ["#000", "#414CDA", "#23E792", "#FF8042"];
// FAKE SAVINGS DATA
const monthSavings = [
  {
    _id: 1,
    img: "https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    month: "January",
    year: "2022",
    money: 713,
  },
  {
    _id: 2,
    img: "https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    month: "April",
    year: "2022",
    money: 45136,
  },
  {
    _id: 3,
    img: "https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    month: "July",
    year: "2022",
    money: 4548,
  },
];
// FAKE DATA

const data = [
  { name: "January", value: 7541, email: "ahsdf@gmail.com" },
  { name: "April", value: 6574, email: "ahsdf@gmail.com" },
  { name: "July", value: 5465, email: "ahsdf@gmail.com" },
];
// FIND TODAY DATE MONTH YEAR
let dateObj = new Date();
let shortMonth = dateObj.toLocaleString("default", { month: "long" });
let getDate =
  dateObj.getUTCDate() + " " + shortMonth + "," + dateObj.getUTCFullYear();

// WELCOME DASHBOARD SECTION
const Dashboard1 = () => {
  const [balance, setBalance] = useState(0);
  console.log(balance);
  const [user] = useAuthState(auth);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getUserBalances/${user.email}`)
      .then((res) => setBalance(res.data));
  }, [user.email]);
  return (
    <div className="container mx-auto mt-24 lg:mt-28 lg:px-10 py-10">
      {/* START USER INFORMATION AND TRANSACTION */}
      <div className="lg:flex">
        <div>
          <div class="md:mx-10 lg:mx-0 card lg:w-96 shadow-xl bg-primary text-white py-5 rounded card-1-bg">
            <div class="card-body">
              <h1 className="text-left text-4xl font-bold">
                {user?.displayName}
              </h1>
              <h5 class="text-left">{user?.email}</h5>

              <div class="text-left">
                <h4 className="font-bold">Total Balance</h4>
                <h1 className="text-3xl">${balance?.balance}</h1>
              </div>
            </div>
          </div>
          {/* START RESECT TRANSACTION  */}
          <div className="mt-10 text-left md:mx-10 mx-5 lg:mx-0">
            <h3 className="font-bold text-xl border-b border-black pb-1">
              Recent Transaction
            </h3>
            <div className="mt-8">
              <ul>
                {fakeTransaction.slice(0, 4).map((transAction) => (
                  <li
                    className="flex items-center my-4 p-3 rounded-lg shadow-lg"
                    key={transAction._id}
                  >
                    <div class="avatar">
                      <div class="w-16 rounded-full ">
                        <img src={transAction.img} alt="User Image" />
                      </div>
                    </div>
                    <div className="ml-5 flex items-center justify-between w-full">
                      <div>
                        <h3 className="font-bold text-lg">
                          {transAction.name}
                        </h3>
                        <h5>{transAction.location}</h5>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">
                          ${transAction.money}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
                <div className="text-center">
                  <button className="btn btn-primary btn-sm mt-5 p-2">
                    View All Transaction
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* CARD DIVIDER HORIZONTAL */}
        <div class="divider divider-horizontal divide-black px-9 divider-hidden"></div>
        <div className="w-full mt-10 lg:mt-0">
          <div class="card  shadow-xl rounded bg-image py-8 text-white">
            <div class="card-body">
              <h3 className="text-xl">Hi User!</h3>
              <div className="mt-2">
                <h3 className="font-bold text-xl">
                  Have a Good Day With Shohoj Pay
                </h3>
                <h5>Thank You For Staying With Shohoj Pay.</h5>
                <h5>We Are Always Working To Keep Your Account Safe.</h5>
                <button className="btn btn-primary mt-4">Button</button>
              </div>
            </div>
          </div>
          {/* START SAVINGS MONTH */}
          <div className="mt-10 md:flex lg:flex block">
            <div className="lg:w-3/6 md:w-3/6 px-2">
              <h3 className="font-bold text-xl border-b border-black pb-2">
                Recent Month Savings
              </h3>
              <div className="mt-16">
                <ul>
                  {monthSavings.slice(0, 3).map((savings) => (
                    <li
                      className="flex items-center my-4 p-3 rounded-lg shadow-lg"
                      key={savings._id}
                    >
                      <div class="avatar">
                        <div class="w-16 rounded-full ">
                          <img src={savings.img} alt="User Image" />
                        </div>
                      </div>
                      <div className="ml-5 flex items-center justify-between w-full">
                        <div>
                          <h3 className="font-bold text-lg">{savings.month}</h3>
                          <h5>{savings.year}</h5>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">
                            ${savings.money}
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* START STATISTIC */}
            <div className="lg:w-3/6 md:w-3/6 px-2 md:ml-8 lg:mt-0 md:mt-0 mt-10">
              <div className="px-2">
                <h3 class="font-bold text-xl pb-2 border-b border-black">
                  Statistic
                </h3>
                <h5 className="font-bold text-right text-xl">{getDate}</h5>
                <div className="">
                  {/* <h4 className="font-bold text-2xl">Expense</h4> */}
                  <div className=" flex justify-center">
                    <PieChart width={290} height={330}>
                      <Tooltip />
                      <Legend style={{ width: "363px" }} />
                      <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        innerRadius={65}
                        outerRadius={78}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
