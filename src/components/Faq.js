import React from 'react';

const FAQ = () => (
  <section id="faq" className="py-5" style={{ backgroundColor: '#fff' }}>
    <div className="container">
      <h2 className="section-title text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {[{
          id: 1,
          question: 'What type of events do you host?',
          answer: 'We host a variety of events ranging from live music nights, game nights, open mic sessions, art workshops, and more!'
        }, {
          id: 2,
          question: 'How can I participate in your events?',
          answer: 'You can register for our events directly on our website or contact us directly for more information.'
        }, {
          id: 3,
          question: 'Can I book the venue for private events?',
          answer: 'Yes, our venue is available for private bookings. Please reach out to us for details and availability.'
        }].map(item => (
          <div className="accordion-item" key={item.id} style={{ border: 'none', borderBottom: '1px solid #ddd' }}>
            <h2 className="accordion-header" id={`faqHeading${item.id}`}>
              <button className={`accordion-button ${item.id !== 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faqCollapse${item.id}`} aria-expanded={item.id === 1} aria-controls={`faqCollapse${item.id}`}>
                {item.question}
              </button>
            </h2>
            <div id={`faqCollapse${item.id}`} className={`accordion-collapse collapse${item.id === 1 ? ' show' : ''}`} aria-labelledby={`faqHeading${item.id}`} data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
