import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import {
  Body,
  Container,
  Header,
  Text,
  Title,
  View,
  Button,
  Left,
  Right
} from "native-base";

export default class HomePage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>HomePage</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.content}>
          <Button block onPress={this.navigateBtnClicked}>
            <Text>Navigate Page</Text>
          </Button>
        </View>
      </Container>
    );
  }

  navigateBtnClicked = () => {
    this.props.navigation.navigate("NavigatePage");
  };
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: Platform.Version >= 20 ? 0 : 24
      }
    })
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 32
  }
});
