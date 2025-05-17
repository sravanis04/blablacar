import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-8">
      <p className="text-sm text-gray-500">© {new Date().getFullYear()} BlaBlaClone. All rights reserved.</p>
    </footer>
  );
};

export default Footer;