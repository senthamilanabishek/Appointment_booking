import React from 'react';
import Slider from 'react-slick';
import { HiStar } from 'react-icons/hi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import patientAvatar from '../../assets/images/patient-avatar.png';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards for a full screen
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "John Doe",
      feedback: "The doctors were so professional and supportive. Best healthcare experience!",
      image: patientAvatar,
      rating: 5
    },
    {
      name: "Jane Smith",
      feedback: "The appointment booking was seamless, and I could consult remotely!",
      image: patientAvatar,
      rating: 4
    },
    {
      name: "Sam Wilson",
      feedback: "I love the convenience of video consultations. Highly recommended!",
      image: patientAvatar,
      rating: 5
    },
    {
      name: "Emily Johnson",
      feedback: "Fantastic service! The staff was caring and attentive throughout.",
      image: patientAvatar,
      rating: 5
    },
    {
      name: "Michael Brown",
      feedback: "Affordable and reliable healthcare services. Very impressed!",
      image: patientAvatar,
      rating: 4
    }
  ];

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '5%',
    // flexShrink: 0,
  };

  const contentStyle = {
    textAlign: 'left',
  };

  const feedbackStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
  };

  const starsStyle = {
    display: 'flex',
    gap: '2px',
    marginBottom: '10px',
  };

  const sliderStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <HiStar
        key={index}
        style={{
          color: index < rating ? '#FFD700' : '#e0e0e0', // Yellow for filled stars, light gray for unfilled
          width: '18px',
          height: '18px',
        }}
      />
    ));
  };

  return (
    <section style={sliderStyle}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={cardStyle}>
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s picture`}
              style={imageStyle}
            />
            <div style={contentStyle}>
            <h4 style={nameStyle}>{testimonial.name}</h4>
              <div style={starsStyle}>{renderStars(testimonial.rating)}</div>
              <p style={feedbackStyle}>"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSlider;
