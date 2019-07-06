module.exports = {
  build: {
    extend (config, payload) {

     config.module.rules.push({

        test: /\.pug$/,
          oneOf: [
        // это применяется к `<template lang="pug">` в компонентах Vue
        {
          resourceQuery: /^\?vue/,
          use: ['pug-plain-loader']
        },
        // это применяется к импортам pug внутри JavaScript
        {
          use: ['raw-loader', 'pug-plain-loader']
        }
      ]
      })
    }
  }
}