// components/SignIn.jsx

import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

const SignIn = () => {
  // State for username, password, errors, and touched fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [touched, setTouched] = useState({ username: false, password: false });

  // Handle form submission
  const handleSubmit = () => {
    let valid = true;
    const newErrors = { username: '', password: '' };

    // Validate username
    if (!username) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    // If there are errors, update state and prevent form submission
    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // If valid, submit the form (just log the values in this case)
    console.log({ username, password });
  };

  // Handle the blur event for inputs
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>

      {/* Username Input */}
      <TextInput
        style={[
          styles.input,
          errors.username && touched.username && { borderColor: '#d73a4a' }, // Red border on error
        ]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername} // Update state on input change
        onBlur={() => handleBlur('username')} // Mark as touched
      />
      {/* Error message for username */}
      {errors.username && touched.username && (
        <Text style={styles.errorText}>{errors.username}</Text>
      )}

      {/* Password Input */}
      <TextInput
        style={[
          styles.input,
          errors.password && touched.password && { borderColor: '#d73a4a' }, // Red border on error
        ]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword} // Update state on input change
        secureTextEntry // Obscures password text
        onBlur={() => handleBlur('password')} // Mark as touched
      />
      {/* Error message for password */}
      {errors.password && touched.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      {/* Submit Button */}
      <Button title="Sign In" onPress={handleSubmit} />

      {/* Optional message */}
      <Text style={styles.message}>Please enter your username and password.</Text>
    </View>
  );
};

// Styling the form
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc', // Default border color
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  errorText: {
    color: '#d73a4a', // Red error text
    marginBottom: 10,
  },
  message: {
    marginTop: 20,
    color: '#888',
  },
});

export default SignIn;
