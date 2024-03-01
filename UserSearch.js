import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Image, Switch, ScrollView, Dimensions, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

const windowHeight = Dimensions.get('window').height;

const UserSearch = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchData, setSearchData] = useState({ userData: null, error: null });
    const [useCustomBackend, setUseCustomBackend] = useState(false);
    const navigation = useNavigation();

    const resetSearch = () => {
        setSearchInput('');
        setSearchData({ userData: null, error: null });
    };

    const handleSearchResponse = (response) => {
        setSearchData({ userData: response.data, error: null });
    };

    const handleSearchError = (error) => {
        console.error('Error fetching user data:', error);
        setSearchData({ userData: null, error: 'User not found. Please enter a valid username or user ID.' });
    };

    const handleSearch = async () => {
        try {
            const apiUrl = useCustomBackend
                ? `http://localhost:3000/users/${searchInput}` 
                // @Mohit Please replace localhost with the IP address of the machine you are running the server in to see the data on Android

                : `https://api.github.com/users/${searchInput}`;

            const response = await axios.get(apiUrl, {
                headers: {
                    'Accept': useCustomBackend ? 'application/json' : 'application/vnd.github+json',
                    'X-GitHub-Api-Version': '2022-11-28',
                },
            });

            handleSearchResponse(response);
        } catch (error) {
            handleSearchError(error);
        }
    };

    const handleRepoCountPress = () => {
        if (searchData.userData) {
            navigation.navigate('RepositoryList', { username: searchData.userData.login });
        }
    };

    const handleSwitchToggle = (value) => {
        setUseCustomBackend(value);
        resetSearch();
    };

    return (
        <ScrollView contentContainerStyle={[styles.container, { justifyContent: searchData.userData || searchData.error ? 'flex-start' : 'center', minHeight: windowHeight }]}>
            <View style={[styles.container, { justifyContent: searchData.userData || searchData.error ? 'flex-start' : 'center' }]}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, Platform.OS === 'web' && { outlineStyle: 'none' }]}
                        placeholder={useCustomBackend ? "Enter User ID" : "Enter Username"}
                        value={searchInput}
                        onChangeText={setSearchInput}
                        selectionColor={'rgb(120 63 194)'}
                    />
                    <Pressable style={styles.button} onPress={handleSearch}>
                        <Text style={styles.buttonText}>Search</Text>
                    </Pressable>
                </View>
                <View style={styles.settingsContainer}>
                    <Text style={styles.settingsLabel}>Use Custom Backend</Text>
                    <Switch
                        value={useCustomBackend}
                        trackColor={{false: '#d3d3d3', true: '#CCB7E9'}}
                        thumbColor={useCustomBackend ? '#783fc2' : 'gray'}
                        activeThumbColor={'#783fc2'}
                        onValueChange={handleSwitchToggle}
                        style={[styles.settingsToggle, Platform.OS === 'web' && { marginTop: 5 }]}
                    />
                </View>
                {searchData.error ? (
                    <Text style={styles.errorMessage}>{searchData.error}</Text>
                ) : searchData.userData ? (
                    <View style={styles.userContainer}>
                        <Text style={styles.userName}>{searchData.userData.login}</Text>
                        <Image source={{ uri: searchData.userData.avatar_url }} style={styles.userImage} />
                        <Text style={styles.userBio}>{searchData.userData.name}</Text>
                        {useCustomBackend ? (
                            <>
                                <Text style={styles.userBio}>{searchData.userData.socialHandles}</Text>
                                <Text style={styles.userBio}>{searchData.userData.email}</Text>
                            </>
                        ) : (
                            <>
                                <Text style={styles.userBio}>{searchData.userData.bio}</Text>
                                <Pressable onPress={handleRepoCountPress} style={styles.repoCount}>
                                    <Text style={styles.repoCount}>Public Repositories: {searchData.userData.public_repos}</Text>
                                </Pressable>
                                <Text style={styles.userBio}>Followers: {searchData.userData.followers}</Text>
                                <Text style={styles.userBio}>Following: {searchData.userData.following}</Text>

                            </>
                        )}
                    </View>
                ) : null}
            </View>
        </ScrollView>
    );
};

export default UserSearch;
