// components/Button.tsx
// components/Button.tsx


import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  rounded = 'md',
}) => {
  let sizeClasses = '';
  if (size === 'small') sizeClasses = 'text-sm px-3 py-1';
  else if (size === 'medium') sizeClasses = 'text-base px-4 py-2';
  else if (size === 'large') sizeClasses = 'text-lg px-5 py-3';

  const className = `bg-blue-600 text-white font-semibold ${sizeClasses} rounded-${rounded}`;

  return <button className={className}>{title}</button>;
};

export default Button;
