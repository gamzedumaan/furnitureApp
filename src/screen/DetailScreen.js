import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const leftIcon = require("./../../assets/icon/left-arrow.png");
const chairProdct = require("./../../assets/images/pro_3.png");
const closeIcon = require("../../assets/icon/close.png");
const heartIcon = require("../../assets/icon/heart.png");
const starOne = require("../../assets/icon/star-h.png");
const starEmpty = require("../../assets/icon/star-l.png");

export default function DetailScreen({ route }) {
  const navigation = useNavigation();
  console.log(route);
  const addToCard = ({ item }) => {
    if (route.length <= 0) {
      [
        {
          route: item,
        },
      ];
    }
    navigation.navigate("AddToCard");

    console.log(route);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Image style={styles.iconLeft} source={leftIcon} />
          <Text style={styles.title}>Detail</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={chairProdct} />
        </View>
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            marginTop: "95%",
            zIndex: 1,
            marginLeft: "70%",
          }}
        >
          <TouchableOpacity activeOpacity={0.8} style={styles.heartContainer}>
            <Image
              resizeMode="contain"
              style={styles.heart}
              source={heartIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.closeContainer}>
            <Image
              resizeMode="contain"
              style={styles.heart}
              source={closeIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.starContainer}>
          <Text style={styles.ratingText}>Rating</Text>
          <View style={styles.starContainerTwo}>
            <Image
              style={styles.starOne}
              source={starOne}
              resizeMode="contain"
            />
            <Image
              style={styles.starOne}
              source={starOne}
              resizeMode="contain"
            />
            <Image
              style={styles.starOne}
              source={starOne}
              resizeMode="contain"
            />
            <Image
              style={styles.starOne}
              source={starEmpty}
              resizeMode="contain"
            />
            <Image
              style={styles.starOne}
              source={starEmpty}
              resizeMode="contain"
            />
          </View>
        </View>
        <View>
          <Text style={styles.name}>{route.params.name}</Text>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of.
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.price}>{route.params.price}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.addButton}>
              <Text>Add To Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyButton} onPress={addToCard}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    marginTop: 10,
  },
  iconLeft: {
    height: 25,
    width: 25,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
    top:2,
  },
  title: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 250,
  },
  ratingText: {
    fontSize: 14,
    opacity: 0.5,
    textAlign: "center",
    top: 2,
    letterSpacing: 1,
    right: 11,
  },
  starContainer: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
    marginTop: 5,
    width: "40%",
    justifyContent: "center",
  },
  starContainerTwo: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
    marginTop: 5,
  },
  imageContainer: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  starOne: {
    height: 13,
    width: 13,
    margin: 2,
  },
  heartContainer: {
    height: 30,
    width: 30,
    backgroundColor: "#feba4f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  closeContainer: {
    height: 30,
    width: 30,
    backgroundColor: "#feba4f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    left: 5,
  },
  heart: {
    height: 20,
    width: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
  },
  text: {
    marginTop: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    marginTop: "30%",
    height: 50,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  price: {
    fontSize: 22,
    fontWeight: "600",
  },
  addButton: {
    height: 40,
    width: 90,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00000030",
    marginLeft: 80,
  },
  buyButton: {
    height: 40,
    width: 90,
    backgroundColor: "#feba4f",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  buyButtonText: {
    fontSize: 10,
    color: "white",
    fontWeight: "600",
  },
});
