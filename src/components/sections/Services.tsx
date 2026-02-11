import { useState } from 'react';
import Modal from '@components/common/Modal';

interface Service {
  title: string;
  description: string;
  type: string;
}

const services: Service[] = [
  {
    title: 'Web Integration',
    description: 'I can convert different types of files(PSD, FIGMA, ADOBE XD, SKETCH) into code using HTML, CSS, and JavaScript.',
    type: 'integration-web',
  },
  {
    title: 'UI Design',
    description: 'I offer UI design services to improve user interface of your website by providing a pleasant and intuitive user experience.',
    type: 'ui-design',
  },
  {
    title: 'Logo Design',
    description: 'By understanding your needs, we can work together to create a logo that showcases the values behind your company.',
    type: 'logo-design',
  },
];

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenModal = (serviceType: string) => {
    setSelectedService(serviceType);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="services" id="services">
        <div className="services__wrapper">
          <div className="services__title">Services</div>
          <div className="services__content">
            <div className="services__description">
              <span className="services__description__icons">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </span>
              <h3 className="services__description__title" data-animation="title">
                Services
              </h3>
              <p className="services__description__text" data-animation="paragraph">
                I offer different types of services depending on my clients' needs,
                ranging from web design services (UI design) to coding (frontend and some backend).
              </p>
              <picture className="services__description__picture">
                <div className="services__description__picture__image">
                  <svg viewBox="0 0 100 100" width="100" height="100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </picture>
            </div>

            <div className="services__lists">
              {services.map((service, index) => (
                <div key={index} className="services__list__items">
                  <div className="services__list__items__content">
                    <span className="services__list__items__icon">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </span>
                    <div className="services__list__items__desc">
                      <h4 className="services__list__items__title" data-animation="title">
                        {service.title}
                      </h4>
                      <p className="services__list__items__text" data-animation="paragraph">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <button
                    className="button button__primary button-bg services__cta"
                    onClick={() => handleOpenModal(service.type)}
                  >
                    <span>Commander</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType={selectedService}
      />
    </>
  );
}

export default Services;
