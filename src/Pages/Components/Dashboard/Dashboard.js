import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";
import { signOut } from "firebase/auth";
// SERVICE DATA
const someServices = [
  {
    type: "Add",
    icon: "fa-credit-card",
    action: "/services/addMoney",
  },
  {
    type: "Send",
    icon: "fa-paper-plane",
    action: "/services/sendMoney",
  },
  {
    type: "Request",
    icon: "fa-hand-holding-dollar",
    action: "/services/requestMoney",
  },
  {
    type: "More",
    icon: "fa-ellipsis-vertical",
    action: "/services",
  },
];
// FIND TODAY DATE MONTH YEAR
const filterDate = new Date().toLocaleDateString("en-us", {
  year: "numeric",
  month: "short",
});
const getPreviousDate = (number) => {
  const current = new Date();
  current.setMonth(current.getMonth() - number);
  return current.toLocaleString("default", {
    year: "numeric",
    month: "short",
  });
};
const todayDate = new Date().toLocaleDateString();
// WELCOME DASHBOARD SECTION
const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [transactionData, setTransactionData] = useState([]);
  const [monthService, setMonthService] = useState([]);
  const [monthServiceFilter, setMonthServiceFilter] = useState(filterDate);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  // LATEST TRANSACTION
  const latestTransaction = [...transactionData].splice(
    transactionData.length - 4,
    transactionData.length
  );
  // REVERSE TRANSACTION DATA
  const reverseData = [...latestTransaction].reverse();
  const serviceType = (value) =>
    monthService.filter((service) => service.type.includes(value));
  serviceType("Receive Money");
  serviceType("Add Money");
  serviceType("Send Money");
  serviceType("Request Money");

  const totlaReceiveMoney = [
    ...serviceType("Receive Money"),
    ...serviceType("Add Money"),
  ];
  const totalLossMoney = [
    ...serviceType("Send Money"),
    ...serviceType("Request Money"),
  ];
  const reducerCount = (value) => {
    return value.reduce(
      (previousValue, currentValue) =>
        Number(previousValue) + Number(currentValue?.amount),
      0
    );
  };
  const TotalRecive = reducerCount(totlaReceiveMoney);
  const TotalCost = reducerCount(totalLossMoney);
  const totalSavings = reducerCount(serviceType("Save Money"));
  // PAICHART DATA
  const COLORS = ["#066106", "#c30606", "#050566"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const data = [
    {
      name: "Receive",
      value: TotalRecive ? TotalRecive : 1,
      email: user?.email,
    },
    { name: "Cost", value: TotalCost ? TotalCost : 1, email: user?.email },
    {
      name: "Savings",
      value: totalSavings ? totalSavings : 1,
      email: user?.email,
    },
  ];
  useEffect(() => {
    // USER BALANCE AMOUNT GET
    axios
      .get(
        `https://shohoj-pay-server.herokuapp.com/getUserBalances/${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        setBalance(res.data);
      })
      .catch((error) => {
        localStorage.removeItem("accessToken");
        signOut(auth);
        toast.error(error?.message);
        navigate("/");
      });
    // USER TRANSACTION DATA GET
    axios
      .get(
        `https://shohoj-pay-server.herokuapp.com/transactionStatus/${user.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => setTransactionData(res.data))
      .catch((error) => {
        toast.error(error?.message);
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      });
    axios
      .get(`https://shohoj-pay-server.herokuapp.com/getServices`, {
        headers: {
          "content-type": "application/json",
          email: user.email,
          monthServiceFilter,
        },
      })
      .then((res) => setMonthService(res.data));
    if (shareLinkCopied) {
      toast.success("Copied Transaction Information");
    }
  }, [user?.email, shareLinkCopied, navigate, monthServiceFilter]);

  // COPY TEXT FUNCTION
  const onShare = (data) => {
    navigator.clipboard.writeText(`
    Amount: ${data.amount}$
    Email: ${data.email}
    Name: ${data.userName ? data.userName : data.name}
    TRX ID: ${
      data.transactionId ? data.transactionId : "Transaction Id Not Available"
    }
    Date: ${data.fullDate}
    Time: ${data.time}
    Type: ${data.type}
    `);
    setShareLinkCopied(true);
    setTimeout(() => {
      setShareLinkCopied(false);
    }, 2000);
  };
  if (transactionData === 0) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto lg:mt-28 lg:px-10 py-10">
      {/* START USER INFORMATION AND TRANSACTION */}
      <div className="lg:flex">
        {/* USER INFORMATION */}
        <div className="w-full mt-10 lg:mt-0">
          <div className="md:mx-10 lg:mx-0 card  rounded ">
            <div className="card-body py-0">
              <h1
                data-testid="user-name"
                className="text-left text-3xl font-bold mb-3"
              >
                Hi, {user?.displayName}
              </h1>
              <div className="text-left">
                <h4 className="">Total Balance</h4>
                <h1 className="text-6xl font-bold">$ {balance?.balance}</h1>
              </div>
            </div>
          </div>
          {/* SOME SERVICE */}
          <div className="mt-10 px-2">
            <h2 className="border-b-4 border-black w-48 font-bold text-xl">
              Get Service
            </h2>
            <div className="flex align-center justify-between bg-base-200 shadow-lg rounded-md lg:px-16 py-10 my-8 px-3">
              {someServices.map((service, index) => {
                const { type, icon, action } = service;
                return (
                  <div key={index}>
                    <div
                      onClick={() => navigate(action)}
                      className="bg-primary p-6 rounded-full cursor-pointer"
                    >
                      <i className={`fa-solid ${icon} text-3xl text-white`}></i>
                    </div>
                    <p className="mt-2 font-bold text-center">{type}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* START  LAST TRANSACTION*/}
          <div className="mt-10 lg:mt-0">
            {transactionData.length === 0 ? (
              <h2 className="text-2xl font-bold text-red-500 p-14 text-center">
                You Have Not Made Any Transactions Yet
              </h2>
            ) : (
              <div className=" px-2">
                <h3 className="font-bold text-xl border-b-4 border-black pb-2 w-48">
                  Last Transaction
                </h3>
                <ul className="mt-8">
                  {reverseData.slice(0, 4).map((transAction) => (
                    <li
                      className={`flex items-center my-4 p-3 rounded-lg w-full shadow-sm`}
                      key={transAction._id}
                    >
                      <div className="lg:mr-8 w-36">
                        <h5 className="gray text-sm mb-1 md-responsive">
                          {transAction.fullDate === todayDate
                            ? "Today"
                            : transAction.fullDate}
                        </h5>
                        <h6 className="gray text-sm md-responsive">
                          {transAction.time}
                        </h6>
                      </div>
                      <div className="avatar">
                        <div className="w-14 rounded-full md-img-responsive">
                          <img
                            src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                            alt="User Image"
                          />
                        </div>
                      </div>
                      <div className="ml-5 flex items-center justify-between w-full">
                        <div>
                          <h5
                            className={` font-medium text-lg mb-[2px] md-type-responsive
                            `}
                          >
                            {transAction.type}
                          </h5>
                          <h5 className="gray text-sm md-responsive">
                            {transAction?.userName
                              ? transAction.userName
                              : transAction.name}
                          </h5>
                          {transAction.transactionId && (
                            <h6 className="gray md-trx-responsive">
                              {transAction.transactionId}
                            </h6>
                          )}
                          {transAction.type === "Save Money" && (
                            <h6 className="gray md-responsive">
                              {transAction.email}
                            </h6>
                          )}
                        </div>
                        <div className="" onClick={() => onShare(transAction)}>
                          <i className="fa-solid fa-copy cursor-pointer gray"></i>
                        </div>
                        <div>
                          <h3
                            className={`text-2xl font-medium text-right md-amount-responsive ${
                              transAction.type === "Add Money" ||
                              transAction.type === "Receive Money"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {transAction.type === "Add Money" ||
                            transAction.type === "Receive Money"
                              ? "+" + transAction.amount
                              : "-" + transAction.amount}
                            $
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                  <div className="text-center">
                    {transactionData.length >= 1 && (
                      <button
                        onClick={() => navigate("/dashboard/allTransAction")}
                        className="btn btn-primary btn-sm mt-5 p-2"
                      >
                        View All Transaction
                      </button>
                    )}
                  </div>
                </ul>
              </div>
            )}
            {/* START STATISTIC */}
          </div>
        </div>
        <div className="divider divider-horizontal divide-black px-9 divider-hidden"></div>
        <div className="">
          <div className="px-2 w-full">
            <h3 className="font-bold text-xl pb-2 border-b border-black">
              Statistic
            </h3>
            <div>
              <select
                name="option"
                onChange={(e) => setMonthServiceFilter(e.target.value)}
                className="select select-ghost w-full max-w-xs mb-50 text-xl"
              >
                <option defaultValue={filterDate}>{filterDate}</option>
                <option value={getPreviousDate(1)}>{getPreviousDate(1)}</option>
                <option value={getPreviousDate(2)}>{getPreviousDate(2)}</option>
              </select>
            </div>
            <div className=" flex justify-center h-22 ">
              <div className="w-full lg:w-96 h-72">
                <ResponsiveContainer>
                  <PieChart>
                    <Tooltip />
                    <Legend style={{ width: "333px" }} />
                    <Pie
                      dataKey="value"
                      data={data}
                      fill="#8884d8"
                      labelLine={false}
                      label={renderCustomizedLabel}
                    >
                      {" "}
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
