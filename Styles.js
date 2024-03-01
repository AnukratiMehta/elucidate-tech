import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fdf2f8',
    },

    screenHeader: {
        color: '#783fc2',
    },

    input: {
        height: 40,
        borderColor: '#783fc2',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },

    button: {
        backgroundColor: '#783fc2',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    errorMessage: {
        marginTop: 30,
        fontSize: 16,
        textAlign: 'center',
    },

    userContainer: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#fdf2f8',
        paddingBottom: 30
    },

    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#922372',
    },

    userImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 10,
    },

    userBio: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        color: '#783fc2',
        alignSelf: 'flex-start',
        paddingLeft: 16,
    },

    repoCount: {
        alignSelf: 'flex-start',
        paddingLeft: 8,
        fontSize: 16,
        color: '#922372',
        marginBottom: 3,
        marginTop: 3,
    },

    repoContainer: {
        paddingHorizontal: 20,
        backgroundColor: '#fdf2f8',
    },

    miniContainer: {
        paddingVertical: 20,
    },

    repoCard: {
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'start',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#783fc2',
        margin: 15,
    },

    repoName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#922372',
        marginVertical: 10,
        alignSelf: 'center',
    },

    repoBio: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
        color: '#783fc2',
    },

    repoLink: {
        fontSize: 16,
        color: '#922372',
        marginBottom: 3,
        marginTop: 3,
    },

    settingsContainer: {
        alignSelf: 'center',
        marginTop: 50,
    },

    settingsLabel: {
        color: '#922372'
    },

    settingsToggle: {
        alignSelf: 'center',
    },
});

export default styles;
