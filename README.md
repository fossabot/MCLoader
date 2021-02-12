# MCLoader

Небольшой скрипт который поможет вам скачать ассеты и клиенты для Minecraft с официального зеркала Mojang

Для его работы требуется программная платформа Node.js  
Скачать её можно на [официальном сайте](https://nodejs.org/ru/)

## Использование

Перейти в раздел [Releases](https://github.com/AuroraTeam/MCLoader/releases) и скачать последнюю версию (файл `MCLoader.js`)  
Положить в любую папку и запускать командой `node MCLoader.js`

По умолчанию количество одновременно скачиваемых файлов равно 32 (для ассетов)  
Вы можете переопределить это в файле конфигурации `config.json` (значение `concurrency`)  
Файл создастся при первом запуске скрипта  
При указании большего количества, вам может попасться ошибка `connect ETIMEDOUT`  
В таком случае попробуйте удалить папку и скачать клиент/ассеты ещё раз, либо уменьшите количество одновременно скачиваемых файлов

## Лицензия

Данный скрипт содержит частично изменённый код проекта Aurora Launcher [LauncherServer](https://github.com/AuroraTeam/LauncherServer) 
распространяемый под лицензией GNU General Public License v3.0

Также сам скрипт аналогично распространяется по лицензии GNU General Public License v3.0

Использования частей кода как Aurora Launcher LauncherServer, так и данного скрипта без указания авторства **запрещено**!