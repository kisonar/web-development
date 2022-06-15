# Web development

## Learning web stuff

### React JS

#### Installation
Use nvm


nvm install 18 => install nodejs 18
nvm --version => prints available
nvm current => prints current
#### Requirements
```
nodejs v17.3.1 
npm v8.3.0
```

```
Node.js v12.20.1.
npm 6.14.10
yarn add v1.22.5

npm install --global yarn
```

##### Initialization

##### When Proxy is used
```
npm config set proxy http://10.144.1.10:8080
npm config set https-proxy http://10.144.1.10:8080
npm config set strict-ssl false 
npm config set registry 'http://registry.npmjs.org'
yarn config set strict-ssl false 
```

##### Init itself
```
npx create-react-app marcin-react
```

##### Build
```
yarn install
yarn start => run development mode
yarn test
yarn build => build production
```