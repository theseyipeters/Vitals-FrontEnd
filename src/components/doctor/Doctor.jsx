import React, { useState } from "react";
import { ReactPropTypes, defa } from "react";
import "../doctor/doctor.css";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";

function Doctor({ head }) {
    const [data, setData] = useState([
        { id: 1, status: "total doctors", number: 100},
        { id: 1, status: "total doctors", number: 100},
        { id: 1, status: "total doctors", number: 100},
    ]);

    const [data1, setData1] = useState([
        {
            id: 1,
            name: "Dr Jonathan Amaobi",
            profile: "/profile.png",
            residence: "resident doctor",
            department: "pedetrain",
            email: "yahoboy@gmail.com",
        },
        {
            id: 1,
            name: "Dr Jonathan Amaobi",
            profile: "/profile.png",
            residence: "resident doctor",
            department: "pedetrain",
            email: "yahoboy@gmail.com",
        },
        {
            id: 1,
            name: "Dr Jonathan Amaobi",
            profile: "/profile.png",
            residence: "resident doctor",
            department: "pedetrain",
            email: "yahoboy@gmail.com",
        },
        {
            id: 1,
            name: "Dr Jonathan Amaobi",
            profile: "/profile.png",
            residence: "resident doctor",
            department: "pedetrain",
            email: "yahoboy@gmail.com",
        },
        {
            id: 1,
            name: "Dr Jonathan Amaobi",
            profile: "/profile.png",
            residence: "resident doctor",
            department: "pedetrain",
            email: "yahoboy@gmail.com",
        },
        {
            id: 1,
            name: "Dr Jonathan Amaobi",
            profile: "/profile.png",
            residence: "resident doctor",
            department: "pedetrain",
            email: "yahoboy@gmail.com",
        },
        {
            id: 1,
            name: "Dr Jonathan Amaobi",
            profile: "/profile.png",
            residence: "resident doctor",
            department: "pedetrain",
            email: "yahoboy@gmail.com",
        },
    ]);
    return (
        <div>
           <div className="main-container">
              <section className="sidebar"></section>
              <section className="dashboard-doctor">
                    <section className="frame">
                        <header>
                            <h3>{head}</h3>
                            <div className="for-input">
                               <input type="text" />
                            </div>
                            <div className="adim">
                               <FaUserAlt />
                               <select name="" id="">
                                   <option value="" adim>
                                       adim
                                   </option>
                               </select>
                            </div>
                        </header>
                        <header className="path">dashboard &gt;doctor</header>
                        <section>
                            {data.map((item) => {
                                return (
                                    <div className="card">
                                        <div className="hold">
                                            <div className="writng">
                                                {" "}
                                                <p>
                                                    {item.number} <br />
                                                    {item.status}
                                                </p>
                                            </div>

                                            <div className="icon">
                                                <FaUserPlus size={30} />
                                            </div>
                                        </div>
                                        <div className="view">view more &rarr;</div>
                                    </div>
                                );
                            })}
                        </section>

                        <section className="info">
                            <header>
                                <div className="sort">
                                    <select name="" id="">
                                        <option value="">sort by</option>
                                    </select>
                                </div>
                                <button className="add">Add doctors</button>
                            </header>
                            <div className="doctor-sec">
                                {data1.map((item) => (
                                    <div className="doctor-card">
                                        <img src={item.profile} alt="" className="doc-img" />
                                        <p>{item.residence}</p>
                                        <h2>{item.name}</h2>
                                        <p>{item.department}</p>
                                        <p>{item.email}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </section>
              </section>
           </div>

        </div>
    );
}

export default Doctor;