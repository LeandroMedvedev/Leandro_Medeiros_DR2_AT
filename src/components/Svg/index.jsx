import { ReactSVG } from 'react-svg';

function Svg({ className, src }) {
  return (
    <ReactSVG
      className={className}
      src={src}
      onError={(error) => console.error('Error loading SVG:', error)}
    />
  );
}

export default Svg;
