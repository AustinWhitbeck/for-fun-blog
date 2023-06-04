import React from 'react';

interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return <button type="button" onClick={() => console.log('test button')}>{text}</button>;
}

export default Button;
