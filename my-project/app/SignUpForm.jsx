// components/SignUpForm.js
import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Username must be at least 5 characters long')
    .max(30, 'Username cannot exceed 30 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters long')
    .max(50, 'Password cannot exceed 50 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '', confirmPassword: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={handleChange('username')}
            value={values.username}
            testID="usernameField"
          />
          {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={handleChange('password')}
            value={values.password}
            secureTextEntry
            testID="passwordField"
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={handleChange('confirmPassword')}
            value={values.confirmPassword}
            secureTextEntry
            testID="confirmPasswordField"
          />
          {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

          <Button title="Sign Up" onPress={handleSubmit} testID="submitButton" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: { borderColor: '#ccc', borderWidth: 1, marginBottom: 10, padding: 8 },
  errorText: { color: 'red', marginBottom: 10 },
});

export default SignUpForm;
