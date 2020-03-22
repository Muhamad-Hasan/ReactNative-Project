import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import Globalbutton from "../Components/Globalbutton";
import GlobalHeader from "../Components/globalHeader";

class Hotel extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.image}>
            <Image source={require('../Photos/img3Top.png')}/>
        </View>

      </View>
    )
  }
}

export default Hotel;

const Styles = StyleSheet.create({
    container: {
      flex: 1
    },














    


});  
