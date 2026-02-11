import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import InputField from '../components/InputField';
import { colors, globalStyles } from '../styles/globalStyles';
import { calcularIMC, getClassificacaoIMC } from '../utils/imcCalculator';

const HomeScreen = ({ navigation }) => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const validarCampos = () => {
    if (!peso || !altura) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return false;
    }
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      Alert.alert('Erro', 'Por favor, insira valores válidos!');
      return false;
    }
    return true;
  };

  const calcular = () => {
    if (validarCampos()) {
      const imc = calcularIMC(parseFloat(peso), parseFloat(altura));
      const classificacao = getClassificacaoIMC(imc);

      navigation.navigate('Resultado', {
        imc,
        classificacao,
        peso,
        altura,
      });
    }
  };

  const limparCampos = () => {
    Alert.alert(
      'Limpar Campos',
      'Tem certeza que deseja limpar todos os campos?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          onPress: () => {
            setPeso('');
            setAltura('');
          },
          style: 'destructive'
        }
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView style={globalStyles.container}>
        <Text style={globalStyles.title}>Calculadora IMC</Text>

        <View style={globalStyles.card}>
          <InputField
            label="Peso (kg)"
            value={peso}
            onChangeText={setPeso}
            placeholder="Ex: 70.5"
            keyboardType="numeric"
          />

          <InputField
            label="Altura (cm)"
            value={altura}
            onChangeText={setAltura}
            placeholder="Ex: 175"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={globalStyles.button}
            onPress={calcular}
          >
            <Text style={globalStyles.buttonText}>Calcular IMC</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[globalStyles.button, { backgroundColor: colors.danger }]}
            onPress={limparCampos}
          >
            <Text style={globalStyles.buttonText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Classificações do IMC</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <MaterialIcons name="info" size={20} color={colors.primary} />
            <Text style={{ marginLeft: 10 }}>Abaixo do peso: {'< 18.5'}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <MaterialIcons name="check-circle" size={20} color={colors.secondary} />
            <Text style={{ marginLeft: 10 }}>Peso normal: 18.5 - 24.9</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <MaterialIcons name="warning" size={20} color={colors.warning} />
            <Text style={{ marginLeft: 10 }}>Sobrepeso: 25 - 29.9</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <MaterialIcons name="error" size={20} color={colors.danger} />
            <Text style={{ marginLeft: 10 }}>Obesidade I: 30 - 34.9</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <MaterialIcons name="error" size={20} color={colors.danger} />
            <Text style={{ marginLeft: 10 }}>Obesidade II: 35 - 39.9</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <MaterialIcons name="error" size={20} color={colors.danger} />
            <Text style={{ marginLeft: 10 }}>Obesidade III: {'>= 40'}</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;