import Link from "next/link";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMobileMenuOpen }) => {
  return (
    <div
      className={`bg-secondary text-primary absolute h-full top-0 left-0 transition-transform ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-[80vw] p-4">
        <Link href="/about" className="block py-2">
          About
        </Link>
        <Link href="/services" className="block py-2">
          Services
        </Link>
        <Link href="/contact" className="block py-2">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;