import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router';
import Spinner from '../../components/spinner/spinner.component';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collection-overview/collection-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
