import React from "react";
import {
  Phone,
  ArrowRight,
  Ruler,
  Clock,
  CheckCircle2,
  Shield,
  Building2,
  Home,
} from "lucide-react";
import Image from "next/image";

const CaulkingLandingPage = () => {
  const handleEmergencyCall = () => {
    window.location.href = "tel:+1(778) 650-7803";
  };

  const serviceFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Vancouver Experts",
      description: "Your local caulking and sealant specialists",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Premium Solutions",
      description: "Industry-leading sealants and techniques",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Response",
      description: "Quick service when you need it",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Results",
      description: "Professional service guaranteed",
    },
  ];

  const serviceTypes = [
    {
      title: "Waterproofing",
      points: [
        "Bathroom sealing",
        "Kitchen waterproofing",
        "Window sealing",
        "Door frame protection",
      ],
    },
    {
      title: "Commercial Services",
      points: [
        "Building envelope sealing",
        "Joint sealing",
        "Industrial solutions",
        "Multi-unit projects",
      ],
    },
    {
      title: "Expert Finishing",
      points: [
        "Perfect color matching",
        "Clean applications",
        "Seamless finish",
        "Premium materials",
      ],
    },
    {
      title: "Additional Services",
      points: [
        "Weather stripping",
        "Expansion joint sealing",
        "Crack repair",
        "Maintenance services",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-gray-100 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Vancouver&apos;s Premier Caulking Experts
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                Professional caulking.
                <span className="block text-gray-900">Superior sealing.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vancouver&apos;s trusted caulking and sealant specialists for
                homes and businesses. Expert waterproofing solutions.
              </p>

              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/2.jpg"
                  alt="Vancouver Professional Caulking"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Premium Caulking Services
            </h2>
            <p className="text-lg text-gray-600">
              Vancouver&apos;s most trusted sealing specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-gray-900 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive caulking solutions for Vancouver properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {type.title}
                </h3>
                <ul className="space-y-3">
                  {type.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-900" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Proven Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our certified team delivers comprehensive caulking solutions,
                protecting Vancouver properties with precision and expertise.
              </p>
              <ul className="space-y-4">
                {[
                  "Professional assessment",
                  "Premium sealants",
                  "Expert application",
                  "Satisfaction guaranteed",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/photos/homepage/1.jpg"
                alt="Vancouver Caulking Excellence"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
                priority
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our caulking services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of caulking services do you provide?",
                answer:
                  "We offer comprehensive caulking services including bathroom waterproofing, window sealing, door frame protection, and commercial building envelope solutions.",
              },
              {
                question:
                  "Do you handle both residential and commercial projects?",
                answer:
                  "Yes, we specialize in both residential and commercial caulking services. From home bathroom sealing to large-scale commercial projects, our team has the expertise to handle any project size.",
              },
              {
                question: "What kind of materials do you use?",
                answer:
                  "We use only premium-grade sealants and caulking materials that are specifically chosen for each application to ensure the best results and longevity.",
              },
              {
                question: "How long does caulking typically last?",
                answer:
                  "With proper application and maintenance, our professional caulking can last 5-10 years depending on the location and exposure to elements. We provide detailed maintenance advice for maximum longevity.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Vancouver&apos;s Trusted Caulking Experts
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Professional caulking services across Vancouver
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaulkingLandingPage;
