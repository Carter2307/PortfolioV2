import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no actual submission
    console.log('Contact form submitted:', formData);
  };

  return (
    <section className="connect">
      <div className="connect__wrapper">
        <div className="connect__title">
          <h4 className="connect__title__text" data-animation="title">
            Get in
          </h4>
          <div className="connect__title__icon">
            <span className="connect__title__icon__img" />
            <h4 className="connect__title__text" data-animation="title">
              touch
            </h4>
          </div>
        </div>
        <form className="connect__form" onSubmit={handleSubmit}>
          <div className="connect__form__wrapper">
            <div className="form__group">
              <label className="form__group__label" htmlFor="name">
                Name
              </label>
              <input
                className="form__group__input input__name"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span className="input__alert-name input__alert" />
            </div>
            <div className="form__group">
              <label className="form__group__label" htmlFor="mail">
                Email
              </label>
              <input
                className="form__group__input input__email"
                id="mail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="input__alert-email input__alert" />
            </div>
          </div>

          <div className="form__group">
            <label className="form__group__label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form__group__input"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <span className="input__alert-message input__alert" />
          </div>
          <button type="submit" className="button button__primary button-bg">
            <span>Let's connect</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
