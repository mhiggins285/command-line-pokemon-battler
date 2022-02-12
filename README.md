# Command Line Pokemon Battler

## About

In this project I have created a command-line Pokemon game with a wide range of the features including in battles in the popular game series, including a full type chart, a special/physical split, damagining moves in addition to moves that cause stat changes, status effects, and a range of other effects. The game is prebuilt with the legendary teams of the trainers Red and Blue from Pokemon Gold and Silver. I created this game not only to hone and showcase my object oriented programming skills, but also as a passion project owing to my love of the series.

## Set-up

### Cloning the respository

If you want to work with this repository locally you will need to clone it onto your local machine. To do this, navigate to where in your file system you want the repository to be saved in the command line, and run the following command: 

```bash
git clone https://github.com/mhiggins285/mah-games
```

### Installing dependencies

This repository makes use of a few other packages that you will need to install before it is able to run locally.

To make sure you have all of these installed, run the following command when you first open the repository:

```bash
npm i
```

### Running the game

Once you have cloned the repository and installed the required dependencies, you can play with the game yourself from the command line by navigating to this repository in your terminal and running the below command:

```bash
node inquirer
```

You can interact with the game using the numbers shown in your terminal for each turn. Numbers 0-3 are reserved for moves, number 4 followed by a space and another number (e.g. '4 3') allows you to switch to the Pokemon in that slot, as shown to you by the interface. 5 allows you to see details of the moves you have on the current Pokemon, and 6 allows you to see a full breakdown of the Pokemon in your party. Happy battling!

### Running tests

To run the tests, run the below command, where REGEX is an optional modifier which will run all files which have a regex match to said modifier within their names. For example using `app` will only run the `app.test.js` file.


```bash
npm t REGEX
```

## System requirements

You will need to install Node v16.9.1 and PSQL v12.9 to run this repository.
