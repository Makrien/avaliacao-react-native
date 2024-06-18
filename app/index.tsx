import { ScrollView, View } from "react-native";
import styles from "./styles";
import MainHeader from "./components/MainHeader/MainHeader";
import LowerHeader from "./components/LowerHeader/LowerHeader";
import UpperHeader from "./components/UpperHeader/UpperHeader";
import UpperFooter from "./components/UpperFooter/UpperFooter";
import LowerFooter from "./components/LowerFooter/LowerFooter";
import NewsContainer from "./components/NewsContainer/NewsContainer";

export default function Index() {
  return (
    <View style={styles.container}>
      <UpperHeader />
      <MainHeader />
      <LowerHeader />
      <NewsContainer />
      <UpperFooter />
      <LowerFooter />      
    </View>
  );
}
