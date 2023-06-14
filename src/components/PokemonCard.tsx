import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Pokemon} from '../features/home/data/pokemon';
import {toTitleCase} from '../util/stringUtils';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({pokemon}: PokemonCardProps) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          backgroundColor: pokemon?.types[0].color,
          ...styles.card,
        }}>
        <Text style={styles.name}>{pokemon.name?.toUpperCase()}</Text>
        <Text style={styles.order}>
          #{String(pokemon?.order).padStart(3, '0')}
        </Text>
        <Text style={styles.order}>
          Types:{' '}
          {pokemon.types.map(value => toTitleCase(value.name)).join(', ')}
        </Text>
        <View style={styles.shadow} />
        <Image source={{uri: pokemon?.image}} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 15,
    padding: 8,
  },
  image: {
    position: 'absolute',
    right: -5,
    bottom: -15,
    height: 150,
    width: 140,
  },
  name: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 28,
  },
  order: {
    color: '#fff',
    fontSize: 18,
  },
  shadow: {
    height: 130,
    width: 130,
    backgroundColor: '#fff',
    opacity: 0.2,
    position: 'absolute',
    borderRadius: 60,
    bottom: -25,
    right: -25,
  },
});

export default React.memo(PokemonCard);
