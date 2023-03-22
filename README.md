# Blanchard
Веб-сайт для картинной галереи BLANCHARD. Адаптивная кроссбраузерная вёрстка под мобильные устройства. Используются плагины : Swiper, Just Validate, JQuery UI, Yandex Map, SimpleBar Js, Choices JS, Inputmask Js

По большому счёту данная работа - это проекция реального заказа, где клиент хочет получить полноценный лендинг для своей картинной галереи, который будет хорошо смотреться на всех устройствах и разрешениях, иметь неплохой функционал. И конечно же не забудем о доступности.

![blancard](https://ltdfoto.ru/images/2023/03/22/Free_Version.png)

Важной частью проекта является адаптивность выполненной вёрстки

<br/>

![blancard](https://ltdfoto.ru/images/2023/03/22/12322.jpg)

<br/>

Помимо базовых JS CSS и HTML, я удачно применил эти плагины. Swiper в секциях hero, gallery, events, projects. JQuery accordion отлично реализовал задумку дизайнера в блоке Catalog. Choices  подошёл для создания выпадающего меню в галерее. Simplebar используется в дропдаунах header. Just Validate обеспечил нужную реализацию функционала для формы отправки заявки, а Tippy - это очень простые и удобные тултипы в секции projects. И конечно яндекс карты куда без них.

<br/>

![blancard](https://ltdfoto.ru/images/2023/03/22/24124.jpg)

<br/>

Header реализован двумя блоками. Верхний это навигация с якорными ссылками, а на меньших разрешениях бургер и форма поиска. Нижний - меню дропдаунов со стилями и авторами. Hero же реализован как автоматический background slider 

Одна из проблем блока - полупрозрачное скругление бордера формы поиска в Safari. Как это починить? Просто обнуляем стили для инпута

<br/>

![blancard](https://ltdfoto.ru/images/2023/03/22/afsgdhfjgh.jpg)

<br/>

Также тут необходимо было решить проблему с разным отображением формы поиска для мобильных версий. Что здесь стоит использовать? На мой взгляд это простая функция определения ширины экрана и записи ее в переменную для проверки условия

<br/>

![blancard](https://ltdfoto.ru/images/2023/03/22/fadsgfdh.jpg)

<br/>

Галерея - выпадающий список через Choices, известные всем чекбоксы через псевдоэлементы и слайдер. Как сделать адаптивное изображение внутри слайдера? Да просто, используй тег picture и все получится. Аналогично изображения реализованы и в модальном окне.

<br/>

![blancard](https://ltdfoto.ru/images/2023/03/22/sdfsfsdfsd.jpg)

<br/>

Открытие нужного окна по клику с помощью  data атрибутов, функция закрытия по нажатию вне блока, закрытие по клику на close button и escape всё это чистый JS.

<br/>

![blancard](https://ltdfoto.ru/images/2023/03/22/sdgsdgsdg.jpg)

<br/>

Главный функционал этого блока также написан на JS. Функция табов из учебной программы решает все вопросы. Используя атрибут data-path и data-target получаем функцию переключения на нужную страну и художника. Плавный переход из display none реализован с помощью Jquery. Внутри таба встроен Jquery accordion, который необходимо рефрешить после каждого переключения таба, чтобы высота блока была актуальной

<br/>

![blancard](https://ltdfoto.ru/images/2023/03/22/defsfsdgsg.jpg)

<br/>

Карточки событий это тоже слайдер, на мобильной версии количество видимых карточек уменьшается. А Тултипы реализованы с помощью удобного Tippy JS

<br/>

![blancard](https://ltdfoto.ru/images/2023/03/22/qwerty.jpg)

<br/>

Фокус с карточками партнеров в использовании свойств filter и opacity, таким образом при наведении карточка возвращает изначальный цвет

<br/>

![blancard](https://ltdfoto.ru/images/2023/03/22/tryuiop.jpg)

<br/>

Также Safari не обошёл стороной и этот Input. Border на мобильных устройствах игнорировал заданный border-radius. Как это починить? Правильно сбросить стили и обнулить border-radius 

<br/>

![blancard](https://ltdfoto.ru/images/2023/03/22/sdgsvc.jpg)

<br/>

Что в итоге. В совокупности это все рабочий сайт для картинной галереи, реализованный по современным стандартам Web-разработки.

