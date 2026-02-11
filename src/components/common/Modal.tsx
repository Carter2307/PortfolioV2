import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}

function Modal({ isOpen, onClose, serviceType }: ModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no actual submission
    console.log('Form submitted:', { ...formData, serviceType });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content">
          <div className="modal__content__wrapper">
            <div className="modal__content__description">
              <h3 className="modal__title">
                You have an idea or any project? Let's do it together
              </h3>
              <p className="modal__text">
                I will be happy to work with you but I need some information about you
                and your project to quickly connect with you and understand your needs.
              </p>
            </div>
            <form className="modal__form" onSubmit={handleSubmit}>
              <div className="modal__form__wrapper">
                <input type="hidden" name="serviceType" value={serviceType} />
                <div className="modal__collumn">
                  <div className="form__group">
                    <label className="form__group__label" htmlFor="projectUserName">
                      Name
                    </label>
                    <input
                      className="form__group__input"
                      id="projectUserName"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label className="form__group__label" htmlFor="projectUserMail">
                      Email
                    </label>
                    <input
                      className="form__group__input"
                      id="projectUserMail"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form__group">
                  <label className="form__group__label" htmlFor="projectDescription">
                    Describe your project
                  </label>
                  <textarea
                    className="form__group__input"
                    id="projectDescription"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="button button__primary button-bg modal__submit__button">
                  <span>Send Your Project</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="modal__button">
            <button className="button-icon" onClick={onClose}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
