import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

const UserSearch = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const navigation = useNavigation();

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`, {
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'X-GitHub-Api-Version': '2022-11-28',
                },
            });

            setUserData(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setUserData(null);
            setError('User not found. Please enter a valid GitHub username.');
        }
    };

    const handleRepoCountPress = () => {
        if (userData) {
            navigation.navigate('RepositoryList', { username: userData.login });
        }
    };

    return (
        <View style={[styles.container, { justifyContent: userData || error ? 'flex-start' : 'center' }]}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter GitHub username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    selectionColor={'rgb(120 63 194)'}
                />
                <Pressable style={styles.button} onPress={handleSearch}>
                    <Text style={styles.buttonText}>Search</Text>
                </Pressable>
            </View>
            {error ? (
                <Text style={styles.errorMessage}>{error}</Text>
            ) : userData ? (
                <View style={styles.userContainer}>
                    <Text style={styles.userName}>{userData.login}</Text>
                    <Image source={{ uri: userData.avatar_url }} style={styles.userImage} />
                    <Text style={styles.userBio}>{userData.name}</Text>
                    <Text style={styles.userBio}>{userData.bio}</Text>
                    <Pressable onPress={handleRepoCountPress} style={styles.repoCount}>
                        <Text style={styles.repoCount}>Public Repositories: {userData.public_repos}</Text>
                    </Pressable>
                    <Text style={styles.userBio}>Followers: {userData.followers}</Text>
                </View>
            ) : null}
        </View>
    );
};

export default UserSearch;
