# theater_front

> Personal Blog With Concept: Theater

## Introduction

This is the front-side of my Blog Application.
You can check out the [Backend-side](https://github.com/nant0313/theater_back) also. 
  
## Development

### Built With

React(Hooks, Styled-Components, Context API), Manual SSR, Docker

### Setting up Dev

1. With command below you will get a clone of this repository.

```shell
git clone https://github.com/nant0313/theater_front
```

2. And next install all of the dependencies required for this project

```shell
npm install
```

3. Run develop server

```shell
npm run dev
```



### Building 

```shell
npm run build
```

Then you will see the files in `public/`.



### Deploying / Publishing

The Command below will run `node server.js` and start server-side rendering for SEO (Search Engine Optimization).

```shell
npm start
```



## Database

In this project you need to add `.env` file to main directory.
Please fill In the blanks below and add to `.env` file.

```
MYSQL2_HOST=
MYSQL2_USER=
MYSQL2_PW=
MYSQL2_DB=
```



## Todo

- Fix Manual Server-Side-Rendering -> Next.js  
- Add Like Button to Posts, Comments.
