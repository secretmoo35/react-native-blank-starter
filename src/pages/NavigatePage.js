import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import {
  Body,
  Container,
  Header,
  Icon,
  Text,
  Title,
  View,
  Button,
  Left,
  Right
} from "native-base";

export default class NavigatePage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Navigate"
    };
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>NavigatePage</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.content}>
          <Text>It works.</Text>
        </View>
      </Container>
    );
  }
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
