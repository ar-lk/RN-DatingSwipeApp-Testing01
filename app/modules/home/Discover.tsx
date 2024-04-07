import React, { useCallback } from 'react';
import {Animated} from 'react-native';

import styles from './HomeScreenStyles';

// import { useUsersDiscover } from '../../hooks/useUsersDiscover';
import {UserActions} from './UserActions/UserActions';
import Choice from './Choice/Choice';
import {Swiper} from '../../components/swiper/Swiper';
import {SwipeCardChildren} from './SwipeCardChildren/SwipeCardChildren';

export interface IUser {
  id: number;
  profileImg: string;
  name: string;
  age: string;
  description: string;
  distance: string;
}

export interface IDiscover {
  peopleToDiscover: IUser[];
  updateDiscoverList: any;
}

export const Discover = ({peopleToDiscover, updateDiscoverList}: IDiscover) => {
  // const [interact, setInteract] = useState(peopleToDiscover);
  // const [users, setUsers] = useState(peopleToDiscover);

  const likeOpacity = (swipe: any) =>
    swipe.x.interpolate({
      inputRange: [25, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

  const nopeOpacity = (swipe: any) =>
    swipe.x.interpolate({
      inputRange: [-100, -25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

  const renderChoice = useCallback(
    (swipe: any) => (
      <React.Fragment>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.likeContainer,
            {opacity: likeOpacity(swipe)},
          ]}>
          <Choice type="like" />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.nopeContainer,
            {opacity: nopeOpacity(swipe)},
          ]}>
          <Choice type="nope" />
        </Animated.View>
      </React.Fragment>
    ),
    [],
  );

  const handleSwipeUserMatching = (
    swipe: Animated.ValueXY,
    prevState: IUser[],
  ) => {
    /* const isLike = Number(JSON.stringify(swipe.x)) > 0;
    const userIdReceiver = prevState?.[0]?.id;

    interact({
      interaction: isLike ? 'like' : 'reject',
      userIdReceiver,
      userIdTransmitter: 1,
    }); */
  };

  return (
    <Swiper<IUser>
      onSwipeUser={handleSwipeUserMatching}
      items={peopleToDiscover}
      setItems={updateDiscoverList}
      renderActionBar={handleChoice => (
        <UserActions
          onLike={() => handleChoice(1)}
          onReject={() => handleChoice(-1)}
        />
      )}>
      {(item, swipe, isFirst) => (
        <SwipeCardChildren
          item={item}
          swipe={swipe}
          isFirst={isFirst}
          renderChoice={renderChoice}
        />
      )}
    </Swiper>
  );
};
