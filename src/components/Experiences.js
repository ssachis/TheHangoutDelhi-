import React from 'react';

const Experiences = () => (
  <section id="experiences" className="py-5">
    <div className="container">
      <h2 className="section-title text-center mb-4">Our Experiances</h2>
      <div className="row">
        {[
          {
            title: 'Live Music Nights',
            text: 'Enjoy live performances from local bands and artists every weekend!',
            button: 'Join Now'
          },
          {
            title: 'Game Night',
            text: 'Gather your friends for an evening full of exciting games and challenges.',
            button: 'Sign Up'
          },
          {
            title: 'Open Mic Nights',
            text: 'Showcase your talent or enjoy local performances at our open mic sessions.',
            button: 'Register Now'
          }
        ].map((exp, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card shadow-sm">
              <img
                src="https://thumbs.dreamstime.com/b/illustration-workshop-icon-isolated-over-white-background-60974892.jpg"
                className="card-img-top"
                alt={exp.title}
              />
              <div className="card-body">
                <h5 className="card-title">{exp.title}</h5>
                <p className="card-text">{exp.text}</p>
                <a href="#events" className="btn btn-warning">{exp.button}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experiences;
