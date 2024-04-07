import React from 'react';
import {Animated, View} from 'react-native';
import styles from '../HomeScreenStyles';
import {Card} from '../../../ui/Card/Card';
import { IUser } from '../Discover';
import { Title } from '../../../ui/Title/Title';

export interface ISwipeCardChildren {
  item: IUser;
  swipe: Animated.ValueXY;
  isFirst: boolean;
  renderChoice: (swipe: any) => React.JSX.Element;
}

export const SwipeCardChildren = ({
  item,
  swipe,
  isFirst,
  renderChoice,
}: ISwipeCardChildren) => {
  return (
    <Card
      profileImg={item.profileImg}
      minWidth={350}
      maxHeight={500}
      minHeight={500}>
      <Card.Info style={styles.userInfo}>
        {isFirst && renderChoice(swipe)}
        <View>
          <Card.Title>
            <Title text={<>{item.name}, {item.age}</>} level="h3" />
          </Card.Title>
          <Card.Description>{item.description}</Card.Description>
          <Title text={<>{item.distance} away</>} level="h4" style={styles.userDuration} />
        </View>
      </Card.Info>
    </Card>
  );
};