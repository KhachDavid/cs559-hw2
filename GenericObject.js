/**
 * The base class for all nodes in the scene graph data structure.
 */
class GenericObject {
    constructor(name) {
        this.fillColor = null;   // If non-null, the default fillStyle for this node.
        this.strokeColor = null; // If non-null, the default strokeStyle for this node.
        this.name = name
    }

    assemble(context) {
        // This method is meant to be abstract and must be
        // OVERRIDDEN in any actual object in the scene graph.
        // It is not meant to be called; it is called by draw().
        throw "doDraw not implemented in GenericObject"
    }

    draw(context) {
        // This method should be CALLED to draw the object
        // represented by this GenericObject.  It should NOT
        // ordinarily be overridden in subclasses.
        context.save();
        if (this.fillColor) {
            context.fillStyle = this.fillColor;
        }
        if (this.strokeColor) {
            context.strokeStyle = this.strokeColor;
        }
        this.assemble(context);
        context.restore();
    }

    setFillColor(color) {
        // Sets fillColor for this node to color.
        // Color should be a legal CSS color string, or null.
        this.fillColor = color;
        return this;
    }

    setStrokeColor(color) {
        // Sets strokeColor for this node to color.
        // Color should be a legal CSS color string, or null.
        this.strokeColor = color;
        return this;
    }

    setColor(color) {
        // Sets both the fillColor and strokeColor to color.
        // Color should be a legal CSS color string, or null.
        this.fillColor = color;
        this.strokeColor = color;
        return this;
    }

    toString() {
        // Returns a string representation of this object.
        return this.name + " GenericObject";
    }
}