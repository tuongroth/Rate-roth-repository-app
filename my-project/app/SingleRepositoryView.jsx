// components/SingleRepositoryView.js
import React from 'react';
import { useParams } from 'react-router-native';
import { ActivityIndicator, View, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { data, loading, error } = useRepository(id);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <RepositoryItem repository={data.repository} showGitHubButton={true} />
  );
};

export default SingleRepositoryView;
