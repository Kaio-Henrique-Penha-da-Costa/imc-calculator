import { Linking, ScrollView, Text, View } from 'react-native';
import { colors, globalStyles } from '../styles/globalStyles';

const AboutScreen = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Sobre o App</Text>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>Calculadora IMC</Text>
        <Text style={{ fontSize: 16, lineHeight: 24, marginBottom: 20 }}>
          Este aplicativo foi desenvolvido para calcular o Índice de Massa Corporal (IMC),
          uma medida internacional usada para calcular se uma pessoa está no peso ideal.
        </Text>

        <Text style={globalStyles.subtitle}>Versão</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>1.0.0</Text>

        <Text style={globalStyles.subtitle}>Desenvolvedor</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>Seu Nome</Text>

        <Text style={globalStyles.subtitle}>Contato</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:exemplo@email.com')}>
          <Text style={{ fontSize: 16, color: colors.primary, marginBottom: 10 }}>
            exemplo@email.com
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;