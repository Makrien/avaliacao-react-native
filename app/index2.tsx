import { Button, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/Feather';
import { useState } from "react";
import heartIcon from '../src/assets/icons/heart-icon.png';
import copyIcon from '../src/assets/icons/copy-icon.png';
import userIcon from '../src/assets/icons/user-icon.png';
import notebookIcon from '../src/assets/icons/notebook-icon.png';
import cameraIcon from '../src/assets/icons/camera-icon.png';
import closedEyeIcon from '../src/assets/icons/close-eye-icon.png';
import newspaperIcon from '../src/assets/icons/newspaper-icon.png';
import lessonIcon from '../src/assets/icons/lesson-icon.png';
import dictionaryIcon from '../src/assets/icons/dictionary-icon.png';
import examIcon from '../src/assets/icons/exam-icon.png';
import filmIcon from '../src/assets/icons/film-icon.png';


export default function Index() {
  const [news, setNews] = useState([
    {
      "id": "1a2b3c",
      "headline": "プーチン大統領 「和平交渉は4州からウクライナ軍撤退が条件」",
      "date": "2024年6月14日 21時30分",
      "img": "https://www3.nhk.or.jp/news/html/20240614/K10014481521_2406142108_0614213050_01_02.jpg"
    },
    {
      "id": "7g8h9i",
      "headline": "ヤクルト 奥川恭伸が980日ぶり勝ち星 約2年ぶり登板で5回1失点",
      "date": "2024年6月15日 1時36分",
      "img": "https://www3.nhk.or.jp/news/html/20240615/K10014481671_2406150127_0615013632_01_02.jpg"
    },
    {
      "id": "0j1k2l",
      "headline": "バレーボール女子 パリオリンピックの出場権を獲得",
      "date": "2024年6月14日 15時39分",
      "img": "https://www3.nhk.or.jp/news/html/20240614/K10014481071_2406141437_0614144139_01_02.jpg"
    },
    {
      "id": "3m4n5o",
      "headline": "俳優 久我美子さん死去 93歳 映画「また逢う日まで」で名演",
      "date": "2024年6月14日 15時59分",
      "img": "https://www3.nhk.or.jp/news/html/20240614/K10014481061_2406141421_0614142911_01_02.jpg"
    },
    {
      "id": "6p7q8r",
      "headline": "京成電鉄 VS アクティビスト 株主の判断は？【経済コラム】",
      "date": "2024年6月14日 19時04分",
      "img": "https://www3.nhk.or.jp/news/html/20240614/K10014478811_2406141829_0614183021_01_02.jpg"
    },
    {
      "id": "9s0t1u",
      "headline": "創業95年の老舗銭湯 苦渋の決断 「やさしいお湯を最後まで」",
      "date": "2024年6月14日 20時15分",
      "img": "https://www3.nhk.or.jp/news/html/20240614/K10014479521_2406141143_0614121120_01_02.jpg"
    },
    {
      "id": "2v3w4x",
      "headline": "出血が止まらない 更年期だからと思ったら…子宮体がんだった",
      "date": "2024年6月14日 8時55分",
      "img": "https://www3.nhk.or.jp/news/html/20240614/K10014479731_2406132007_0613200857_01_02.jpg"
    },
    {
      "id": "5y6z7a",
      "headline": "日本118位の調査で15年連続世界一 アイスランドってどんな国？",
      "date": "2024年6月14日 19時39分",
      "img": "https://www3.nhk.or.jp/news/html/20240614/K10014481151_2406141803_0614180420_01_02.jpg"
    },
    {
      "id": "8b9c0d",
      "headline": "サッカー なでしこジャパン パリ五輪メンバー決定【全名簿】",
      "date": "2024年6月14日 22時54分",
      "img": "https://www3.nhk.or.jp/news/html/20240614/K10014480981_2406141607_0614160827_01_02.jpg"
    },
    {
      "id": "1e2f3g",
      "headline": "「たのしみ」 新たな歴史を刻む戦いへ 陸上 泉谷駿介",
      "date": "2024年6月14日 19時20分",
      "img": "https://www3.nhk.or.jp/news/html/20240614/K10014470181_2406141916_0614191750_01_02.jpg"
    }
  ]
  )

  return (
    <View style={styles.container}>
      <View style={styles.upperHeader}></View>

      <View style={styles.mainHeader}>
        <View style={styles.headerIconsContainer}>
          <Icon name="search" color="#fff" size={24}></Icon>
          <Icon name="history" color="#fff" size={24}></Icon>
        </View>
        <View style={styles.headerBtnContainer}>
          <TouchableOpacity activeOpacity={0.7} style={styles.easyBtn}>
            <Text style={styles.easyBtnText}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.difficultBtn}>
            <Text style={styles.difficultBtnText}>Difficult</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerIconsContainer}>
          <Icon name="audiotrack" color="#fff" size={24}></Icon>
          <Icon name="tune" color="#fff" size={24}></Icon>
        </View>
      </View>

      <View style={styles.lowerHeader}>
        <TouchableOpacity style={styles.dropdownBtn} activeOpacity={.7}>
          <Text style={styles.dropdownBtnText}>Source:</Text>
          <View style={styles.dropdownBtnInfo}>
            <Text style={styles.dropdownBtnQtd}>13</Text>
            <IconF name="chevron-down" color="#e3993c"></IconF>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.7}>
          <Image source={heartIcon} style={styles.lowerHeaderIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.7}>
        <Image source={userIcon} style={styles.lowerHeaderIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.7}>
        <Image source={copyIcon} style={styles.lowerHeaderIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownBtn} activeOpacity={.7}>
          <Text style={styles.dropdownBtnText}>Topic:</Text>
          <View style={styles.dropdownBtnInfo}>
            <Text style={styles.dropdownBtnQtd}>24</Text>
            <IconF name="chevron-down" color="#e3993c"></IconF>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.newsContainer}>
        <FlatList 
          data={news}
          keyExtractor={(item => item.id)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity activeOpacity={.7} style={styles.newsCard}>
                <View style={styles.imgHeadline}>
                  <Image
                    style={styles.newsImg}
                    source={{
                      uri: `${item.img}`,
                    }} 
                  />
                  <Text style={styles.headline}>{item.headline}</Text>
                </View>
                <View style={styles.newsInfo}>
                  <Text style={styles.newsInfoText}>「NHK」</Text>
                  <Text style={styles.newsInfoText}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </ScrollView>

      <View style={styles.footerRow1}>
        <TouchableOpacity style={styles.footerRow1Left} activeOpacity={.7}>
          <Image source={notebookIcon} style={styles.footerIcon} />
          <Text style={styles.footerRow1Text}>Notebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraIconContainer} activeOpacity={.9}>
          <Image source={cameraIcon} tintColor={'white'} style={styles.cameraIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerRow1Right} activeOpacity={.7}>
          <Image source={closedEyeIcon} style={styles.footerIcon} />
          <Text style={styles.footerRow1Text}>Furigana</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerRow2}>
          <TouchableOpacity style={styles.footerRow2Item} activeOpacity={.7}>
            <Image source={newspaperIcon} style={styles.footerRow2Icon} tintColor={'white'} />
            <Text style={styles.footerRow2Text}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerRow2Item} activeOpacity={.7}>
            <Image source={lessonIcon} style={styles.footerRow2Icon} tintColor={'white'} />
            <Text style={styles.footerRow2Text}>Lesson</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerRow2Item} activeOpacity={.7}>
            <Image source={dictionaryIcon} style={styles.footerRow2Icon} tintColor={'white'} />
            <Text style={styles.footerRow2Text}>Dictionary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerRow2Item} activeOpacity={.7}>
            <Image source={examIcon} style={styles.footerRow2Icon} tintColor={'white'} />
            <Text style={styles.footerRow2Text}>JLPT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerRow2Item} activeOpacity={.7}>
            <Image source={filmIcon} style={styles.footerRow2Icon} tintColor={'white'} />
            <Text style={styles.footerRow2Text}>More</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
