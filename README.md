# simple_currency_app
Merupakan aplikasi yang menghitung jumlah kurs berdasarkan Rate USD.

Fitur yang dimiliki :

* Menambahkan daftar kurs berdasarkan kurs yang di pilih. Jika kurs sudah ada pada daftar maka kurs yang di pilih tidak akan di tambahkan.
* Update otomatis pada daftar kurs berdasrkan input base value.
* Menghapus daftar kurs.

Daftar Kurs yang mendukung :

* USD
* CAD
* IDR
* GBP
* CHF
* SGD
* INR
* MYR
* JPY
* KRW

## Installing

Menggunakan npm:

1. Install dependensi yang dibutuhkan
```bash
$ npm install
```

2. Jalankan Aplikasi
```bash
$ npm start
```

3. Buka browser akses localhost 
```bash
localhost:3000
```

Menggunakan Docker :

1. Build Docker Image

```bash
$ docker build -t simple_currency_app:dev .
```

2. Run docker container

```bash
$ docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true simple_currency_app:dev
```

3. Buka browser akses localhost 
```bash
localhost:3001
```

