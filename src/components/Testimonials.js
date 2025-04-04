import React from 'react';

const Testimonials = () => {
  const feedback = [
    {
      name: 'Aditya',
      quote: '"This is the best hangout ever! I felt so welcomed and inspired."'
    },
    {
      name: 'Jat',
      quote: '"A perfect blend of art, culture, and great company. Highly recommended."'
    },
    {
      name: 'Samarth',
      quote: '"The experiences are unique and the vibe is unmatched. Love it!"'
    }
  ];

  return (
    <section id="testimonials" className="py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">Our Testimonials</h2>
        <div className="row">
          {feedback.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <img
                    src="https://media.istockphoto.com/id/1196391445/photo/portrait-of-a-happy-young-man-of-asian-ethnic-descent.jpg?s=612x612&w=0&k=20&c=FTBzIOLoMfuenRMcQKkvpkiDg7nD8ZHmjhtYSZvskfE="
                    alt={`Testimonial ${index}`}
                  />
                  <p className="card-text">{item.quote}</p>
                  <h6 className="card-title">- {item.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
