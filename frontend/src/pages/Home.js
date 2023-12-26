import React from "react";
import {Link} from "react-router-dom";

function Home() {
  return (
    <>
      <div className="min-h-screen">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Wellness at Your Fingertips: Book Your Doctor Online Today!
              </h1>
              <p className="mb-8 text-lg">
                Embrace a new era of healthcare with our instant online doctor
                appointments. Your health is important, and so is your time.
                With our user-friendly platform, you can effortlessly book your
                next doctor's visit online.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="final_photo.png"
              />
            </div>
          </div>
        </section>

        <h2 className="font-medium text-3xl text-center -mt-10 text-gray-900 -mb-14">
          Steps to be followed:
        </h2>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex relative sm:items-center md:w-2/3 mx-auto ">
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 py-6 px-5">
                <div className="flex-shrink-0 w-24 h-24 bg-green-500 text-white rounded-full inline-flex items-center text-3xl justify-center">
                  1
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Select Doctor / Clinic
                  </h2>
                  <p className="leading-relaxed">
                    From a list select the doctor for which you want an appointment.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative pt-9 sm:items-center md:w-2/3 mx-auto">
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 py-6 px-5">
                <div className="flex-shrink-0 w-24 h-24 bg-green-500 text-white rounded-full inline-flex items-center text-3xl justify-center">
                  2
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Select Slot
                  </h2>
                  <p className="leading-relaxed">
                    As per the available slots select a slot which is convenient to you.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative pt-9 sm:items-center md:w-2/3 mx-auto">
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 py-6 px-5">
                <div className="flex-shrink-0 w-24 h-24 bg-green-500 text-white rounded-full inline-flex items-center text-3xl justify-center">
                  3
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Confirm Booking
                  </h2>
                  <p className="leading-relaxed">
                    Confirm your booking by providing the mobile number and OTP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center">
            <Link to="/appoint" className="hover:no-underline hover:bg-green-700 bg-green-600 cursor-pointer rounded-md text-white font-medium px-4 py-3 -mt-9">Book Appointment</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
