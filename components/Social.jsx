import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// Define your socials array with valid paths
const socials = [
    { icon: <FaGithub />, path: "https://www.github.com/ishan-sharma-3004" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ishan-sharma-sjsu" },
  ];  

// The Social component that renders the icons
const Social = ({ containerStyles, iconStyles }) => {
  return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
    return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    );
    })}
    </div>
  );
};

export default Social;
