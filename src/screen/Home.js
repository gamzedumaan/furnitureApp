import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";

import Products from "../../Products.json";

const profileIcon = require("./../../assets/icon/Profile.png");
const addIcon = require("./../../assets/icon/add.png");
const chairProdct = require("./../../assets/images/pro_3.png");
const chairProdcts = require("./../../assets/images/pro_5.png");

export default function Screen1({ navigation }) {
  const CATEGORY = [
    {
      id: 1,
      text: "Living Room",
    },
    {
      id: 2,
      text: "Kitchen & Dining",
    },
    {
      id: 3,
      text: "Living Room",
    },
    {
      id: 4,
      text: "Kitchen & Dining",
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.tabSection}>
          <Text style={styles.topText}>Discover</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              resizeMode="contain"
              style={styles.Icon}
              source={profileIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <ScrollView horizontal>
            {CATEGORY.map((items, index) => {
              return (
                <Pressable
                  key={index}
                  style={({ pressed }) => [
                    styles.categoryArea,
                    pressed && { opacity: 8, backgroundColor: "#F5E8DD" },
                  ]}
                >
                  <Text style={styles.categoryText}>{items.text}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.productStyle}>
          <FlatList
            data={Products}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    marginBottom: 40,
                    margin: 6,
                  }}
                  activeOpacity={0.8}
                >
                  <View style={{ backgroundColor: "#f1f1f1" }}>
                    <Image
                      resizeMode="contain"
                      source={chairProdcts}
                      style={styles.leftImage}
                    />
                  </View>
                  <View
                    style={{
                      height: 35,
                      justifyContent: "flex-end",
                    }}
                  >
                    <View style={styles.infoArea}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.addButton}
                        onPress={() =>
                          navigation.navigate("DetailScreen", item)
                        }
                      >
                        <Image
                          resizeMode="contain"
                          style={styles.bagIcon}
                          source={addIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.infoTitle}>{item.name}</Text>
                      <Text style={styles.infoColor}>{item.color}</Text>
                      <Text style={styles.infoPrice}>{item.price}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <FlatList
            data={Products}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    marginBottom: 40,
                    margin: 6,
                  }}
                  activeOpacity={0.8}
                >
                  <View style={{ backgroundColor: "#f1f1f1" }}>
                    <Image
                      resizeMode="contain"
                      source={chairProdct}
                      style={styles.leftImage}
                    />
                  </View>
                  <View
                    style={{
                      height: 35,
                      justifyContent: "flex-end",
                    }}
                  >
                    <View style={styles.infoArea}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.addButton}
                        onPress={() =>
                          navigation.navigate("DetailScreen", item)
                        }
                      >
                        <Image
                          resizeMode="contain"
                          style={styles.bagIcon}
                          source={addIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.infoTitle}>{item.name}</Text>
                      <Text style={styles.infoColor}>{item.color}</Text>
                      <Text style={styles.infoPrice}>{item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
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
    width: "95%",
    alignSelf: "center",
  },
  Icon:{
    width: 20,
    height: 20,
  },
  bagIcon: {
    width: 30,
    height: 30,
  },
  tabSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topText: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  categoryArea: {
    padding: 7,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCF2F1",
    marginRight: 7,
  },
  categoryText: {
    color: "black",
  },
  addButton: {
    position: "absolute",
    right: 15,
    top: -210,
  },
  productStyle: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 10,
  },
  leftImage: {
    width: "100%",
    height: 230,
  },
});
