import { ScrollView, Share, Text, TouchableOpacity, View } from 'react-native';
import ResultCard from '../components/ResultCard';
import { colors, globalStyles } from '../styles/globalStyles';

const ResultScreen = ({ route, navigation }) => {
  const { imc, classificacao, peso, altura } = route.params;

  const compartilharResultado = async () => {
    try {
      await Share.share({
        message: `Meu IMC é${imc} -${classificacao}`,
        title: 'Resultado do IMC',
      });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível compartilhar o resultado');
    }
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Seu Resultado</Text>

      <ResultCard imc={imc} classificacao={classificacao} />

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>Detalhes</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
          <Text>Peso:</Text>
          <Text style={{ fontWeight: 'bold' }}>{peso} kg</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
          <Text>Altura:</Text>
          <Text style={{ fontWeight: 'bold' }}>{altura} cm</Text>
        </View>
      </View>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={globalStyles.buttonText}>Calcular Novamente</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: colors.secondary }]}
        onPress={compartilharResultado}
      >
        <Text style={globalStyles.buttonText}>Compartilhar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ResultScreen;