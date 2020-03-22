import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Header, Left, Right } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    {
      /* <GlobalHeader
        //Admin={true}
        //searchIcon={true}
        /> */
    }

    return (
      <Header
        style={{
          backgroundColor: "#002144",
          alignItems: "center",
          elevation: 0
        }}
      >
        {this.props.Admin == true ? (
          <Left
            style={{
              flex: 1,
              marginLeft: 5
            }}
          >
            <Image
              style={{ width: "50%", height: 30, resizeMode: "contain" }}
              source={require("../../assets/icons/Admin.png")}
            />
          </Left>
        ) : (
          <Left
            style={{
              flex: 1,
              marginLeft: 5
            }}
          >
            <Image
              style={{ width: "50%", height: 30, resizeMode: "contain" }}
              source={require("../../assets/icons/User.png")}
            />
          </Left>
        )}

        <Right>
          <Image
            style={{
              width: "50%",
              resizeMode: "contain"
            }}
            source={require("../../assets/images/Headerimg.png")}
          />
        </Right>
        {this.props.searchIcon == true ? (
          <Right style={{ position: "absolute", right: 20 }}>
            <TouchableOpacity>
              <MaterialIcons name="search" size={30} color="white" />
            </TouchableOpacity>
          </Right>
        ) : null}
      </Header>
    );
  }
}
