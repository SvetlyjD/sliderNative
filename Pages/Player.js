import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import tw from 'tailwind-react-native-classnames';

const tracks = [
  {
    id: 1,
    url: require('./tracks/tq1.mp3'),
    title: 'tq1',
  },
  {
    id: 2,
    url: require('./tracks/tq2.mp3'),
    title: 'tq2',
  },
];

TrackPlayer.updateOptions({
  stopWithApp: true,
  capabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  ],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  ],
});

const Player = () => {
  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setUpTrackPlayer();

    return () => TrackPlayer.destroy();
  }, [tracks]);

  return (
    <View>
      <View style={tw`flex`}>
        <TouchableOpacity
          style={tw`flex mt-2 ml-2 w-20 h-10 bg-red-300`}
          onPress={() => TrackPlayer.pause()}>
          <Text style={tw`mt-2 text-center`}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex mt-2 ml-2 w-20 h-10 bg-red-300`}
          onPress={() => TrackPlayer.play()}>
          <Text style={tw`mt-2 text-center`}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex mt-2 ml-2 w-20 h-10 bg-red-300`}
          onPress={() => TrackPlayer.skipToPrevious()}>
          <Text style={tw`mt-2 text-center`}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex mt-2 ml-2 w-20 h-10 bg-red-300`}
          onPress={() => TrackPlayer.skipToNext()}>
          <Text style={tw`mt-2 text-center`}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;
