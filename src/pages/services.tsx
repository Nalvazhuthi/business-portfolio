import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern web applications with React/Vue/Svelte',
    icon: '🌐'
  },
  {
    title: 'UI/UX Design',
    description: 'Figma to code implementation with animations',
    icon: '🎨'
  },
  {
    title: 'API Integration',
    description: 'Third-party services and payment gateways',
    icon: '🔌'
  },
  {
    title: 'Performance Optimization',
    description: 'Web Vitals improvement and lazy loading',
    icon: '⚡'
  },
  {
    title: 'SEO Implementation',
    description: 'Schema markup and content optimization',
    icon: '🔍'
  },
  {
    title: 'CMS Development',
    description: 'Wordpress/Shopify customization',
    icon: '📰'
  }
];

const Services = () => {
  return (
    <div className="services section" id='services'>
      <h1 className="section-title">What I Offer</h1>
      <div className="cards-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-container">
              <span className="service-icon">{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;