
Minesweeper

The game has 3 levels and the player can choose the level. Based on the level chosen, there will be generated a certain number of cells and a certain number of bombs placed in different cells, chosen randomly.

The purpose of the game is to discover where are placed all bombs.

The player can click/ choose a cell and it will be uncovered either a certain number (between 0/ none and 8) depending on how many bombs neighbors has. The neighbors are the cells up, down, left, right and diagonals. This number helps the player decide which cell to press and not to die (not to choose a bomb cell).

In case the cell chosen has no bomb neighbor (so its value would be 0), there will be uncovered all the cells with no bomb neighbors until it meets a cell with a certain value. This cell will also be uncovered.

In case the player has a thought about where a bomb is placed and wants to point this out, he can choose to place a flag there, by right clicking.

In case the player clicks a cell with bomb, he will die – a message will be displayed accordingly and all the cells of the grid will uncover its values.

Otherwise, if all bombs are found without dying, a message congratulating the winner will be displayed.

Once a game is finished, the player will have the option to play one more time.

For this project, I used JavaScript, Bootstrap, CSS and HTML.
