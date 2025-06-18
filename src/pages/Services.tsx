
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Complete user interface and experience design solutions from concept to final implementation.",
      features: [
        "User research and persona development",
        "Information architecture and user flows",
        "Wireframing and low-fidelity prototypes",
        "High-fidelity visual design",
        "Interactive prototypes",
        "Design system creation"
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "InVision"],
      price: "Starting from $500"
    },
    {
      title: "Wireframing & Prototyping",
      description: "Detailed wireframes and interactive prototypes to validate ideas before development.",
      features: [
        "Low and high-fidelity wireframes",
        "Interactive clickable prototypes",
        "User journey mapping",
        "Usability testing preparation",
        "Stakeholder presentation materials",
        "Documentation and annotations"
      ],
      tools: ["Figma", "Framer", "Adobe XD"],
      price: "Starting from $300"
    },
    {
      title: "User Research",
      description: "Comprehensive user research to understand your audience and inform design decisions.",
      features: [
        "User interviews and surveys",
        "Competitive analysis",
        "Persona development",
        "User journey mapping",
        "Usability testing",
        "Research insights and recommendations"
      ],
      tools: ["Survey Tools", "Analytics", "Testing Platforms"],
      price: "Starting from $400"
    },
    {
      title: "Web Design & Development",
      description: "Responsive web design and front-end development using modern technologies.",
      features: [
        "Responsive web design",
        "HTML, CSS, JavaScript development",
        "Cross-browser compatibility",
        "Performance optimization",
        "SEO-friendly markup",
        "Content management integration"
      ],
      tools: ["HTML", "CSS", "JavaScript", "React", "Figma"],
      price: "Starting from $800"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, target audience, and project requirements through detailed consultation."
    },
    {
      step: "02",
      title: "Research",
      description: "Conducting user research, competitive analysis, and gathering insights to inform the design strategy."
    },
    {
      step: "03",
      title: "Design",
      description: "Creating wireframes, prototypes, and high-fidelity designs based on research findings."
    },
    {
      step: "04",
      title: "Testing",
      description: "Validating designs through user testing and iterating based on feedback and insights."
    },
    {
      step: "05",
      title: "Delivery",
      description: "Providing final designs, documentation, and support for successful implementation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive UI/UX design services to help bring your digital products to life
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                      <Button asChild className="bg-purple-600 hover:bg-purple-700">
                        <Link to="/contact">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">My Design Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A structured approach to ensure every project delivers exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let's discuss how I can help bring your vision to life through thoughtful design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/contact">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              <Link to="/portfolio">
                View My Work
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
