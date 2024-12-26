// hooks/useRepository.js
import { gql, useQuery } from '@apollo/client';

const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      url
    }
  }
`;

const useRepository = (id) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  return { data, loading, error };
};

export default useRepository;
