import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Linking, TouchableOpacity, Pressable } from 'react-native';
import { Card } from 'react-native-paper';

export default Wartortle = ({navigation}) => {
  
  const [wartortleData, setWartortleData] = React.useState(null);

  const fetchWartortleData = async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/wartortle/'
      );
      const data = await response.json();
      setWartortleData(data);
    } catch (error) {
      console.error('Erro ao buscar informações do Wartortle:', error);
    }
  };

  React.useEffect(() => {
    fetchWartortleData();
  }, []);

  const scrollViewRef = React.useRef();

  const voltarParaOTopo = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Informações sobre Wartortle</Text>
            {wartortleData && (
              <>
                <View style={styles.alinharImagemPokemon}>
                  <Image style={styles.imagemPokemonInformacoes} source={{uri: wartortleData.sprites.front_default}}/>
                </View>
                <Text style={styles.textoPokeTipo}>{`Wartortle é um Pokémon do tipo ${wartortleData.types[0].type.name}`}</Text>
                <Text style={styles.textosMenores}>É um Pokémon da região de Kanto, sendo a evolução do Squirtle que evolui para Blastoise.</Text>
              </>
            )}
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Características</Text>
          <Text style={styles.textosMenores}>Wartortle é reconhecido por sua concha resistente e poderosos ataques aquáticos, como Hydro Pump e Water Gun, tornando-o uma escolha formidável para batalhas aquáticas.</Text>
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Curiosidades</Text>
          <Text style={styles.textosMenores}>🔎 Wartortle utiliza as orelhas dentro de sua concha para regular sua temperatura corporal.</Text>
          <Text style={styles.textosMenores}>🔎 Seus ataques de água são tão precisos que podem acertar alvos a uma grande distância.</Text>
          <Text style={styles.textosMenores}>🔎 Wartortle é conhecido por criar redemoinhos aquáticos poderosos para desorientar seus oponentes em batalha.</Text>
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Wartortle: O Guardião das Águas</Text>
          <Text style={styles.textosMenores}>Wartortle, a evolução poderosa de Squirtle, é reconhecido por sua concha imponente e suas habilidades aquáticas excepcionais. Sua concha robusta não apenas oferece proteção sólida contra ataques adversários, mas também reflete sua resistência inabalável em batalha. Dotado de ataques aquáticos poderosos, como Hydro Pump e Water Gun, Wartortle é capaz de dominar qualquer campo de batalha aquático com sua destreza e precisão.</Text>
          <Text style={styles.textosMenores}>Além de sua habilidade em combate, Wartortle mantém uma conexão leal e profunda com seus treinadores. Sua disposição para proteger e apoiar aqueles ao seu redor faz dele não apenas um aliado valoroso em batalhas, mas também um amigo confiável em todas as aventuras. Essa relação especial entre Wartortle e seus treinadores fortalece ainda mais seu compromisso em alcançar a grandeza juntos, criando laços que transcendem além das simples batalhas Pokémon.</Text>
          <Text style={styles.textosMenores}>Ao longo de suas jornadas, Wartortle continua a impressionar com sua determinação e habilidades excepcionais. Seja enfrentando desafios formidáveis ou fortalecendo laços com seus treinadores, Wartortle representa a essência da perseverança e lealdade. Com sua presença imponente e espírito destemido, ele continua a inspirar tanto treinadores quanto Pokémon ao redor do mundo, deixando uma marca indelével em cada batalha que enfrenta.</Text>
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Recursos Adicionais</Text>
          <Text style={styles.textosHyperlink} onPress={() => { Linking.openURL('https://www.pokemon.com/br/pokedex/wartortle'); }}> 
    Pokédex - Wartortle
  </Text> 
          <Text style={styles.textosHyperlink} onPress={() => { Linking.openURL('https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)'); }}> 
    Bulbapedia - Wartortle
  </Text> 
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Evoluções</Text>
          <View style={styles.alinharImagemPokemon}>
            <Pressable onPress={() => navigation.navigate("Squirtle")}>
              <Image source={require('../images/007.png')}/>
            </Pressable>
          </View>
          <Text style={styles.textosEvolucoes}>1. Squirtle</Text>
          <View style={styles.alinharImagemPokemon}>
            <Image source={require('../images/008.png')}/>
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
};

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
