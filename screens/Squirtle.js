import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Linking, TouchableOpacity, Pressable } from 'react-native';
import { Card } from 'react-native-paper';

export default Squirtle = ({navigation}) => {

  const [squirtleData, setSquirtleData] = React.useState(null);

  const fetchSquirtleData = async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/squirtle/'
      );
      const data = await response.json();
      setSquirtleData(data);
    } catch (error) {
      console.error('Erro ao buscar informações do Squirtle:', error);
    }
  };

  React.useEffect(() => {
    fetchSquirtleData();
  }, []);
  
  const scrollViewRef = React.useRef();

  const voltarParaOTopo = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Informações sobre Squirtle</Text>
            {squirtleData && (
              <>
                <View style={styles.alinharImagemPokemon}>
                  <Image style={styles.imagemPokemonInformacoes} source={{uri: squirtleData.sprites.front_default}}/>
                </View>
                <Text style={styles.textoPokeTipo}>{`Squirtle é um Pokémon do tipo ${squirtleData.types[0].type.name}`}</Text>
                <Text style={styles.textosMenores}>É o Pokémon inicial da região de Kanto e evolui para Wartortle.</Text>
              </>
            )}
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Características</Text>
          <Text style={styles.textosMenores}>Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hypro Pump.</Text>
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Curiosidades</Text>
          <Text style={styles.textosMenores}>🔎 Squirtle é um dos Pokémons mais populares e adoráveis.</Text>
          <Text style={styles.textosMenores}>🔎 Seu nome deriva da palavra "squirrel" (esquilo) e "turtle" (tartaruga).</Text>
          <Text style={styles.textosMenores}>🔎 Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.</Text>
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Squirtle: O Amigo Aquático</Text>
          <Text style={styles.textosMenores}>Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.</Text>
          <Text style={styles.textosMenores}>Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.</Text>
          <Text style={styles.textosMenores}>Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.</Text>
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Recursos Adicionais</Text>
          <Text style={styles.textosHyperlink} onPress={() => { Linking.openURL('https://www.pokemon.com/br/pokedex/squirtle'); }}> 
    Pokédex - Squirtle
  </Text> 
          <Text style={styles.textosHyperlink} onPress={() => { Linking.openURL('https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)'); }}> 
    Bulbapedia - Squirtle
  </Text> 
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Evoluções</Text>
          <View style={styles.alinharImagemPokemon}>
            <Image source={require('../images/007.png')}/>
          </View>
          <Text style={styles.textosEvolucoes}>1. Squirtle</Text>
          <View style={styles.alinharImagemPokemon}>
            <Pressable onPress={() => navigation.navigate("Wartortle")}>
              <Image source={require('../images/008.png')}/>
            </Pressable>
            <Text style={styles.textosEvolucoes}>2. Wartortle</Text>
          </View>
          <View style={styles.alinharImagemPokemon}>
            <Pressable onPress={() => navigation.navigate("Blastoise")}>
              <Image source={require('../images/009.png')}/>
            </Pressable>
            <Text style={styles.textosEvolucoes}>3. Blastoise</Text>
          </View>
        </Card>
      </View>
      <View style={styles.headerBaixo}>
        <Text style={styles.headerBaixoTexto}>© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.</Text>
        <TouchableOpacity onPress={voltarParaOTopo}>
          <Text style={styles.headerBaixoTexto}>Voltar para o topo</Text>
        </TouchableOpacity>
        <Text style={styles.headerBaixoTextoEmail} onPress={() => { Linking.openURL('mailto:eduardogonzalez@alunos.unicesumar.edu.br'); }}>Contato via e-mail</Text>
        <Text style={styles.headerBaixoTextoTelefone} onPress={() => { Linking.openURL('https://wa.me/5544988356061'); }}>Telefone: (44) 98835-6061</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  headerBaixo: {
    backgroundColor: '#343a40',
    padding: '0px 15px 15px 15px',
    alignItems: 'center',
    marginTop: '20px',
  },
  headerBaixoTexto: {
    color: '#fff',
    fontSize: '15px',
    paddingTop: '15px',
    textAlign: 'center',
  },
  headerBaixoTextoEmail: {
    color: '#ff4511',
    fontSize: '15px',
    paddingTop: '15px',
    textAlign: 'center',
  },
  headerBaixoTextoTelefone: {
    color: '#32cd32',
    fontSize: '15px',
    paddingTop: '15px',
    textAlign: 'center',
  },
  card: {
    margin: '20px 15px 0px 15px',
    padding: '15px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
  },
  textosMaiores: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  textosMenores: {
    fontSize: '15px',
    paddingTop: '10px',
  },
  textoPokeTipo: {
    textAlign: 'center',
  },
  imagemPokemonInformacoes: {
    width: '60px',
    height: '80px',
    margin: '10px 0px 10px 0px',
  },
  alinharImagemPokemon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textosHyperlink: {
    fontSize: '15px',
    paddingTop: '10px',
    color: '#4592c4',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  textosEvolucoes: {
    fontWeight: 'bold',
    fontSize: '17px',
    textAlign: 'center',
  },
});