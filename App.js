import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/screens/Deck';
const Data = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
];

export default function App() {
  const renderCard = (item) => {
    return (
      <View style={styles.conatiner} key={item.id}>
        <Card title={item.text}>
          <Image source={{ uri: item.uri }} style={styles.img} />
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            title="Swipe Now"
          />
        </Card>
      </View>
    );
  };

  const renderNoMoreCards = () => {
    return (
      <Card title="All Done">
        <Text style={{ marginBottom: 10 }}>
          There's is no more content there
        </Text>
        <Button backgroundColor="#03A9F4" title="Want More" />
      </Card>
    );
  };

  return (
    <Deck
      data={Data}
      renderCard={renderCard}
      renderNoMoreCards={renderNoMoreCards}
    />
  );
}

const styles = StyleSheet.create({
  img: {
    height: 180,
    width: '100%',
    marginBottom: 15,
  },
});
