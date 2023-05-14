import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    borderRadius: 5,
    padding: 10,
    marjin: 5,
  },

  body: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderRadius: 5,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },

  price: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#696969',
    marginTop: 5,
  },

  stock: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
    marginTop: 5,
  },
});

export default styles;
