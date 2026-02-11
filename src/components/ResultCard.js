import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../styles/globalStyles';
import { getCorClassificacao } from '../utils/imcCalculator';

const ResultCard = ({ imc, classificacao }) => {
  const corClassificacao = getCorClassificacao(classificacao);

  return (
    <View style={[globalStyles.card, styles.container]}>
      <Text style={styles.imcValue}>{imc}</Text>
      <Text style={[styles.classificacao, { color: corClassificacao }]}>
        {classificacao}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  imcValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.dark,
  },
  classificacao: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default ResultCard;