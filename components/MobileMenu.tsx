

import React from 'react';
import Link from 'next/link';
import { FaXmark } from 'react-icons/fa6';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; path: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems }) => {
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className='bg-primary p-4'>
        <button onClick={onClose} className='text-white'>
          <FaXmark size={20} />
        </button>
        <ul className='mt-4 space-y-4'>
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link href={path}>
                <div className='block hover:text-gray-300'>{label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
