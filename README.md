# jokester

State management in Vuejs using Vuex. 
This project is build using vue create default babel + eslint options.

Vuex main components are Store, Mutations, and Actions.

The Store refers to the centralized object for the entire application that gives state to every component.

Mutations represent the only way to modify and update the store. Having these strict functions to modify state allows for predictable app behavior.

Actions resemble mutations, but differ in that they commit mutations. Actions are callable by other functions in order to signal a mutation to fire and update the store.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
