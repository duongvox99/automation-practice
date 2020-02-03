const convertStringToBoolean = value => {
    return value.toString().toLowerCase() === 'true';
};

const convertStringToNumber = value => {
    if (isNaN(value)) {
        return value;
    }

    return value % 1 === 0 ? parseInt(value, 10) : parseFloat(value);
};

/**
 * This function I reference on the stackoverflow.com so I use as a api
 * ref: https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
 * @param objects
 * @returns {boolean}
 */
export function deepCompare(...objects) {
    let i, l, leftChain, rightChain;

    function compare2Objects(object1, object2) {
        let p;
        if (
            isNaN(object1) &&
            isNaN(object2) &&
            typeof object1 === 'number' &&
            typeof object2 === 'number'
        ) {
            return true;
        }

        if (object1 === object2) {
            return true;
        }

        if (
            (typeof object1 === 'function' && typeof object2 === 'function') ||
            (object1 instanceof Date && object2 instanceof Date) ||
            (object1 instanceof RegExp && object2 instanceof RegExp) ||
            (object1 instanceof String && object2 instanceof String) ||
            (object1 instanceof Number && object2 instanceof Number)
        ) {
            return object1.toString() === object2.toString();
        }

        if (typeof object1 === 'boolean' && typeof object2 === 'string') {
            return object1 === convertStringToBoolean(object2);
        }

        if (typeof object1 === 'number' && typeof object2 === 'string') {
            return object1 === convertStringToNumber(object2);
        }

        if (!(object1 instanceof Object && object2 instanceof Object)) {
            return false;
        }

        if (object1.isPrototypeOf(object2) || object2.isPrototypeOf(object1)) {
            return false;
        }

        if (object1.constructor !== object2.constructor) {
            return false;
        }

        if (object1.prototype !== object2.prototype) {
            return false;
        }

        if (
            leftChain.indexOf(object1) > -1 ||
            rightChain.indexOf(object2) > -1
        ) {
            return false;
        }
        for (p in object2) {
            if (object2.hasOwnProperty(p) !== object1.hasOwnProperty(p)) {
                return false;
            } else if (typeof object2[p] !== typeof object1[p]) {
                return false;
            }
        }

        for (p in object1) {
            if (object2.hasOwnProperty(p) !== object1.hasOwnProperty(p)) {
                return false;
            } else if (typeof object2[p] !== typeof object1[p]) {
                return false;
            }

            switch (typeof object1[p]) {
                case 'object':
                case 'function':
                    leftChain.push(object1);
                    rightChain.push(object2);

                    if (!compare2Objects(object1[p], object2[p])) {
                        return false;
                    }

                    leftChain.pop();
                    rightChain.pop();
                    break;
                default:
                    if (object1[p] !== object2[p]) {
                        return false;
                    }
                    break;
            }
        }

        return true;
    }

    if (objects.length < 1) {
        return true;
    }

    for (i = 1, l = objects.length; i < l; i++) {
        leftChain = [];
        rightChain = [];

        if (!compare2Objects(objects[0], objects[i])) {
            return false;
        }
    }

    return true;
}
