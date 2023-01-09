import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import imgHeader from "./Image/123.png";
import imgSidebar from "./Image/project.png";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={imgHeader} width="100%" height="450px" alt="Header" />
      <div className="Main-content">
        <div
          className="content"
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <h4>Интересные факты о книгах</h4>
            <p>
              Первые книги, судя по археологическим находкам, появились более
              двух тысяч лет назад. Они были изготовлены из дерева и воска.
            </p>
            <p>
              Тем не менее, существует ещё более древняя книга — рукопись
              Присса, которой около пяти с половиной тысяч лет. Она написана на
              папирусе.
            </p>
            <p>
              Всего на Земле около 130 миллионов книг. Имеется в виду количество
              произведений всех видов, а не экземпляров самих книг.
            </p>
            <p>
              Самая таинственая книга — рукопись Войнича. Этот средневековый
              манускрипт, судя по всему, описывающий какие-то растения, до сих
              пор не расшифрован. Он написан на несуществующем языке, и растений
              таких на Земле тоже, кстати, нет. До сих пор кипят споры о
              происхождении книги, и версии выдвигаются самые разные.
            </p>
            <p>
              «Лестерский кодекс» за авторством Леонардо да Винчи — одна из
              самых дорогих в мире книг. Она была продана Биллу Гейтсу на
              аукционе за фантастическую сумму в 24 млн долларов. Любопытен тот
              факт, что книга написана зеркально, то есть необходимо вооружиться
              зеркалом, чтобы её прочесть.
            </p>
            <p>
              Многие знают «Сказки тысячи и одной ночи», но мало кто в курсе,
              что в первоначальной версии этих сказок Аладдин был не арабом, а
              китайцем.
            </p>
            <p>
              Книга Л. Кэрролла «Алиса в стране чудес» запрещена в Китае из-за
              наличия в ней говорящих животных.
            </p>
            <p>
              В библиотеке знаменитого Гарварда имеется четыре книги, написанные
              на пергаменте из человеческой кожи.
            </p>
            <p>
              В «Путешествии Гулливера» некоторые законы небесной механики, в
              частности, размеры спутников Марса и особенности их вращения
              вокруг материнской планеты были описаны за добрую сотню лет до
              того, как то же самое заявили астрономы. Вот такой вот
              таинственный факт.
            </p>
            <p>
              В книгах Шекспира слово «любовь» встречается почти ровно в десять
              раз чаще, чем слово «ненависть».
            </p>
            <p>
              У «Робинзона Крузо» есть продолжение. В нём описано приключение
              того же главного героя, который терпит очередное кораблекрушение,
              в результате чего оказывается вынужден долгие месяцы добираться
              домой по суше, в частности, по территории России.
            </p>
            <p>
              За всё время существования печатного дела во всём мире было издано
              около двух миллиардов книг.
            </p>
            <p>
              Первым литературным романом считается японская «Повесть о Гэндзи»,
              написанная более тысячи лет назад.
            </p>
            <p>
              Самая популярная книга в мире — Библия. Вторая по популярности —
              сборник цитат Мао Цзедуна (благодаря популярности в Китае), а
              третья — Властелин Колец.
            </p>
            <p>
              Самые плодовитый в мире автор — Барбара Картленд, публиковавшая в
              среднем по два новых романа в месяц.
            </p>
          </div>
        </div>
        <div className="Sidebar">
          <p style={{ margin: "0px 160px" }}>Бестселлеры</p>
          <img
            src={imgSidebar}
            width="450px"
            height="100%"
            onClick={() => navigate("/products?q=")}
            alt="бестселлеры"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
