import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, Linking, ScrollView, Dimensions } from 'react-native';
import styles from './Styles';
import axios from 'axios';

const RepositoryList = ({ route }) => {
  const { username } = route.params;
  const [repositories, setRepositories] = useState([]);
  const windowHeight = Dimensions.get('window').height;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });

        const updatedRepositories = response.data.map((repo) => {
          return {
            name: repo.name,
            lastActiveDate: repo.pushed_at,
            starCount: repo.stargazers_count,
            repoOwnerName: repo.owner.login,
            repoUrl: repo.html_url,
          };
        });

        setRepositories(updatedRepositories);
      } catch (error) {
        console.error('Error fetching repositories:', error.message);
      }
    };

    fetchData();
  }, [username]);

  const handleRepoClick = (repoUrl) => {
    Linking.openURL(repoUrl).catch((err) => console.error('Error opening URL:', err));
  };

  return (
    <ScrollView style={{ ...styles.repoContainer, height: windowHeight }}>
      <Text style={styles.repoName}>GitHub username: {username}</Text>
      <View>
        {repositories.map((repo) => (
          <View key={repo.name} style={styles.repoCard} >
            <Text style={styles.repoName}>{repo.name}</Text>
            <Text style={styles.repoBio}>{repo.lastActiveDate}</Text>
            <Text style={styles.repoBio}>Stars: {repo.starCount}</Text>
            <Text style={styles.repoBio}>Owned by {repo.repoOwnerName}</Text>
            <Pressable onPress={() => handleRepoClick(repo.repoUrl)} style={styles.repoLink}>
              <Text style={styles.repoLink}>{repo.repoUrl}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default RepositoryList;
