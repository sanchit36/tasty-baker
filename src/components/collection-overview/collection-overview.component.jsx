import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { collections } from '../../data';
import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionOverview = () => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </CollectionOverviewContainer>
  );
};

export default CollectionOverview;
