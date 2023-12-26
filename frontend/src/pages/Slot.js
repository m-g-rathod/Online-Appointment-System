import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Slot() {
  const dates_array = [];
  const arr = [];
  const days_arr = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  dates_array[0] = "Today";
  dates_array[1] = "Tomorrow";
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-based, so add 1
  const d = today.getDate();
  const date = year + "-" + month + "-" + d;

  const dummy = new Date();
  for (let i = 2; i < 15; i++) {
    dummy.setDate(today.getDate() + i);
    var d_day = days_arr[dummy.getDay()];
    const options = { day: "2-digit", month: "short" };
    const formattedDate = dummy.toLocaleDateString("en-US", options);

    dates_array[i] = d_day + ', ' + formattedDate;
  }

  const [selectedDate, setSelectedDate] = useState(date);
  const [slotsData, setSlotsData] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [consult_type, setConsultType] = useState("on-site");
  const [currentDateIndices, setCurrentDateIndices] = useState([0, 1, 2]);

  const { id } = useParams();

  const params = {
    doctor_id: id,
    date: selectedDate,
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const queryString = `params=${encodeURIComponent(JSON.stringify(params))}`;
    fetch(`http://127.0.0.1:5000/api/getSlots?${queryString}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch");
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setDoctor(res.doctor[0]);
        setSlotsData(res.slots);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDate]);

  useEffect(()=>{
    for(let i = 0; i < currentDateIndices.length; i++)
    {
      arr[i] = dates_array[currentDateIndices[i]];
    }

    console.log(arr);
  }, [currentDateIndices]);

  return (
    <>
      <div className="min-h-screen px-16 mt-14">
        {doctor && (
          <div className="flex items-center pb-5">
            <img
              src={process.env.PUBLIC_URL + "/doctor.png"}
              className="sm:w-24 sm:h-24 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-400 text-indigo-500 flex-shrink-0"
            />
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Dr. {doctor.name}
              </h2>
              <p className="text-gray-700 font-normal text-base">
                {doctor.degree}
              </p>
              <div className="flex items-center mt-4 gap-3">
                <img
                  src={process.env.PUBLIC_URL + "/place.png"}
                  className="w-7 h-7 rounded-full"
                />
                <p className="text-gray-700 font-normal text-base">
                  {doctor.clinic_addr}
                </p>
              </div>
            </div>
          </div>
        )}
        <hr />

        <div className="flex justify-between mt-9">
          <div className="flex flex-col">
            <h1 className="text-lg font-medium">Book Appointment</h1>
            <p className="text-lg font-normal text-gray-500">
              Select Consultation Type
            </p>
            <p className="text-lg font-medium text-green-600">
              
              Fees approx Rs.500
            </p>
          </div>

          <div className="flex gap-4">
            <button
              className={` ${
                consult_type === "on-site"
                  ? "bg-green-400 cursor-pointer rounded flex flex-col px-5 py-3 items-center justify-center"
                  : " cursor-pointer rounded flex flex-col px-5 py-3 items-center justify-center border-2"
              }`}
              onClick={()=>{setConsultType('on-site')}}
            >
              <img src={process.env.PUBLIC_URL + "/health-clinic.png"} className="w-12 h-12"/>
              <p className="mt-1 text-base font-normal">In-Clinic</p>
            </button>
            <button
              className={` ${
                consult_type === "audio"
                  ? "bg-green-400 cursor-pointer rounded flex flex-col px-5 py-3 items-center justify-center"
                  : " cursor-pointer rounded flex flex-col px-5 py-3   items-center justify-center border-2"
              }`}
              onClick={()=>{setConsultType('audio')}}
            >
              <img src={process.env.PUBLIC_URL + "/phone-call.png"} className="w-12 h-12"/>
              <p className="mt-1 text-base font-normal">Audio</p>
            </button>
            <button
              className={` ${
                consult_type === "video"
                  ? "bg-green-400 cursor-pointer rounded flex flex-col px-5 py-3 items-center justify-center"
                  : " cursor-pointer rounded flex flex-col px-5 py-3 items-center justify-center border-2"
              }`}
              onClick={()=>{setConsultType('video')}}
            >
              <img src={process.env.PUBLIC_URL + "/zoom.png"} className="w-12 h-12"/>
              <p className="mt-1 text-base font-normal">Video</p>
            </button>
          </div>
        </div>
          
        <div className="flex gap-4 mt-4">
          {arr.length > 0 && arr.map((date, index) => (
            <button key={index} className="flex-shrink-0">
              {/* You can customize the styling for each date element */}
              <p className="text-base font-normal">{date}</p>
            </button>
          ))}
        </div>
        
      </div>
    </>
  );
}

export default Slot;
