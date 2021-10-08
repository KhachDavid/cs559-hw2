/**
 * @summary
 * Check the class header
 * 
 * @author David <dkhachatryan@wisc.edu>
 * @professor Eftychios Sifakis
 * @class CS559 Assignment 2
 * Created on : October 7, 2021 
 * 
 * @credits
 * Check ReadMe
 */


/**
 *  PuzzleObject, is a subclasss of GenericObject. It represents
 *  an object rendered by puzzling together pieces of various objects.  
 */
class PuzzleObject extends GenericObject {

    /**
     * Name doesn't have a functionality purpose
     * It is there to make the code easier to debug
     * @param {give name to the object} name 
     */
    constructor(name) {
        super(name);
        this.pieces = [];  // List of pices.
    }

    /**
     * @param {object} node Some object to be added to the puzzle as a piece
     * @returns the added node
     */
    add(node) {
        this.pieces.push(node);
        return node;
    }

    /**
     * @param {object} node Some object to be removed from the puzzle
     */
    remove(node) {
        this.pieces = this.pieces.filter(function( obj ) {
            return obj !== node;
        });
    }

    /**
     * Draw all the pieces that form this puzzle object
     * @param {2d} puzzleContext 
     */
    assemble(puzzleContext) {
        // Just call the sub-objects' draw() methods.
        for (var i = 0; i < this.pieces.length; i++) {
            this.pieces[i].draw(puzzleContext);
        }
    }

    /**
     * @param {string} name Return the puzzle piece that has the given name
     * @returns null if no piece has the given name
     */
    getObjectByName(name) {
        // Return the sub-object with the given name, or null if no such
        // object exists.
        for (var i = 0; i < this.pieces.length; i++) {
            if (this.pieces[i].name == name) {
                return this.pieces[i];
            }
        }
        return null;
    }

}
