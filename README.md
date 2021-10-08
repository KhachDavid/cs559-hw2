# Rural Landscape - CS 559 Homework 2

This repository contains the code for the CS559 - homework 2 assignment.
It is a simple landscape that contains moving cars, rotating and translating sun, and a landscape scenery

# Table of Contents

1. [Generic Objects](#packageone)
2. [Dynamic Objects](#packagetwo)
3. [Puzzle Objects](#packagethree)
4. [Objects Specific To This App](#sql-games)
5. [Other Notes](#demo)


## Package com.chess.engine<a name="packageone" />

### Generic Objects

1. [Description](#board)
2. [Instance Functions](#openings)

### Description <a name="board" />

Generic Objects can be treated as an abstract class. It only contains the basic methods and attributes that are needed for the other objects.

One of which is the draw function which is used to called the draw function of child objects

### Instance Functions <a name="openings" />

constructor() - only takes the name of the object 
assemble() - not implemented, will be overridden by child objects
draw() - calls the draw function of child objects
other functions are for low-level design purposes

## Dynamic Objects<a name="packagetwo" />

### GUI Contents

1. [Description](#ghpanel)

### Description <a name="ghpanel" />

These are the objects that can move. Some instance of the dynamic objects include:
<br>
Windmill, Sun, Car1, and Car2

## Puzzle Objects<a name="packagethree" />

1. [Description](#PGN)

### Description <a name="PGN"/>

These are objects that are comprised of other objects. Mostly Dynamic objects. Some instances include:
<br>
The main scene, The sun component (contains lines), The wheel component (contains lines)

## Objects Specific To This App<a name="sql-games" />

Moon - It is just a generic circle<br>
Util - contains a utility function that handles sun animation when background color is not being changed<br>
Road - Draws the mountainous terrain<br>
Variables - Contains the variables necessary to setup the application<br>
WindmillPole - Contains the pole that is attached to the windmill rotors<br>
Config - Reconfigures the coordinate system of the canvas<br>
Colors - contains reusable colors for the app<br>
Car - draws two different cars, moving into different directions<br>
BackgroundAnimation - sets up gradients to simulate what day and night looks like<br>
BasicGeometryObject - contains the basic geometry objects that are used in the app<br>


## Notes<a name="demo"/>

The way the app flows is the setup() function is called from the main script. The setup calls a helper function which initializes the objects described above. Then the setup function creates the main node of the application, which is the variable scene and adds the objects initialized by the helper function to the main node. Here is a quick demo!

[Link]
⋮
[2]: https://www.youtube.com/watch?v=fJvBX39iR9E&ab_channel=DAVITKHACHATRYAN
