import React from 'react';
import { Placeholder } from 'semantic-ui-react';

export const MediumSkeleton = () => (
  <Placeholder fluid>
    <Placeholder.Header>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
);

export default MediumSkeleton;
