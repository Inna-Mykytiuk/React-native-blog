import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const Map = ({ navigation, route }) => {
  // console.log("route.params.location", route.params.location);
  // const { longitude, latitude } = route.params.location;

  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({
        tabBarStyle: {
          display: "flex",
          height: 83,
          paddingTop: 9,
          boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
          paddingLeft: 45,
        },
      });
    };
  });
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.102464818883,
          longitude: 30.638712344205217,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            latitude: 50.102464818883,
            longitude: 30.638712344205217,
          }}
          title='travel photo'
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
