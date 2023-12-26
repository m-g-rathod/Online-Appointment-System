import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Appointment() {
  const [doctorsData, setDoctorsData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://127.0.0.1:5000/api/getDoctors`)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch");
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setDoctorsData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {doctorsData !== null &&
              doctorsData.map((doctor, key) => (
                <div
                  key={key}
                  className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
                >
                  <img
                    src="doctor.png"
                    className="sm:w-24 sm:h-24 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-400 text-indigo-500 flex-shrink-0"
                  />
                  <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                      Dr. {doctor.name}
                    </h2>
                    <p className="text-gray-700 font-normal text-base">
                      {doctor.degree}
                    </p>
                    <div className="flex items-center mt-2 gap-3">
                      <img src="place.png" className="w-7 h-7 rounded-full" />
                      <p className="text-gray-700 font-normal text-base">
                        {doctor.clinic_addr}
                      </p>
                    </div>
                    <p className="leading-relaxed text-base mt-2 mb-4">
                      {doctor.description}
                    </p>
                    <Link
                      className="bg-green-600 hover:bg-green-700 text-white rounded-md px-3 py-2 text-sm font-medium hover:no-underline"
                      to={`/doctor/${doctor.doctor_id}`}
                      aria-current="page"
                    >
                      Book Slot
                    </Link>
                  </div>
                </div>
              ))}

            <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Appointment;
