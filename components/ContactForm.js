import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnqenewb");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form...");
    const result = await handleSubmit(e);

    // Check if the submission was successful
    if (result.ok) {
      console.log("Form submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        message: "",
      });
    } else {
      console.log("Form submission failed:", result.data);
    }
  };

  if (state.succeeded) {
    return (
      <div className="services-container relative flex flex-col items-center text-white-20" id="contact">
        <div className='card'>
          <p>Merci de nous avoir contactés !</p>
        </div>
      </div>
    );
  }
  


  return (
    <div className="services-container relative flex flex-col items-center" id="contact">
      <div className='card'>
        <form onSubmit={handleFormSubmit} action='#' className="media-object max-w-lg mx-auto mt-8 mb-20 bg-opacity-70 backdrop-blur-lg p-8 rounded-md">
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-white block">
                Nom:
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:border-pink-300 rounded-md bg-white bg-opacity-20 backdrop-blur-md"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-white block">
                Téléphone:
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:border-pink-300 rounded-md bg-white bg-opacity-20 backdrop-blur-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-white block">
                Email:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:border-pink-300 rounded-md bg-white bg-opacity-20 backdrop-blur-md"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="company" className="text-white block">
                Société:
              </label>
              <input
                id="company"
                type="text"
                name="company"
                className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:border-pink-300 rounded-md bg-white bg-opacity-20 backdrop-blur-md"
              />
            </div>
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="message" className="text-white block">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border-2 border-gray-300 focus:outline-none focus:border-pink-300 rounded-md bg-white bg-opacity-20 backdrop-blur-md"
              rows={4}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" className="bg-pink-60 text-white font-bold py-2 px-4 rounded" disabled={state.submitting}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;