import { useState } from "react"
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "./NewsContainerStyles"

const NewsContainer = () => {
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
      <ScrollView>
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
  )
}

export default NewsContainer