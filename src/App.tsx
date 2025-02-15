import React, { useState } from 'react';
import { Menu, X, Bot, Target, Brain, MessageSquare, BarChart, Users, MapPin, Mail, Phone, FacebookIcon, Twitter, Linkedin, Youtube, ChevronRight, Star, Zap, Shield, ArrowRight } from 'lucide-react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReCaptcha from './components/ReCaptcha';
import TawkToChat from './components/TawkToChat';
import CookieConsent from './components/CookieConsent';
import QuoraIcon from './components/QuoraIcon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

// Move your existing main content to a new component
const MainContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          recaptchaToken
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setEmail('');
        setRecaptchaToken(null);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14123a] via-[#4e557f] to-[#580c3b]">
      <TawkToChat />
      <CookieConsent />
      {/* Header */}
      <header className="fixed w-full backdrop-blur-lg bg-gradient-to-r from-[#14123a]/80 to-[#4e557f]/80 border-b border-white/20 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <img
                src="/images/inbound-logo.png"  // Update this path to match your logo file name
                alt="Inbound"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center w-full">
              <div className="flex space-x-12 justify-center flex-1">
                <a onClick={() => scrollToSection('home')} className="text-white hover:text-white/80 transition cursor-pointer">Home</a>
                <a onClick={() => scrollToSection('about')} className="text-white hover:text-white/80 transition cursor-pointer">About</a>
                <a onClick={() => scrollToSection('features')} className="text-white hover:text-white/80 transition cursor-pointer">Features</a>
                <a onClick={() => scrollToSection('pricing')} className="text-white hover:text-white/80 transition cursor-pointer">Pricing</a>
                <a onClick={() => scrollToSection('contact')} className="text-white hover:text-white/80 transition cursor-pointer">Contact</a>
              </div>
              <button 
                onClick={() => window.location.href = 'https://login.inbound.lk/'} 
                className="px-8 py-2 bg-[#b7cd51] text-[#14123a] rounded-full font-semibold 
                  hover:bg-[#a0404e] hover:text-white transition-all duration-300 
                  transform hover:scale-105 active:scale-95 
                  hover:shadow-lg hover:shadow-[#b7cd51]/20
                  relative overflow-hidden group"
              >
                <span className="relative z-10">Dashboard</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#b7cd51] to-[#a0404e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-lg bg-white/10">
            <div className="px-4 py-4 space-y-4">
              <a onClick={() => scrollToSection('home')} className="block text-white hover:text-white/80 transition cursor-pointer">Home</a>
              <a onClick={() => scrollToSection('about')} className="block text-white hover:text-white/80 transition cursor-pointer">About</a>
              <a onClick={() => scrollToSection('features')} className="block text-white hover:text-white/80 transition cursor-pointer">Features</a>
              <a onClick={() => scrollToSection('contact')} className="block text-white hover:text-white/80 transition cursor-pointer">Contact</a>
              <button 
                onClick={() => window.location.href = 'https://login.inbound.lk/'} 
                className="w-full px-8 py-2 bg-[#b7cd51] text-[#14123a] rounded-full font-semibold 
                  hover:bg-[#a0404e] hover:text-white transition-all duration-300"
              >
                Dashboard
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 1. Hero Section */}
      <section id="home" className="relative bg-gradient-to-b from-[#14123a] to-[#580c3b] text-center py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Tagline Badge with Extra Space */}
          <div className="flex justify-center mt-12">
            <div className="bg-white/10 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium border border-white/20">
              <span className="text-yellow-400">✨</span> Where Marketing Meets Human Connection
            </div>
          </div>

          {/* Heading & Subtext */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 leading-tight">
            We Apply AI to Automate Inbound Promotion for Growth.

          </h1>
          <p className="text-lg text-white/80 mt-4 max-w-3xl mx-auto">
            Insights based on data, customised plans, and perfect execution of campaigns for optimal efficiency and scalability, we use AI to regulate inbound advertising, increasing customer engagement, maximising conversions, and pushing business growth.

          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-[#b7cd51] text-[#14123a] rounded-full font-semibold 
                hover:bg-[#a0404e] hover:text-white transition-all duration-300 
                flex items-center transform hover:scale-105 active:scale-95
                hover:shadow-lg hover:shadow-[#b7cd51]/20
                relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Sign Up Free
                <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#b7cd51] to-[#a0404e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => window.location.href = 'https://login.inbound.lk/'}
              className="px-8 py-4 bg-[#4e557f]/20 text-white rounded-full font-semibold 
                hover:bg-[#4e557f]/40 transition-all duration-300 
                transform hover:scale-105 active:scale-95
                hover:shadow-lg hover:shadow-white/10
                relative overflow-hidden group"
            >
              <span className="relative z-10">Try a Demo</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Hero Image */}
          <div className="mt-12 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=00&h=600"
              alt="AI Marketing Automation"
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* 2. Benefits Section (Why Choose Inbound?) */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Do You Love to Work With Us ?

            </h2>
            <p className="text-white/80 text-lg">
              We provide AI-powered inbound automation for marketing that maximises lead generation, conversions, and interaction with clients for the growth and success of companies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-[#b7cd51]" />,
                title: "AI-Driven Inbound Marketing",
                description: "The goal is to improve lead generation, customer engagement, and conversion rates for businesses, we use AI to automate inbound marketing.",
                highlight: "Real connections"
              },
              {
                icon: <Brain className="w-12 h-12 text-[#b7cd51]" />,
                title: "Intelligent Marketing Automation",
                description: "Our AI-powered platform improves inbound marketing, optimising campaigns, boosting output, and easily encouraging permanent business success.",
                highlight: "Better understanding"
              },
              {
                icon: <Zap className="w-12 h-12 text-[#b7cd51]" />,
                title: "Transforming Marketing",
                description: "Through data-driven strategies, improved engagement, and increased conversions, we use AI to change inbound marketing to achieve business excellence.",
                highlight: "More time for you"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <span className="bg-gradient-to-r from-[#580c3b]/20 to-[#a0404e]/20 text-white px-3 py-1 rounded-full text-sm">
                    {benefit.highlight}
                  </span>
                </div>
                <div className="mb-6 p-3 bg-gradient-to-br from-[#580c3b]/10 to-[#a0404e]/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                <div className="mt-6 flex items-center text-[#b7cd51] group-hover:text-[#a0404e] transition-colors duration-300">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="py-20 px-4 backdrop-blur-lg bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Your Journey With Us
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Let's Meet",
                description: "We'll get to know your business and what makes it special."
              },
              {
                step: "2",
                title: "Learn Together",
                description: "We'll help you understand what your audience really wants."
              },
              {
                step: "3",
                title: "Make It Easy",
                description: "Set up simple workflows that feel natural to your style."
              },
              {
                step: "4",
                title: "Grow Better",
                description: "Watch your relationships and business grow organically."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition">
                  <div className="w-12 h-12 bg-[#b7cd51] rounded-full flex items-center justify-center text-white font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-6 w-12 h-12 text-white/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Tools That Make Life Easier
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Star className="w-12 h-12 text-[#b7cd51]" />,
                title: "Smart Targeting",
                description: "For personalised and successful advertising campaigns, we optimise targeting of audiences."
              },
              {
                icon: <BarChart className="w-12 h-12 text-[#b7cd51]" />,
                title: "Automated Engagement",
                description: "In order to improve lead cultivation and loyalty to the brand, we improve interactions with customers."
              },
              {
                icon: <Zap className="w-12 h-12 text-[#b7cd51]" />,
                title: "Predictive Analytics",
                description: "Improve conversions and accelerate growth of businesses, we automate funnels for sales.."
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-[#b7cd51]" />,
                title: "Always Available",
                description: "Be there for your customers 24/7 with friendly, helpful responses."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing Section */}
      <section id="pricing" className="py-20 px-4 backdrop-blur-lg bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/80 text-center mb-16 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic ",
                price: "$199/month",
                description: "Small businesses or startups",
                features: [
                  "Lead capture tools",
                  "Basic email marketing automation",
                  "AI-powered content suggestions",
                  "Reporting & analytics (basic)",
                  "Access to basic customer segmentation",
                  "5,000 monthly email sends",
                  "Limited integrations (e.g., CRM, email platforms)",
                  "Social Media Scheduling",
                  "Live Chat Support",
                
                ],
                popular: false
              },
              {
                title: "Professional",
                price: "$499/month",
                description: "Medium-sized businesses",
                features: [
                  "All Basic Plan features",
                  "Advanced AI-driven lead scoring",
                  "Automated social media posting",
                  "AI-powered SEO recommendations",
                  "20,000 monthly email sends",
                  "Advanced reporting & insights",
                  "10+ integrations with marketing tools",
                  "Personalized content creation suggestions",
                  "A/B testing for campaigns"
                ],
                popular: true
              },
              {
                title: "Enterprise",
                price: "$500/month",
                description: "Custom Pricing (based on needs)",
                features: [
                  "All Professional Plan features",
                  "Advanced AI-powered customer journey mapping",
                  "AI-driven content optimization for website and blogs",
                  "50,000+ monthly email sends",
                  "Dedicated account manager",
                  "Custom reporting & integrations",
                  "24/7 customer support",
                  "Multi-channel marketing automation (SMS, push notifications, etc.)",
                  "Training & onboarding support for teams"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative backdrop-blur-lg ${plan.popular ? 'bg-gradient-to-b from-[#580c3b]/20 to-[#a0404e]/20 scale-105' : 'bg-white/10'
                  } border ${plan.popular ? 'border-[#b7cd51]/50' : 'border-white/20'
                  } rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#580c3b] to-[#a0404e] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-white/60 ml-2">/month</span>
                  )}
                </div>
                <p className="text-white/80 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-white">
                      <Shield className="w-5 h-5 text-[#b7cd51] mr-2 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full px-8 py-4 rounded-full font-semibold 
                  transition-all duration-300 transform hover:scale-105 active:scale-95
                  hover:shadow-lg ${plan.popular
                    ? 'bg-gradient-to-r from-[#580c3b] to-[#a0404e] text-white hover:opacity-90 hover:shadow-[#a0404e]/20'
                    : 'bg-white/10 text-white hover:bg-white/20 hover:shadow-white/10'
                  }
                  relative overflow-hidden group`}>
                  <span className="relative z-10">Get Started</span>
                  <div className={`absolute inset-0 ${plan.popular
                      ? 'bg-gradient-to-r from-[#a0404e] to-[#580c3b]'
                      : 'bg-white/20'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section (What Our Clients Say) */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            What Our Clients Say
          </h2>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="swiper-container"
          >
            {[
              // Add your testimonials data here, unchanged
              {
                name: "John",
                role: "Programmer",
                company: "TechCorp",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200",
                quote: "Our lead generation efforts were revolutionised after we implemented AI-driven inbound marketing automation. The number of leads that were qualified increased substantially, freeing us up to concentrate on conversion tactics while AI took care of the tedious work. It is vital for every modern company hoping to grow effectively."
              },
              {
                name: "Roy",
                role: "Developer",
                company: "GrowthLabs",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
                quote: "Inbound marketing solutions driven by AI have totally altered how we talk to our clients. Our audience has remained interested and returning because of automated, tailored content recommendations. It's a crucial tool for preserving lasting ties in the tough market of today."
              },
              {
                name: "Soya",
                role: "IT Officer",
                company: "ScaleUp Inc",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200",
                quote: "Improved Conversion Rates Through Individualisation We are able to modify content for every audience segment thanks to the AI technology underpinning our inbound marketing operations. Higher conversion rates and a larger return on investment have come about from this degree of personalisation."
              },
              {
                name: "Rosey",
                role: "Software Engineer",
                company: "StartupX",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
                quote: "For our company, using AI-powered inbound marketing has changed everything. It seamlessly offers personalised content, maximises interaction, and automates lead generation. Conversions and efficiency have significantly increased, allowing our staff to concentrate on strategy. That's why this AI-powered strategy is essential for all businesses looking for growth."
              },
              {
                name: "Mary",
                role: "IT Specialist",
                company: "NextGen Solutions",
                image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=200&h=200",
                quote: "Our marketing approach was completely changed by AI automation for inbound promotion. It  has improved ROI, improved targeting precision, and accelerated  customer engagements. We've reduced labour costs while growing more quickly through real-time data and AI-driven insight. Any company hoping for exponential and long-lasting expansion must have this technology."
              }
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-6"
                  />
                  <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-white/60">{testimonial.role}</p>
                    <p className="text-white/60">{testimonial.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section className="py-20 px-4 backdrop-blur-lg bg-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How is AI personalisation set up?",
                    answer: "In order to develop highly customised marketing campaigns that appeal to every audience category, our AI examines engagement data and patterns of customer behaviour."
                  },
                  {
                    question: "Is connecting with current tools challenging?",
                    answer: "Not at all! With the help of our simple API and pre-built connections, Inbound easily integrates with recognised marketing tools and CRMs."
                  },
                  {
                    question: "What kinds of services do you provide?",
                    answer: "To guarantee your success, we offer thorough documentation, dedicated account managers, and at all times technical support."
                  },
                  {
                    question: "What is the duration expected for noticing results?",
                    answer: " First 30 days of installation, the majority of clients noticed notable improvement in engagement and conversions. "
                  }
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl overflow-hidden"
                  >
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                      <ChevronRight
                        className={`w-5 h-5 text-white transition-transform ${openFAQ === index ? 'rotate-90' : ''
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-48' : 'max-h-0'
                        }`}
                    >
                      <p className="text-white/80 p-6 pt-0">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&h=600"
                alt="Customer Support"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call-to-Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#580c3b] to-[#a0404e]">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Boost Sales with AI Automation

            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Using AI direct marketing automation to increase conversions, create customers, and expedite interactions with clients.
            </p>
            <button className="px-8 py-4 bg-white text-[#580c3b] rounded-full font-semibold 
              hover:bg-white/90 transition-all duration-300 
              flex items-center justify-center mx-auto
              transform hover:scale-105 active:scale-95
              hover:shadow-lg hover:shadow-white/20
              relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                Get Started Free
                <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* 9. Contact Section (Get in Touch) */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Let's Chat
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-white/80 mb-8">
                Have questions? Want to learn more? We'd love to hear from you.
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-white" />
                  <p className="text-white/80">No:20 Wellawatta Station Rd, Colombo 00600,Sri Lanka.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-white" />
                  <p className="text-white/80">contact@inbound.ai</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-white" />
                  <p className="text-white/80">+94762528532</p>
                </div>
                <div className="flex space-x-4 pt-4">
                  <a href="https://www.facebook.com/InboundAITech/" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#580c3b] text-white hover:bg-[#a0404e] transition-all duration-300">
                    <FacebookIcon className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://x.com/InboundAITech" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#580c3b] text-white hover:bg-[#a0404e] transition-all duration-300">
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://www.linkedin.com/company/inbound-ai-tech" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#580c3b] text-white hover:bg-[#a0404e] transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://www.youtube.com/@InboundAITech" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#580c3b] text-white hover:bg-[#a0404e] transition-all duration-300">
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://inboundaitech.quora.com/" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#580c3b] text-white hover:bg-[#a0404e] transition-all duration-300">
                    <QuoraIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575174067682!2d79.85475731477266!3d6.874417995025988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bcfdee7764d%3A0x7c6a7d3f1c6c6b0a!2s20%20Station%20Rd%2C%20Colombo%2000600%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1711460426844!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-[#14123a] py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/inbound-logo.png"
                  alt="Inbound"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-white/80 leading-relaxed">
                Increasing business growth with AI-driven inbound marketing automation for intelligent and efficient interactions with clients
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <FacebookIcon className="w-5 h-5" />, href: "https://www.facebook.com/InboundAITech/" },
                  { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/InboundAITech" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/inbound-ai-tech" },
                  { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@InboundAITech" },
                  { icon: <QuoraIcon />, href: "https://inboundaitech.quora.com/" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#580c3b] text-white hover:bg-[#a0404e] transition-all duration-300 aspect-square"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Get in Touch */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-white/80 hover:text-white transition-colors duration-300">
                  <MapPin className="w-10 h-10 text-[#b7cd51] mt-1" />
                  <span>No:20 Wellawatta Station Rd, Colombo 00600, Sri Lanka.</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[#b7cd51]" />
                  <span>contact@inbound.lk</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6 text-[#b7cd51]" />
                  <span>+94762528532</span>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {['Home', 'About', 'Features', 'Pricing'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                        <ChevronRight className="w-4 h-4 mr-2 text-[#b7cd51]" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Privacy Policy', path: '/privacy-policy' },
                    { name: 'Terms & Conditions', path: '/terms-conditions' }
                  ].map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.path} 
                        className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-[#b7cd51]" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Join Our Newsletter</h3>
              <p className="text-white/80">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <div className="space-y-3">
                <form onSubmit={handleContactSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-[#4e557f]/20 border border-[#4e557f] text-white placeholder-gray-500 focus:outline-none focus:border-[#b7cd51] transition-colors duration-300"
                    required
                  />
                  <ReCaptcha onVerify={setRecaptchaToken} />
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-[#b7cd51] hover:bg-[#a0404e] text-[#14123a] rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Subscribe</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-16 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/80 text-sm">
                © 2025 <a 
                  href="https://inbound.lk" 
                  target="_blank" 
                  className="text-[#b7cd51] hover:text-[#b7cd51]/80 no-underline transition-colors"
                  rel="noopener noreferrer"
                >Inbound AI Tech (PVT) LTD</a>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default App;