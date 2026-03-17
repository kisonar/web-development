# Web development

## Installation 

### nvm Node Version Manager
```
nvm install 18 => install nodejs 18
nvm --version => prints available
nvm current => prints current
nvm install --lts
nvm use v24.14.0
```

### npm
```
npm 
npm install --global yarn
npm config set proxy http://10.144.1.10:8080
npm config set https-proxy http://10.144.1.10:8080
npm config set strict-ssl false 
npm config set registry 'http://registry.npmjs.org'
yarn config set strict-ssl false 

npm init -y

TESTS
npm install --save-dev jest @types/jest ts-jest typescript
npm test

```

## Init 
```
npx create-react-app marcin-react
```

### Build
```
yarn
yarn install
yarn start => run development mode
yarn test
yarn build => build production

TODO: how to stop development mode?
```

###
``` 
npm start
npm run build
npm test
    Starts the test runner.
npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
```