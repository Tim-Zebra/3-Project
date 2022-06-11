import React, { useState } from 'react'
import Post from '../Post/Post'
import { ColumnContainer, FeedHeaderContainer, CreatePostContainer, FeedContainer, ActivityHeader } from './ColumnTwo.styled'
import PostForm from '../Forms/PostForm'

// Imports Authorization
import Auth from '../../utils/auth';

// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
// Gets the Karma Post
import { GET_ALL_KARMAPOSTS } from '../../utils/queries';

export default function ColumnTwo() {
    // Queries Karma Post data
    // Sets hooks for data loading
    const { loading, data } = useQuery(GET_ALL_KARMAPOSTS);
    // Hook to refresh page
    const [refresh, setRefresh] = useState(false);

    const karmaPosts = data?.allKarmaPosts || [];

    if (!karmaPosts) {
        return null;
    }

    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    // Function to refresh page
    const refreshCard = () => setRefresh(!refresh);

    return (
        <ColumnContainer>
            <FeedHeaderContainer>
                <CreatePostContainer>
                    <PostForm />
                </CreatePostContainer>
                <ActivityHeader>
                    <p>Activity</p>
                </ActivityHeader>
            </FeedHeaderContainer>
            <FeedContainer>

                {karmaPosts.map((post) =>
                    <Post karmaPostData={post} key={post.id} refreshCard={refreshCard}/>
                )}

            </FeedContainer>
        </ColumnContainer>
    )
}