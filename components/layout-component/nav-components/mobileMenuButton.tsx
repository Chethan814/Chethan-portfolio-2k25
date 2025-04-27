// Importing necessary hooks and components
import { useState, useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import menuV2 from '../../../public/menu-animtion/menuV2.json';

// MobileMenuButtonProps interface
interface MobileMenuButtonProps {
  isMobileMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isMobileMenuOpen, toggleMenu }) => {
  const [isClient, setIsClient] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  // Set isClient to true once the component is mounted on the client side
  useEffect(() => {
    setIsClient(true); // Now we know we're on the client side
  }, []);

  const handleClick = () => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(isMobileMenuOpen ? -1 : 1); // Set direction: 1 for forward, -1 for reverse
      lottieRef.current.play(); // Play the animation
      toggleMenu(); // Toggle the menu state
    }
  };

  // Return null or a fallback before the client-side renders
  if (!isClient) {
    return null; // Prevent SSR errors and render nothing until we're on the client side
  }

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        filter: 'invert(1)', // Inverts colors to make it white
      }}
      className="block md:hidden"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={menuV2}
        loop={false}
        autoplay={false} // Prevents the animation from playing on load
      />
    </div>
  );
};

export default MobileMenuButton;
