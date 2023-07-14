import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type Tweet = {
  id: string;
  content: string;
  createdAt: Date;
  likeCount: number;
  likedByMe: boolean;
  user: { id: string; image: string | null; name: string | null };
};

type Props = {
  tweets?: Tweet[];
  isLoading: boolean;
  isError: boolean;
  hasMore: boolean;
  fetchNewTweets: () => Promise<unknown>;
};

const InfiniteTweetList = (props: Props) => {
  if (props.isLoading) {
    return <h1>Loading</h1>;
  }

  if (props.isError) {
    return <h1>Error</h1>;
  }

  if (props.tweets == null) {
    return null;
  }

  if (props.tweets == null || props.tweets?.length === 0) {
    return (
      <h2 className="my-4 text-center text-2xl text-gray-500">No Tweets</h2>
    );
  }

  return (
    <ul>
      <InfiniteScroll
        dataLength={InfiniteTweetList.length}
        next={props.fetchNewTweets}
        hasMore={props.hasMore}
        loader={"Loading..."}
      >
        {props.tweets.map((tweet) => {
          return <div key={tweet.id}>{tweet.content}</div>;
        })}
      </InfiniteScroll>
    </ul>
  );
};

export default InfiniteTweetList;
