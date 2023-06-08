import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import PostItems from './PostItems';

export default function PostList() {
    const [posts, setPosts] = useState([
        {_id: 1, title: 'Post 1', body: 'Post 1 body', displayContent: false},
        {_id: 2, title: 'Post 2', body: 'Post 2 body', displayContent: false},
        {_id: 3, title: 'Post 3', body: 'Post 3 body', displayContent: false},
        {_id: 4, title: 'Post 4', body: 'Post 4 body', displayContent: false},
        {_id: 5, title: 'Post 5', body: 'Post 5 body', displayContent: false},
        {_id: 6, title: 'Post 6', body: 'Post 6 body', displayContent: false},
        {_id: 7, title: 'Post 7', body: 'Post 7 body', displayContent: false},
        {_id: 8, title: 'Post 8', body: 'Post 8 body', displayContent: false},
        {_id: 9, title: 'Post 9', body: 'Post 9 body', displayContent: false},
        {_id: 10, title: 'Post 10', body: 'Post 10 body', displayContent: false},
        {_id: 11, title: 'Post 11', body: 'Post 11 body', displayContent: false},
        {_id: 12, title: 'Post 12', body: 'Post 12 body', displayContent: false},
        {_id: 13, title: 'Post 13', body: 'Post 13 body', displayContent: false},
        {_id: 14, title: 'Post 14', body: 'Post 14 body', displayContent: false},
        {_id: 15, title: 'Post 15', body: 'Post 15 body', displayContent: false},
        {_id: 16, title: 'Post 16', body: 'Post 16 body', displayContent: false},
    ]);

    const toggleContent = (id) => {
        console.log(id);
        setPosts(
            posts.map(post => {
                if(post._id == id){
                    return {
                        ...post,
                        displayContent: !post.displayContent
                    }
                }

                return post;
            })
        )
    }

  return (
    <View>
        {/* {
            posts.map(post => (
                <View style={styles.article} key={post.id}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text>{post.body}</Text>
                </View>
            ))
        } */}

        <FlatList
            data={posts}
            numColumns={2}
            // horizontal={true}
            renderItem={({item}) => <PostItems item={item} toggleContent={toggleContent}/> }
            keyExtractor={item => item._id}
        />
    </View>
  )
}
