import React from 'react';

function UčimoLogo(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  // Simple text-based logo — replace with a proper SVG brand logo
  // when the final graphic design is ready.
  return (
    <svg
      height={24}
      version='1.1'
      viewBox='0 0 100 24'
      width={100}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <text
        fill='#ffffff'
        fontFamily='system-ui, -apple-system, sans-serif'
        fontSize='18'
        fontWeight='700'
        x='0'
        y='18'
      >
        Učimo
      </text>
    </svg>
  );
}

UčimoLogo.displayName = 'UčimoLogo';

export default UčimoLogo;
