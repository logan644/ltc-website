export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div>
          © {new Date().getFullYear()} Logan Taylor Consulting. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
