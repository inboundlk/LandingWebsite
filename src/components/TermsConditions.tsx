import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14123a] via-[#4e557f] to-[#580c3b]">
      <div className="container mx-auto px-4 py-20">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-white mb-8 hover:text-[#b7cd51] transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-white/80 mb-8">Last updated: February 10, 2025</p>
          
          <div className="space-y-8 text-white/80">
            <p>Please read these terms and conditions carefully before using Our Service.</p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Interpretation and Definitions</h2>
              <h3 className="text-xl font-semibold text-white mb-3">Interpretation</h3>
              <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Definitions</h3>
              <p className="mb-4">For the purposes of these Terms and Conditions:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong className="text-white">Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                </li>
                <li>
                  <strong className="text-white">Country</strong> refers to: Sri Lanka
                </li>
                <li>
                  <strong className="text-white">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Inbound AI Tech (PVT) LTD, 20 Wellawatta Station Rd, Colombo 00600, Sri Lanka.
                </li>
                {/* Add all other definitions similarly */}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Acknowledgment</h2>
              <div className="space-y-4">
                <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p>By accessing our services, you agree to be bound by these terms and conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Permission is granted to temporarily access our services for personal, non-commercial use.</li>
                <li>This license shall automatically terminate if you violate any of these restrictions.</li>
                <li>Upon termination, you must destroy any downloaded materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Service Description</h2>
              <p>We provide AI-powered inbound marketing automation services, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Lead generation and management</li>
                <li>Marketing automation tools</li>
                <li>Analytics and reporting</li>
                <li>Customer engagement features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Subscription fees are billed monthly or annually</li>
                <li>All payments are non-refundable</li>
                <li>Pricing may be subject to change with notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. User Obligations</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide accurate information</li>
                <li>Maintain account security</li>
                <li>Comply with all applicable laws</li>
                <li>Not misuse our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="mb-4">If you have any questions about these Terms and Conditions, You can contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By email: contact@inbound.lk</li>
                <li>By visiting this page on our website: <a href="https://inbound.lk" className="text-[#b7cd51] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">https://inbound.lk</a></li>
                <li>By phone number: +94762528532</li>
                <li>By mail: 20 Wellawatta Station Rd, Colombo 00600, Sri Lanka.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions; 