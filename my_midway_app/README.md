# midway

## egg-swagger-doc

```
//src/config/plugin.ts
// had enabled by midway
// exports.static = true;
export const swaggerdoc = {
  enable: true,
  package: 'egg-swagger-doc',
};
```

```
//src/config/config.default.ts
export = (appInfo: any) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533201820393_3738';

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-example-api',
      description: 'example for swaggerdoc',
      version: '1.0.0',
    },
    schemes: ['http'],
    enable: true,
    routerMap: false,
  };

  return config;
};

```

创建src/app/contract文件夹

https://www.npmjs.com/package/egg-swagger-doc

## 常见的请求方式
