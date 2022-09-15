import { useParams } from 'react-router-dom';
import { collections } from '../../data';
import CollectionPage from './collection.component';

const CollectionPageContainer = () => {
  const { collectionId } = useParams();
  const collection = collections.find((c) => c.routeName === collectionId);
  return <CollectionPage collection={collection} />;
};

export default CollectionPageContainer;
