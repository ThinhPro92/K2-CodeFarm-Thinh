import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 px-8 py-10">
      {/* Grid 3 cột */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Cột 1 */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 2 */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Press kit
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
