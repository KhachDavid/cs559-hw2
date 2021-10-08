
/**
 *  Define a subclass, DynamicObject, of GenericObject that
 *  represents an object along with a modeling transformation to
 *  be applied to that object.  The object must be specified in
 *  the constructor.  The transformation is specified by calling
 *  the setScale(), setRotate() and setTranslate() methods. Note that
 *  each of these methods returns a reference to the DynamicObject
 *  as its return value, to allow for chaining of method calls.
 *  The modeling transformations are always applied to the object
 *  in the order scale, then rotate, then translate.
 */
class DynamicObject extends GenericObject {
    constructor(object, name) {
        // call the superclass constructor
        super(name);
        this.object = object;
        this.rotationAlpha = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.translateX = 0;
        this.translateY = 0;
    }

    rotate(angle) {
        // Set the angle of rotation, measured in DEGREES.  The rotation
        // is always about the origin.
        this.rotationAlpha = angle;
        return this;
    }
    
    scale(sx, sy) {
        // Sets scaling factors.
        this.scaleX = sx;
        this.scaleY = sy;
        return this;
    }

    translate(dx,dy) {
        // Set translation mounts.
        this.translateX = dx;
        this.translateY = dy;
        return this;
    }

    assemble(contextDynamic) {
        // Draws the object, with its modeling transformation.
        contextDynamic.save();
        if (this.translateX != 0 || this.translateY != 0) {
            contextDynamic.translate(this.translateX, this.translateY);
        }
        if (this.rotationAlpha != 0) {
            contextDynamic.rotate((this.rotationAlpha * Math.PI) / 180 );
        }
        if (this.scaleX != 1 || this.scaleY != 1) {
            contextDynamic.scale(this.scaleX, this.scaleY);
        }

        this.object.draw(contextDynamic);
        contextDynamic.restore();
    }

    // add a toString() method to DynamicObject
    toString() {
        return "DynamicObject: " + this.object.toString();
    }
}