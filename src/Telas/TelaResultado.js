import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'
import axios from 'axios';
import API_KEY from '../API_KEY'

export default function TelaResultado({route}) {
  const escolha = route.params.escolha
  const link = `api.giphy.com/v1/${escolha}/search`
  const[textPesq,setTextPesq] = useSteate(" ")
  const[dados,setDados]=useState([])

  const solicitarDados = async (textPesq) =>{
    try{
      const resultado = await axios.get(link,{
        params:{
          api_key:API_KEY, 
          q:textPesq,
          lang: "pt"

        }
      })
      setDados(resultados.data.data)
  }catch(err){
    console.log(err)
  }
}

  return (
    <ImageBackground
      source = {require("../../assets/BG.png")}
      style={styles.container}
    >
      <view>
        <Ionicons name="chevron-back" size={40} color="white"onPress={()=>NavigationActivation.goback()}/>
        <TextInput 
        placeholder='digite sua pesquisa'
        autoCapitalize='none'
        autoCorrect={false}
        value={textPesq}
        onChargeText={(value)=>setTextPesq(value)}
        />
        <Ionicons name="search"
         size={40}
          color="white"
         onPress= {()=>solicitarDados(textPesq)}
         /> 
      </SafeAreaView>
      
      <FlatList
      data={dados}
      renderItem={({item})=>{
        return(
          <Text>{item.id}</Text>
        )
      }}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 
  },
  input: {
    flex:1,
    ImageBackground: 'white',
    borderRaius:10,
    paddingLeft:10
  }
});
