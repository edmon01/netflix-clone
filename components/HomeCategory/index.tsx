import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList, } from 'react-native';

import { Text, } from '../../components/Themed';

import styles from './styles';

interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }
}
const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <TouchableOpacity><Image style={styles.image} source={{ uri: item.poster }} /></TouchableOpacity>
                )}
                horizontal={true} />
        </>
    );
}
export default HomeCategory;

