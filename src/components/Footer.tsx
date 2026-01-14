import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Use the same public StudyOLogo image as the header
const studyOLogo = "/logo.png";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-orange-900 to-orange-800 text-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-sm">
                <img
                  src={studyOLogo}
                  alt="The Study-O logo"
                  className="h-full w-full object-contain p-[2px]"
                />
              </div>
              <span>The Study-O</span>
            </div>
            <p className="text-orange-100 text-sm mb-4">
              Where learning meets wagging tails! Empowering students with personalized tutoring, college prep, and three lovable dachshunds.
            </p>
            <p className="text-orange-200 text-xs italic">
              Edna, Vincent & LONGston welcome you!
            </p>
          </div>

          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-orange-100">
              <li>
                <a
                  href="#academic"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = "#academic";
                    onNavigate?.("services");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Academic Support
                </a>
              </li>
              <li>
                <a
                  href="#testing"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = "#testing";
                    onNavigate?.("services");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Standardized Testing
                </a>
              </li>
              <li>
                <a
                  href="#admissions"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = "#admissions";
                    onNavigate?.("services");
                  }}
                  className="hover:text-white transition-colors"
                >
                  College Admissions
                </a>
              </li>
              <li>
                <a
                  href="#dachshunds"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = "#dachshunds";
                    onNavigate?.("about");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Meet Our Dogs
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("admin")}
                  className="hover:text-white transition-colors underline underline-offset-4"
                >
                  Admin Site
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-orange-100">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>leahhughes@aol.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(404) 731-4524</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Sun-Wed: Noon - 9pm</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Atlanta, Georgia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-700 mt-8 pt-8 text-center text-sm text-orange-200">
          <p>&copy; {new Date().getFullYear()} The Study-O. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
