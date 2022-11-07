# Tellyo UI
A set of React components representing basic UI elements that are ready to use in various Tellyo applications. 

# Usage
To install newest version:
`npm i git+ssh://git@gitlab.tellyo.com:frontend/artifactory/ui.git`
<!-- -->
To install any older tagged version:
`npm i git+ssh://git@gitlab.tellyo.com:frontend/artifactory/ui.git#1.0.0`

Then just import components from `@tellyo/ui`.

## Commands
- `npm run storybook` - runs Storybook.
- `npm run build` - creates build files and type definitions.
- `npm run watch` - watches for changes and automatically rebuilds code.

## Development/releasing new versions
Following rules apply:
- changes should be merged to the `develop` branch
- when it comes the time to release a new version, `develop` branch is merged to the `master` branch
- a new tag pointing to the `master` branch is created, its name should indicate the new incremented version number, eg. `1.1.1` (see *Versioning* for more details)
- changelog in `CHANGELOG.md` is updated

## Versioning
This project uses [Semantic Versioning](https://semver.org/). Following rules apply:
- increment PATCH on bug fixes and small changes
- increment MINOR on adding new components
- increment MAJOR only on bigger changes (e.g. changes that break compatibility)

## How to develop Tellyo UI alongside other projects
Let's assume that you have the following directory structure:
```
|- some-folder
   |- ui   // this library
   |- tellyo-pro // or another project that uses this library
```
If you want to instantly see changes that you make to this library in your project, just run this command:
```bash
npm link ../ui
```

Automatic building of this library on any changes may also come in handy, so you don't have to rebuild it manually:
```bash
npm run watch
```

When you are done developing just run this in the project directory:
```bash
npm unlink ../ui
```

ATTENTION! Projects with reload on change features are often setup to ignore changes in `node_modules` directory, so you may have to restart them to see changes made in TellyoUI (or add an exception for it).
