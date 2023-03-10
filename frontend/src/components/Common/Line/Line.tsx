import React, { FC } from 'react';
import * as Style from './Line.styles';

export interface LineProps {
  height?: string;
  width?: string;
  align?: 'vertical' | 'horizontal';
  left?: string;
}

const Line: FC<LineProps> = ({ height, width, align = 'vertical', left }) => {
  return align === 'vertical' ? (
    <Style.VerticalLine height={height ?? '0.0625rem'} width={width ?? '100%'} align={align} />
  ) : (
    <Style.HorizontalLine height={height ?? '100%'} width={width ?? '0.0625rem'} align={align} left={left} />
  );
};

export default Line;
