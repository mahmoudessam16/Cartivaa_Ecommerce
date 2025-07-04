import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-12">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
          About Cartivaa
        </h1>

        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded with a vision to revolutionize online shopping, Cartivaa
            emerges from a passion for creating exceptional digital experiences.
            We believe that every customer deserves seamless, intuitive, and
            delightful interactions with their favorite brands.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-gray-50 rounded-2xl p-8 border border-orange-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses and delight customers through innovative
              eCommerce solutions that bridge the gap between digital
              convenience and personal connection. We're not just building a
              platform – we're crafting the future of digital commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Optimized for speed and performance, ensuring customers never
                wait.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure & Trusted
              </h3>
              <p className="text-gray-600">
                Bank-level security with cutting-edge encryption protecting
                every transaction.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customer First
              </h3>
              <p className="text-gray-600">
                Every feature designed with customer needs and satisfaction in
                mind.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our journey began with a simple question: "What if shopping online
              could be as personal and engaging as visiting your favorite local
              store?" This question drives everything we do, from our
              user-centric design philosophy to our commitment to cutting-edge
              technology.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are a diverse team of passionate professionals, each bringing
              unique expertise in technology, design, and customer experience.
              Together, we're not just building an eCommerce platform – we're
              crafting experiences that matter.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-black rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Why Choose Cartivaa?</h2>
            <p className="text-orange-100 leading-relaxed mb-6">
              Excellence in every detail, customer-first approach, continuous
              innovation, and building lasting relationships that transcend
              traditional business boundaries. Join thousands of satisfied
              customers who have made Cartivaa their trusted shopping
              destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Shopping
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
