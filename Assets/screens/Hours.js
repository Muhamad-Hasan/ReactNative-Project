import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";


class Hours extends Component {
    render() {
      return (
        <View style={Styles.container}>

            <View style={Styles.header}>

            </View>

            <View style={Styles.body}>
                <View style={Styles.subbody}>
                    <Image style={Styles.icon} source={require('../Photos/Hours.png')} />
                    <View style={{marginLeft:10}}>
                        <Text style={Styles.textStyle}> Hours Worked</Text>
                    </View>
                    
                </View >
                
            </View>
            <View style={Styles.row}>
                <View style={Styles.secondRow}>
                        <Text style={{marginLeft:15,fontSize:25 , marginTop:8 ,color:'rgb(47, 77, 101)'}}>Today</Text>
                </View>

                <View style={Styles.thirdRow}>
                    <Text style={Styles.thirdRowText}>08:25:21</Text>
                    <View style={Styles.subRow}>
                    
                        <Text style={{marginLeft:15,fontSize:20 , marginTop:8 ,color:'rgb(47, 77, 101)'}}>This Week</Text>
                    </View>
                </View>

                <View style={Styles.thirdRow}>
                    <Text style={Styles.thirdRowText}>31:55:00</Text>
                    
                </View>


            </View>
        </View>
      )
    }
}

export default Hours;

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'rgb(248,248, 248)'
    },
    body:{
        height:'20%',
        justifyContent: "center",
        alignItems:'center',
        

    },
    header:{
        height:'10%',
        backgroundColor:'grey',

    },
    icon:{
        height:80,
        width:80
    },
    subbody:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    textStyle:{
        fontSize:30,
        color:'rgb(47 ,77 ,101)',
        
    },
    secondRow:{
        width:'90%',
        backgroundColor:'rgb(255 ,255 ,255)',
        
    },
    row:{
        width:'100%',
        alignItems:'center'
    },
    thirdRow:{
        marginTop:5,
        width:'90%',
        backgroundColor:'rgb(255 ,255 ,255)',
        height:'30%',
        justifyContent:'center',
        alignItems:'center'

    },
    thirdRowText:{
        fontSize:40,
        color:'rgb(47, 77, 101)',
        fontWeight:'bold'
    },
    subRow:{
        width:'100%',
        position:'relative',
        top:25

    }


});