import { useEffect, useState } from 'react';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit min-w-[200px] bg-[rgba(var(--header-bg),0.8)] backdrop-blur-md border border-[rgba(var(--header-bg),0.2)] rounded-full px-4 py-2 shadow-lg ${styles.header}`}>
        <nav className="flex justify-center gap-1 flex-nowrap">
          <a href="#home" className="text-[rgb(var(--header-text))] font-bold text-lg hover:opacity-80 transition-opacity">
            GS
          </a>
          <div className="hidden md:flex gap-1">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-[rgb(var(--header-text))] px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap ${styles.navLink}`}
              >
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-[rgb(var(--header-text))] p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMobileMenuOpen 
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                }
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />
      <div 
        className={`fixed top-20 left-4 right-4 bg-[rgb(var(--card-bg))] border border-[rgb(var(--card-border))] rounded-2xl shadow-xl p-4 z-50 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-2">
          {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[rgb(var(--text-primary))] px-4 py-3 rounded-xl text-base transition-all ${styles.navLink}`}
              onClick={closeMobileMenu}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header; 