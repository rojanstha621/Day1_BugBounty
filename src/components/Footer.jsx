const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Ethical HCK. All rights reserved.</p>
          <p className="text-xs mt-2">
            Built with 💻 using Next.js + Tailwind CSS
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  