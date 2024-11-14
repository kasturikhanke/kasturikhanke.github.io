import React, { useEffect } from 'react';

const ImpactSection = ({ impactItems }) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Add a containing div that limits the sticky behavior */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Sticky */}
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <div className="max-w-md">
                <h2 className="text-4xl font-medium mb-4 text-gray-800">Giving back</h2>
                <p className="text-gray-600 text-lg">
                  I'm dedicated to giving back to the design community by inspiring, educating, and mentoring the next generation of designers.
                </p>
              </div>
            </div>

            {/* Right Column - Scrolling Items */}
            <div className="space-y-16">
              {impactItems.map((item, index) => (
                <div
                  key={index}
                  className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-300 bg-gray-50 p-8 rounded-2xl hover:shadow-md"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Add a div that marks the end of the sticky behavior */}
              <div className="lg:relative">
                <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 h-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;