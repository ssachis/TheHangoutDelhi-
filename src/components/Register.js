import React from 'react';
import Navbar from './Navbar'; // Import Navbar component
 // Make sure styles are properly imported

const RegistrationForm = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdwYcKmZY-QIPJ2jB4rVDjp2CiHza2TJx7-ti-3gB1Z0Ljt2Q/formResponse"
          method="POST"
          target="_self"
          id="bootstrapForm"
        >
          <fieldset>
            <legend>
              <h3 style={{ color: 'purple' }}>EVENT REGISTRATION</h3>
            </legend>
          </fieldset>

          <fieldset>
            <legend>Name</legend>
            <div className="form-group">
              <input id="name" type="text" name="entry.631124678" required />
            </div>
          </fieldset>

          <fieldset>
            <legend>Age</legend>
            <div className="form-group">
              <input id="age" type="number" name="entry.1978752102" required />
            </div>
          </fieldset>

          <fieldset>
            <legend>Name of the Event</legend>
            <div className="form-group">
              <input id="event-name" type="text" name="entry.606342220" required />
            </div>
          </fieldset>

          <fieldset>
            <legend>Registering for more than 1?</legend>
            <div className="form-group">
              <div className="radio">
                <input type="radio" id="registering-yes" name="entry.460381570" value="Yes" />
                <label htmlFor="registering-yes">Yes</label>
              </div>
              <div className="radio">
                <input type="radio" id="registering-no" name="entry.460381570" value="No" />
                <label htmlFor="registering-no">No</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>If yes, how many?</legend>
            <div className="form-group">
              <input id="quantity" type="number" name="entry.1610057695" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Contact Number</legend>
            <div className="form-group">
              <input id="contact-number" type="tel" name="entry.1473126885" required />
            </div>
          </fieldset>

          <fieldset>
            <legend>Email Id</legend>
            <div className="form-group">
              <input id="email" type="email" name="entry.867210876" required />
            </div>
          </fieldset>

          <fieldset>
            <legend>Your Instagram handle if you want us to tag you</legend>
            <div className="form-group">
              <input id="instagram-handle" type="text" name="entry.268922475" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Have you completed payment?</legend>
            <div className="form-group">
              <div className="radio">
                <input type="radio" id="payment-yes" name="entry.250740898" value="Yes" />
                <label htmlFor="payment-yes">Yes</label>
              </div>
              <div className="radio">
                <input type="radio" id="payment-no" name="entry.250740898" value="No" />
                <label htmlFor="payment-no">No</label>
              </div>
            </div>
          </fieldset>

          {/* Hidden fields for Google Form */}
          <input type="hidden" name="fvv" value="1" />
          <input type="hidden" name="fbzx" value="2708958566002887431" />
          <input type="hidden" name="pageHistory" value="0" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
