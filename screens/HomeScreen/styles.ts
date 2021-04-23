import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        width: 100,
        height: 170,
        borderRadius: 5,
        margin: 5,
    },
    title: {
        fontSize: 20
    },
    netflixLogo: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
        marginTop: 14
    },
    headerContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 100
    },
    headerActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 120,
        backgroundColor: 'transparent'
    },
    contentType: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    featuredContent: {
        backgroundColor: 'transparent'
    },
    genres: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        backgroundColor: 'transparent',
        padding: 12
    },
    featuredContentDetails: {
        position: 'absolute',
        height: 72,
        borderRightWidth: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        bottom: 0,
    },
    myListIcon: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    textButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
    },
    button: {
        backgroundColor: 'white'
    },
    features: {
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: 11,
        // paddingTop: 35,
        marginRight: 30,
        marginLeft: 48
    },
    playIcon: {
        height: 36,
        width: 88,
        borderRadius: 5,
        marginLeft: 16,
        marginRight: 8,
        // bottom: -1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default styles;