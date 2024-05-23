import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Linking, TouchableOpacity, Pressable } from 'react-native';
import { Card } from 'react-native-paper';

export default Blastoise = ({navigation}) => {
  
  const [blastoiseData, setBlastoiseData] = React.useState(null);

  const fetchBlastoiseData = async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/blastoise/'
      );
      const data = await response.json();
      setBlastoiseData(data);
    } catch (error) {
      console.error('Erro ao buscar informações do Blastoise:', error);
    }
  };

  React.useEffect(() => {
    fetchBlastoiseData();
  }, []);

  const scrollViewRef = React.useRef();

  const voltarParaOTopo = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Informações sobre Blastoise</Text>
            {blastoiseData && (
              <>
                <View style={styles.alinharImagemPokemon}>
                  <Image style={styles.imagemPokemonInformacoes} source={{uri: blastoiseData.sprites.front_default}}/>
                </View>
                <Text style={styles.textoPokeTipo}>{`Blastoise é um Pokémon do tipo ${blastoiseData.types[0].type.name}`}</Text>
                <Text style={styles.textosMenores}>É um Pokémon da região de Kanto, sendo a evolução final do Squirtle.</Text>
              </>
            )}
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Características</Text>
          <Text style={styles.textosMenores}>Blastoise é conhecido por sua habilidade de lançar jatos de água com incrível precisão e força devastadora através dos canhões em seus braços, os quais são capazes de perfurar aço com facilidade.</Text>
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Curiosidades</Text>
          <Text style={styles.textosMenores}>🔎 Os poderosos canhões de água em seus braços podem atirar projéteis com precisão de até 50 metros de distância.</Text>
          <Text style={styles.textosMenores}>🔎 Blastoise é capaz de endurecer sua casca para resistir a ataques físicos e aumentar sua defesa durante batalhas.</Text>
          <Text style={styles.textosMenores}>🔎 Seus poderosos jatos de água são tão potentes que podem quebrar rochas maciças e derrubar árvores em um piscar de olhos.</Text>
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Blastoise: O Conquistador Aquático</Text>
          <Text style={styles.textosMenores}>Blastoise, a evolução final de Squirtle, é conhecido por sua presença imponente e poder incomparável. Equipado com canhões de água em seus braços, Blastoise dispara jatos de água com precisão e força devastadora, capazes de penetrar até os materiais mais resistentes, tornando-o um formidável oponente em batalhas aquáticas.</Text>
          <Text style={styles.textosMenores}>Além de seu ataque poderoso, Blastoise possui uma defesa formidável graças à sua casca dura. Ele pode endurecer ainda mais sua casca para aumentar sua defesa, garantindo uma resistência excepcional contra ataques físicos. Essa combinação de força e defesa faz de Blastoise uma escolha estratégica e confiável em qualquer confronto.</Text>
          <Text style={styles.textosMenores}>Com uma lealdade inabalável e um espírito protetor, Blastoise é mais do que apenas um poderoso combatente - ele é um amigo leal e um guardião dedicado. Sua disposição para enfrentar desafios e proteger seus treinadores o torna uma presença indispensável em todas as jornadas, estabelecendo-o como uma verdadeira lenda nos mares e além.</Text>
        </Card>
      </View>
      <View>
        <Card style={styles.card}>
          <Text style={styles.textosMaiores}>Recursos Adicionais</Text>
          <Text style={styles.textosHyperlink} onPress={() => { Linking.openURL('https://www.pokemon.com/br/pokedex/blastoise'); }}> 
    Pokédex - Blastoise
  </Text> 
          <Text style={styles.textosHyperlink} onPress={() => { Linking.openURL('https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)'); }}> 
    Bulbapedia - Blastoise
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
            <Pressable onPress={() => navigation.navigate("Wartortle")}>
              <Image source={require('../images/008.png')}/>
            </Pressable>
            <Text style={styles.textosEvolucoes}>2. Wartortle</Text>
          </View>
          <View style={styles.alinharImagemPokemon}>
            <Image source={require('../images/009.png')}/>
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