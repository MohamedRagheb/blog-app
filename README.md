## Project Structure

```bash

  | __src
  |     |__components 
  |         |__layouts # layouts components
  |          |__shared # shared components across app
  |     |__pages # Pages of app
  |     |__styles # Styles sheets for system
  |     |__utils # Utilities used in system
  |     |types.ts # All system types 

```

## Installation and Setup

### Prerequisites

- Nodejs 18.18.2 or higher
- npm or other npm alternative ( yarn, pnpm, ... )

### Run development version

```bash
  # install dependencies
  yarn
  
  # run app
  yarn dev 
```

### Steps to run production version

#### - Build App

```bash
  # install dependencies
  yarn
  
  # build app
  yarn build
```

#### - Run App

```bash
  yarn start
```
