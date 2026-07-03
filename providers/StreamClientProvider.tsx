'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';

import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  console.log('Provider Rendered');

  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  console.log({
    isLoaded,
    user,
    API_KEY,
  });

  useEffect(() => {
    console.log('useEffect fired');

    if (!isLoaded) {
      console.log('Clerk not loaded');
      return;
    }

    if (!user) {
      console.log('No user');
      return;
    }

    if (!API_KEY) {
      console.log('Missing API KEY');
      return;
    }

    console.log('Creating Stream Client...');

    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: user.id,
        name: user.username || user.id,
        image: user.imageUrl,
      },
      tokenProvider,
    });

    console.log('Client Created');

    setVideoClient(client);

    return () => {
      client.disconnectUser();
    };
  }, [isLoaded, user]);

  if (!videoClient) {
    console.log('Waiting for videoClient...');
    return <Loader />;
  }

  console.log('Rendering children');

  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;