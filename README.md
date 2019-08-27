# blue-filters

1. Стили инлайнированы вручную в файлах
- themes/starter/layouts/_default/baseof.html
- loyouts/right-sidebar/single.html
- loyouts/right-sidebar/list.html

2. *npm run build* поломалась
- запустить npm run build из папки *themes/starter/*
- css обжимается [онлайн](https://www.minifier.org/) из папки /themes/starter/static/dist/app.css
- именно в эту папку webpack складывает скомпиленный js и css
- однако app.js оттуда лучше не использовать. Нормальный лежит в папке
- /themes/starter/src/js

