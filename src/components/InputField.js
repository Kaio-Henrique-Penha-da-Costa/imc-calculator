import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, globalStyles } from '../styles/globalStyles';

const InputField = ({ label, value, onChangeText, placeholder, keyboardType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={globalStyles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={colors.dark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.dark,
    marginBottom: 5,
  },
});

export default InputField;