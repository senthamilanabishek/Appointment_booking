import React, { useState } from "react";
import doctorImg from "/src/assets/images/doctor-img02.png";
import starIcon from "/src/assets/images/star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../config";
import usefetchData from "../../hooks/usefetchData";
import Loader from '../../components/Loader/Loading';
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";


const DoctorDetails = () => {
  const [activeTab, setActiveTab] = useState("about");
  const {id}=useParams();
  const {data:doctor,loading,error}=usefetchData(`${BASE_URL}/doctors/${id}`);
  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo
  }=doctor
  console.log(doctor);
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">

      {loading && <Loader/>}
      {error && <Error/>}
        {!loading && !error && (<div className="grid md:grid-cols-3 gap-[50px]">
          {/* Doctor's Profile Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={photo} alt="Doctor" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-blue-500 py-1 px-6 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] font-semibold rounded">
                  {specialization}
                </span>
                <h3 className="text-gray-800 text-[22px] font-bold mt-3">
                  {name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[14px] lg:text-[16px] font-semibold text-gray-800">
                    <img src={starIcon} alt="Star Icon" className="w-4 h-4" />{averageRating}
                  </span>
                  <span className="text-[14px] lg:text-[16px] text-gray-600">
                    ({totalRating})
                  </span>
                </div>
                <p className="text-gray-700 text-[14px] md:text-[15px] max-w-[390px]">
                  {bio}
                </p>
              </div>
            </div>

            <div className="mt-12 border-b border-gray-300 pb-2">
              <button
                className={`py-2 px-5 mr-5 text-[16px] font-semibold ${
                  activeTab === "about"
                    ? "text-gray-800 border-b-2 border-blue-500"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`py-2 px-5 text-[16px] font-semibold ${
                  activeTab === "feedback"
                    ? "text-gray-800 border-b-2 border-blue-500"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("feedback")}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]"> 
              {activeTab === "about" && <DoctorAbout 
              name={name} 
              about={about} 
              qualifications={qualifications} 
              experiences={experiences} />}
              {activeTab === "feedback" && <Feedback reviews={reviews} totalRating={totalRating}/>}
              {!["about", "feedback"].includes(activeTab) && <div>No content available.</div>}
            </div>
          </div>

          <div>
            <SidePanel 
            doctorId={doctor._id} 
            ticketPrice={ticketPrice} 
            timeSlots={timeSlots}/>
          </div>
        </div>)}
      </div>
    </section>
  );
};

export default DoctorDetails;
