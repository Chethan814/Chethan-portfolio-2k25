import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="hidden md:flex space-x-4">
      <Link href="/about" className="text-secondary">
        About
      </Link>
      <Link href="/services" className="text-secondary">
        Services
      </Link>
      <Link href="/contact" className="text-secondary">
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;