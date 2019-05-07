import { storiesOf } from '@storybook/react'; // eslint-disable-line
import React from 'react';
import styled from 'styled-components';
import { GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import {
  GhostWrapper,
  GridItemConstrainedSmall,
  GridItemConstrainedMedium,
  GridItemConstrainedLarge,
  GridItemConstrainedLargeNoMargin,
} from './styledGrid';

const FullWidthBlack = styled.div`
  color: white;
  background-color: #222;
  font-family: ${GEL_FF_REITH_SANS};
  font-weight: 500;
`;

storiesOf('Grid', module).add('GhostWrapper with GridItems', () => (
  <GhostWrapper>
    <GridItemConstrainedSmall>
      <FullWidthBlack>GridItemConstrainedSmall</FullWidthBlack>
    </GridItemConstrainedSmall>
    <GridItemConstrainedMedium>
      <FullWidthBlack>GridItemConstrainedMedium</FullWidthBlack>
    </GridItemConstrainedMedium>
    <GridItemConstrainedLarge>
      <FullWidthBlack>GridItemConstrainedLarge</FullWidthBlack>
    </GridItemConstrainedLarge>
    <GridItemConstrainedLargeNoMargin>
      <FullWidthBlack>GridItemConstrainedLargeNoMargin</FullWidthBlack>
    </GridItemConstrainedLargeNoMargin>
  </GhostWrapper>
));
