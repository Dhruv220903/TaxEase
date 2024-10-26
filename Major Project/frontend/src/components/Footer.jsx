import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-7">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to='/aboutus' className="hover:underline">About Us</Link></li>
              <li><Link to="/contactus" className="hover:underline">Contact</Link></li>
              <li><Link to ="/privacypolicy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/termsofservice" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><Link to="/taxguide" className="hover:underline">Tax Guide</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Connect With Us</h3>
            <p>Follow us on social media for tax tips and updates.</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-primary">Facebook</a>
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © 2024 TaxEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
}