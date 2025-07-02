import React, { JSX, ReactElement, isValidElement } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

type Type = 'submit' | 'button' | 'reset';
type Size = 'sm' | 'lg';
type Variant = 'outline' | 'solid';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  title: string;
  type?: Type;
  size?: Size;
  className?: string;
  variant?: Variant;
}

const Button = ({
  title,
  type = "button",
  size,
  className,
  startIcon,
  endIcon,
  variant = 'solid',
  ...rest
}: ButtonProps) => {
  const buttonClass = twMerge(
    'flex',
    'justify-center',
    'items-center',
    'focus:outline-none',
    'py-1.5',
    'px-2.5',
    'lg:py-2.5',
    'lg:px-4',
    'border-1',
    'rounded-lg',
    "transition-all",
    "duration-300",
    "ease-linear",
    'cursor-pointer',
    classNames({
      'border-gray-200 text-gray-600 hover:border-white hover:bg-white': variant === 'outline',
      'border-blue-600 text-white bg-blue-600 hover:bg-blue-700 hover:border-blue-700': variant === 'solid',
      'py-1 px-2.5 lg:py-2 lg:px-3': size === 'sm',
      'py-3 px-4 lg:py-5 lg:px-6': size === "lg"
    })
  );
  return <button type={type} className={classNames(className, buttonClass)} {...rest}>
    {startIcon && (React.cloneElement(startIcon as ReactElement, {
      ...startIcon.props,
      className: classNames(startIcon.props.className, 'me-2')
    }))}
    {title}
    {endIcon && (React.cloneElement(endIcon as ReactElement, {
      ...endIcon.props,
      className: classNames(endIcon.props.className, 'ms-2')
    }))}
  </button>;
};

export default Button;
