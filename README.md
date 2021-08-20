# TrueLayer Tech Test - Pokedex

[Deployed Site](https://pokedex77345.gatsbyjs.io/)

## Installation and running the app

To install the app dependencies, please run:

```
yarn install
```

To start up a development server run:

```
yarn start
```

and navigate to 'http://localhost:8000/'.

To create a production build, run:

```
yarn build
```

To run the unit tests, run:

```
yarn test
```

Note about `npm` - I originally started the project with npm but ran into an error everytime I ran 'npm install'. The CLI output said a package was missing a dependancy and the missing dependancy wasn't a registered NPM package anymore. Concerned about time, I quickly switched to yarn.

## Dependencies used

### Search

#### fuse.js

'Fuse.js is a powerful, lightweight fuzzy-search library, with zero dependencies.`

Fuse.js is a package that allowed me to search my list of Pokémon and rank results by a relevance score using a modified implementation of the [Bitap](https://en.wikipedia.org/wiki/Bitap_algorithm) algorithm. The Bitap algorithm is an approximate string matching algorithm that detects whether a given text contains a substring which is 'approximately equal' to a given pattern. Because it uses bitwise operations, it's very performant.

Because this package was lightweight and fast I thought it was a great choice to integrate to maintain the great performance I was already getting from deploying my app statically with Gatsby.

#### lodash.debounce

I pulled in just the debounce method from the lodash library to take some of the load off the front-end having to update my Pokémon list repeatedly when a user is typing. Eventhough I'm not doing any dynamic fetching of data from GraphQL or an external API, I still think the performance benefit was worthwhile, and debouncing is common practice for search so I felt it was only right to include it.

### Styling

#### Sass

I used Sass to style my components as that's what I'm used to using whilst at Blackbullion, and it I was able to style my UI very quickly with it. I also saw on the TrueLayer website that you're using BEM naming for your own classes so I thought it would be easier for my reviewer.

### Testing

#### React Testing Library & Jest

Unit testing my components based on what the user sees and how the UI changes as they interact with the site.

## To-Do

- Write end-to-end tests with Cypress
- Add focus rings to Pokemon cards
- Add Pokeball spinner for loading state
- Add border to search bar for mobile as the box shadow isn't showing on IOS
- Fix list alignment on mobile
