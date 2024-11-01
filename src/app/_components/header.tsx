import React from 'react';

interface HeaderProps {
    title: string;
    text: string;
  }

const Header: React.FC<HeaderProps> = ({ title, text }) => {
  return (
    <header className="bg-primary text-primary-content py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2">{text}</p>
      </div>
    </header>
  );
};

export default Header;
