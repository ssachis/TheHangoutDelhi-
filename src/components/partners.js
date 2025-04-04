import React from 'react';

const Partners = () => (
  <section id="partners" className="bg-light py-5">
    <div className="container text-center">
      <h2 className="section-title mb-4">Our Partners</h2>
      <div className="row">
        {[1, 2, 3].map((id) => (
          <div className="col-lg-4 col-md-6 mb-4" key={id}>
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
              className="img-fluid"
              alt={`Partner ${id}`}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
