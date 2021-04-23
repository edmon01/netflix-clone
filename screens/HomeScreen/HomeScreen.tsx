import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, Button } from 'react-native';
import { Fontisto, MaterialIcons, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { Text, View, } from '../../components/Themed';

import styles from './styles';

import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

const firstCategory = categories.items[1];

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.netflixLogo}>
                    <View>
                        <Fontisto name="netflix" size={36} color="red" />
                    </View>
                    <View style={styles.headerActions}>
                        <TouchableOpacity>
                            <MaterialIcons name="connected-tv" size={22} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="search" size={22} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="profile" size={22} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentType}>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 16 }}>TV Shows</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 16 }}>Movies</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 16 }}>My List</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.featuredContent}>
                        <Image style={{ height: 438, width: 372 }}
                            source={{ uri: 'https://freegametips.com/wp-content/uploads/2021/02/1613297795_The-20-best-NETFLIX-anime-series-2021-1024x576.jpg' }} />
                        <View style={styles.featuredContentDetails}>
                            <View style={styles.genres}>
                                <View style={{ marginRight: 2 }}>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 12 }}>Exciting
                                    <Entypo name="dot-single" size={10} color="red" />
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12 }}>Fantasy Anime
                                    <Entypo name="dot-single" size={10} color="red" />
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12 }}>Action Anime
                                    <Entypo name="dot-single" size={10} color="red" />
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12 }}>Ensemble
                                    <Entypo name="dot-single" size={10} color="red" />
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12 }}>Shounen
                                    <Entypo name="dot-single" size={10} color="red" />
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12 }}>Goofy
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.features}>
                                <View>
                                    <TouchableOpacity>
                                        <Ionicons name="ios-add-outline" size={22} color="white" />
                                        <Text style={{ fontSize: 15, marginLeft: -10 }}>My List</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <View style={styles.playIcon}>
                                            <Ionicons name="ios-play-sharp" size={24} color="black" />
                                            <Text style={{ fontSize: 17, color: 'black', padding: 8 }}>Play</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <MaterialIcons name="info-outline" size={22} color="white" />
                                    <Text style={{ fontSize: 15, marginRight: 27 }}>Info</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{ height: 24, backgroundColor: 'gray' }}></View> */}
                </View>
                <View style={{ marginTop: 40 }}>
                    {categories.items.map(item => <HomeCategory key={item.id} category={item} />)}
                </View>
            </ScrollView>
        </View >
    );
}

export default HomeScreen;

