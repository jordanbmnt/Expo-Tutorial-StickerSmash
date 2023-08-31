import { StyleSheet, View, Image } from "react-native";

export default ImageViewer = ({ placeholderImage }) => (
    <Image style={styles.image} source={placeholderImage} />
);

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
