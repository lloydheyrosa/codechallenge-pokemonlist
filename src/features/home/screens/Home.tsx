import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, StyleSheet} from 'react-native';
import usePokedexStore from '../store/pokedex';
import axios from 'axios';
import {ActivityIndicator} from 'react-native-paper';
import Palette from '../../../theme/Pallete';
import PokemonCard from '../../../components/PokemonCard';

function HomeScreen() {
  const isLoading = usePokedexStore(state => state.isLoading);
  const isLoadingNext = usePokedexStore(state => state.isLoadingNext);
  const pokedex = usePokedexStore(state => state.pokedex);
  const getPokedex = usePokedexStore(state => state.getPokedex);

  useEffect(() => {
    const source = axios.CancelToken.source();
    getPokedex(true);

    return () => source.cancel();
  }, []);

  return (
    <SafeAreaView style={styles.baseContainer}>
      <FlatList
        data={pokedex}
        renderItem={({item}) => <PokemonCard key={item.id} pokemon={item} />}
        nestedScrollEnabled={true}
        stickyHeaderHiddenOnScroll={true}
        onEndReachedThreshold={0.01}
        onEndReached={_ => {
          getPokedex(false);
        }}
        refreshing={isLoading}
        onRefresh={() => getPokedex(true)}
      />
      {isLoadingNext && (
        <ActivityIndicator
          style={styles.loadingIndicator}
          animating={true}
          color={Palette.DarkGreen}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  headerContainer: {},
  loadingIndicator: {
    marginVertical: 16,
  },
});

export default HomeScreen;
