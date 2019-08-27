# blue-filters

1. Стили инлайнированы вручную в секции <head> в файлах
- themes/starter/layouts/_default/baseof.html
- layouts/no-sidebar/single.html
- layouts/no-sidebar/list.html
- надо еще в layouts/right-sidebar/single.html, но я забыл

2. *npm run build* поломалась
- запустить npm run dev из папки *themes/starter/*
- css обжимается [онлайн](https://www.minifier.org/) из папки /themes/starter/static/dist/app.css
- именно в эту папку webpack складывает скомпиленный js и css
- однако app.js оттуда лучше не использовать. Нормальный index.js лежит в папке /themes/starter/src/js/index.js


3. процесс разработки
  1. запустить **npm run dev** в папке *themes/starter/* в через терминал
    - это запустит webpack в режим прослушивания изменений в файлах css и js в пути /themes/starter/static/dist/
  2. запустить **hugo server -D** в корне в отдельном окне терминала
  
4. забыл добавить метрику в index.js

5. [Производительность](https://www.webpagetest.org) после джумлы
  Настройки: server Warsaw, 3G Fast
  
| Характеристика| Было         | Стало         |
| ------------- |:-------------:|:-------------:|
| LoadTime      | 9.130 s       |1.847 s        |
| StartRender   | 2.900 s       |1.200 s        |
| TTFB          | 0.990 s       |0.767 s        |
| Doc           | 212 ms        |55 ms          |

**Где:**
Doc - время ответа сервера, замеряемое во вкладке Chrome Dev Tools → Network → Doc

