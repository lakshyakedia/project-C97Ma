const validateCar = (car) => {
    if (!car || typeof car !== 'object') {
        return false;
    }
    
    if (!car.make || typeof car.make !== 'string') {
        return false;
    }
    
    if (!car.model || typeof car.model !== 'string') {
        return false;
    }
    
    if (!car.year || typeof car.year !== 'number') {
        return false;
    }
    
    if (!car.price || typeof car.price !== 'number') {
        return false;
    }
    
    if (!car.description || typeof car.description !== 'string') {
        return false;
    }
    
    if (!car.image || typeof car.image !== 'string') {
        return false;
    }
    
    return true;
};

module.exports = {
    validateCar,
};