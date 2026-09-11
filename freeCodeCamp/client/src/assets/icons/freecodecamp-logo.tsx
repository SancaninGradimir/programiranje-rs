import React from 'react';
import logo from './ucimo-logo-black-transparent.png';

function UčimoLogo(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      height={40}
      width={40}
      viewBox='0 0 40 40'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <image
        href={logo}
        x='0'
        y='0'
        width='40'
        height='40'
        preserveAspectRatio='xMidYMid meet'
        style={{ filter: 'invert(1)' }}
      />
    </svg>
  );
}

UčimoLogo.displayName = 'UčimoLogo';

export default UčimoLogo;
