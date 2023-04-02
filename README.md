## `next export` で生成した html を nginx で配信するサンプル

<br />

1. Build

```
docker build -t nginx -f nginx/Dockerfile .
```

2. Run

```
docker run -p 8080:80 nginx
```
