import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import {Content} from 'native-base';
import GlobalHeader from '../Components/GlobalHeader';

class SelectEvent extends Component {
    render() {
      return (
        <View style={Styles.container}>
            <GlobalHeader //Admin={true}
        //searchIcon={true}
        />
            <Content>
                <View style={Styles.rowOne}>
                    <View style={Styles.innerRowOne}> 
                        <Image style={Styles.iconRowOne} source ={require('../icons/SelectEvents.png')}/>
                        <Text style={Styles.TextRowOne}>Select Event </Text>
                    </View>
                </View>

                <View style={Styles.rowTwo}>
                  <View style={Styles.subRowTwo}>
                      <Text style={Styles.textRowTwo}> Selected Events</Text>
                  </View>      
                </View>

            </Content>
            
        </View>
      )
    }
}

export default SelectEvent
const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'rgb(248 ,248 ,248)'
    },
    rowOne:{
        justifyContent:'center',
        alignItems:'center',
        

    },
    iconRowOne:{
      height:40,
      width:40,
    },
    rowTwo:{
      width:'90%',

    }

});
