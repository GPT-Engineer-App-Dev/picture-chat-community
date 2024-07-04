const Footer = () => {
  return (
    <footer className="border-t mt-4 py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          <a href="/about" className="hover:underline">About</a> • 
          <a href="/contact" className="hover:underline">Contact</a> • 
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;