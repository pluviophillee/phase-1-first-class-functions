function callback(){
    return 777;
};

function receivesAFunction(callback){
    callback();
};

function named(){
    return 456;
};

function returnsANamedFunction(){
    return named;
}

function returnsAnAnonymousFunction(){
    return () => 456;
}
