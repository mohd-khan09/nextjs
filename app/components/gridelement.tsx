import Image from 'next/image';
import React from 'react';

type GridElementProps = {
  imageUrl: string;
  index: number;
};

const GridElement: React.FC<GridElementProps> = ({ imageUrl, index }) => {
  return (
    <div className="grid-element">
<Image
  src={imageUrl}
  alt={`Image ${index}`}
  width={10}
  height={10}
  className="w-full h-auto"
/>
    </div>
  );
};

export default GridElement;
