import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons } from '@expo/vector-icons';
import { data } from '../config/data';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingBottom: 20, backgroundColor: '#0f0f0f' }}
    >
      <ScrollView
        indicatorStyle="white"
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {data.map((item) => (
          <View key={item.id}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ marginBottom: 14 }}
              onPress={() => navigation.navigate('DetailScreen', { item })}
            >
              <SharedElement id={`item.${item.id}.image_url`}>
                <Image
                  style={{
                    borderRadius: 14,
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                  }}
                  source={{ uri: item.image_url }}
                  resizeMode="cover"
                />
              </SharedElement>

              <View
                style={{
                  position: 'absolute',
                  bottom: 20,
                  left: 10,
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <SimpleLineIcons
                    size={40}
                    color="white"
                    name={item.iconName}
                  />
                  <View style={{ flexDirection: 'column', paddingLeft: 6 }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: 'bold',
                        lineHeight: 28,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                        lineHeight: 18,
                      }}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
