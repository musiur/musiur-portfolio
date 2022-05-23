const Contact = () => {
  return (
    <div className="contact__container">
      <div>
        <h3>Contact</h3>
        <form className="cc__form">
          <div className="mb-6">
            <label htmlFor="email" className="label__style">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="input__style"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="fullname" className="label__style">
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              className="input__style"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="label__style">
              Your Message
            </label>
            <textarea
              type="text"
              id="message"
              className="input__style h-28"
              placeholder="Write your message here"
              required
            />
          </div>

          <button type="submit" className="btn__primary mx-auto">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
