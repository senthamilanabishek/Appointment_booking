import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BASE_URL,token } from "../../config";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading,setLoading]=useState(false);

  const {id}=useParams();

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    // Later, add API call here to submit the feedback
    console.log("Submitted rating:", rating);
    console.log("Submitted review:", reviewText);
    // Reset the form after submission
    setLoading(true);
    try {
      if(!rating || !reviewText)
      {
        setLoading(false);
        return toast.error('Rating & Review Fields are required');
      }

      const res=await fetch(`${BASE_URL}/doctors/${id}/reviews`,{
        method:'post',
        headers:{
          'Content-Type':'application/json',
          Authorization:`Bearer ${token}`
        },
        body:JSON.stringify({rating,reviewText})
      })

      const result=await res.json();

      if(!res.ok)
      {
        throw new Error(result.message);
      }

      setLoading(false);
      toast.success(result.message);

    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((hover && rating) || hover) ? "text-yellow-500" : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={()=> {setHover(0); setRating(0)}}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>


      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions*
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline-primaryColor w-full px-3 py-3 rounded-md"
          rows="5"
          placeholder="Write your message"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" onClick={handleSubmitReview}  className="btn mt-4">
        { loading ? <HashLoader size={25} color="#fff"/>:'Submit Feedback'}
      </button>
    </form>
  );
};

export default FeedbackForm;
