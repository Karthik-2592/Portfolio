import { useState, useEffect } from 'react';

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-zinc-700 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } drop-shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-1 py-1">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl text-white hover:text-[rgb(76,250,206)] transition-colors transition-transform hover:scale-110 active:scale-100">
            <svg
              width="60" height="60" version="1.1" viewBox="0 0 156.8 156.8"
              xmlns="http://www.w3.org/2000/svg"
              className = "fill-white hover:fill-[rgb(76,250,206)] active:fill-[rgba(76,250,206,0.7)] transition-colors"
            >
              <path d="m71.706 96.464s15.577 0.57091 6.7784 25.658c0 0-0.37516 0.76277-0.61117 1.3364-0.18196 0.44229-0.55232 0.83646-0.88373 1.2215-0.50183 0.5831-1.121 0.83674-1.3903 0.94808-0.3651 0.15096-1.4651 0.37737-1.7086 0.39108-2.2454 0.12647-4.5587 0.35765-5.0206-16.393l-0.75014-36.157
              3.5861-3.4138 13.38 20.678s0.50522 0.84601 0.74126 1.1456c3.0368 3.8542 6.3019 7.5321 10.66 9.4628 2.2846 1.0122 4.9007 1.9504 7.9104 1.7756 3.1496-0.18285 7.3962-0.52938 11.619-2.5195 4.4429-2.0938 5.9618-5.7871 6.7974-8.5599 2.1649-7.1847-4.7094-15.014-4.7094-15.014s7.3357 13.938-3.4844
              17.972c-10.82 4.0346-21.457-15.772-21.457-15.772l-11.737-19.44 12.756-13.598s4.4889-4.642 6.5956-7.1254c0.54184-0.63873 0.50667-2.9758-1.764-4.3636-2.267-1.3856-7.2143-1.1883-17.934 5.1336 0 0-0.09162 0.06133-0.03022 0.22298 0.05576 0.14679 0.1937 0.10739 0.1937 0.10739l11.004-2.0173s3.1177
              0 0 3.6678-23.841 23.841-23.841 23.841l-0.36678-23.474s-2.8636-18.035-23.77-15.467c-2.4598 0.30208-3.8826 1.1381-5.1435 2.0368-1.8397 1.3113-2.9818 2.9325-3.5775 4.6828-2.4661 7.246 1.5531 11.497 1.5531 11.497s-0.60374-0.82493-0.17337-3.8666c0.08794-0.6215 0.31461-1.5182 0.51642-2.0668
              0.20181-0.54862 0.67922-1.5823 1.2425-2.4704 1.4278-2.2509 4.3254-4.5106 7.6781-3.8912 1.2109 0.22372 5.5129 1.3494 5.5574 7.9309l0.16196 23.989 0.18339 46.582s-0.86285 11.65 6.6354 18.11c4.3205 3.7218 15.139 6.4128 23.577 0.95486 7.3564-4.7584 7.5311-7.9528 8.5156-12.639
              1.6999-8.0916-1.8829-14.348-2.4161-14.985-0.83915-1.001-3.1371-4.6673-7.7793-6.181-2.3726-0.77364-4.8352-1.638-9.109 0.05396z" strokeWidth="23.301"/>
            </svg>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[rgb(76,250,206)] active:text-[rgba(76,250,206,0.7)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
