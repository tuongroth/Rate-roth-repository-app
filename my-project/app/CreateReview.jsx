// components/CreateReview.js
import React from 'react';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import ReviewForm from './ReviewForm';
import { CREATE_REVIEW } from '../graphql/mutations';

const CreateReview = () => {
  const navigate = useNavigate();
  const [createReview] = useMutation(CREATE_REVIEW);

  const onSubmit = async (values) => {
    try {
      const { data } = await createReview({
        variables: {
          review: {
            ownerName: values.ownerName,
            repositoryName: values.repositoryName,
            rating: Number(values.rating),
            text: values.text
          }
        }
      });
      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
