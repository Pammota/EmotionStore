import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';

type Props = {
  children: ReactNode;
  speed: number;
};

type ColorsIter = {
  rt: number; // right top
  rb: number; // right bottom
  lt: number; // left top
  lb: number; // left bottom
};

const colorsPastelArr: string[] = [];

for (let hue = 0; hue <= 360; hue++) {
  // console.log(hue);
  const pastel = 'hsl(' + hue + ', 100%, 80%)';
  colorsPastelArr.push(pastel);
}

const reIndexerPastel = (number: number): number => {
  if (number > 359) return 0;
  else return number;
};

const alignCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Colorful = ({ children, speed }: Props) => {
  const [colorsIndex, setColorsIndex] = useState<ColorsIter>({
    rt: 0,
    rb: 90,
    lt: 180,
    lb: 270,
  });

  const shufflePastel = useCallback(() => {
    const newColorsIndex = {
      rt: reIndexerPastel(colorsIndex.rt) + 1,
      rb: reIndexerPastel(colorsIndex.rb) + 1,
      lt: reIndexerPastel(colorsIndex.lt) + 1,
      lb: reIndexerPastel(colorsIndex.lb) + 1,
    };

    // console.log(newColorsIndex);
    setColorsIndex(newColorsIndex);
  }, [colorsIndex]);

  useEffect(() => {
    const intervalID = setInterval(shufflePastel, speed);
    return () => clearInterval(intervalID);
  }, [shufflePastel]);

  const boxStylesIndexPastel = {
    background: `linear-gradient(45deg, ${colorsPastelArr[colorsIndex.rt]}, ${
      colorsPastelArr[colorsIndex.rb]
    }),linear-gradient(142deg, transparent, ${
      colorsPastelArr[colorsIndex.lt]
    }),linear-gradient(108deg, ${colorsPastelArr[colorsIndex.lb]}, transparent)`,
  };

  return (
    <Box sx={[{ width: '100%', height: '100%' }, alignCenter, boxStylesIndexPastel]}>
      {children}
    </Box>
  );
};
