// components/ReviewForm.js
import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  ownerName: Yup.string().required('Repository owner\'s username is required'),
  repositoryName: Yup.string().required('Repository name is required'),
  rating: Yup.number().required('Rating is required').min(0).max(100),
  text: Yup.string()
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ ownerName: '', repositoryName: '', rating: '', text: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Repository owner's username"
            onChangeText={handleChange('ownerName')}
            value={values.ownerName}
            testID="ownerNameField"
          />
          {touched.ownerName && errors.ownerName && <Text style={styles.errorText}>{errors.ownerName}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Repository's name"
            onChangeText={handleChange('repositoryName')}
            value={values.repositoryName}
            testID="repositoryNameField"
          />
          {touched.repositoryName && errors.repositoryName && <Text style={styles.errorText}>{errors.repositoryName}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Rating between 0 and 100"
            onChangeText={handleChange('rating')}
            value={values.rating}
            keyboardType="numeric"
            testID="ratingField"
          />
          {touched.rating && errors.rating && <Text style={styles.errorText}>{errors.rating}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Review"
            onChangeText={handleChange('text')}
            value={values.text}
            multiline
            testID="textField"
          />

          <Button title="Submit" onPress={handleSubmit} testID="submitButton" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: { borderColor: '#ccc', borderWidth: 1, marginBottom: 10, padding: 8 },
  errorText: { color: 'red', marginBottom: 10 }
});

export default ReviewForm;
