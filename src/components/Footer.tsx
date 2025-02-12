import React from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Vancouver Caulking & Sealant Pros
            </h3>
            <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
            <p className="text-gray-300 leading-relaxed">
              Professional caulking and sealant services throughout Vancouver.
              Our commitment to quality makes us Vancouver&apos;s trusted choice
              for superior waterproofing and sealing solutions.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  href="/residential"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Residential Caulking
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/waterproofing"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Waterproofing Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
            <ul className="space-y-3 text-gray-300">
              <li>Downtown Vancouver</li>
              <li>West End</li>
              <li>Kitsilano</li>
              <li>Mount Pleasant</li>
              <li>East Vancouver</li>
              <li>Point Grey</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
            <div className="text-gray-300 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <p>(778) 650-7803</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <p>info@vancouvercaulking.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Vancouver Caulking & Sealant Pros by
              F Group. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-yellow-400 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
