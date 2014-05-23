// Bad Examples
if(condition) doSomething();
while(!condition) iterating++;
for(var i=0;i<100;i++) object[array[i]] = someFn(i);

//Good Examples
var i = 0;
 
if ( condition ) {
    doSomething();
} else if ( otherCondition ) {
    somethingElse();
} else {
    otherThing();
}
 
while ( !condition ) {
    iterating++;
}
 
for ( ; i < 100; i++ ) {
    object[ array[ i ] ] = someFn( i );
}
 
try {
    // Expressions
} catch ( e ) {
    // Expressions
}

//Objects

Object declarations can be made on a single line if they are short (remember the line length limits). When an object declaration is too long to fit on one line, there must be one property per line. Property names only need to be quoted if they are reserved words or contain special characters:

// Bad
var map = { ready: 9,
    when: 4, "you are": 15 };
 
// Good
var map = { ready: 9, when: 4, "you are": 15 };
 
// Good as well
var map = {
    ready: 9,
    when: 4,
    "you are": 15
};


//Arrays and Function Calls

Always include extra spaces around elements and arguments:

array = [ "*" ];
 
array = [ a, b ];
 
foo( arg );
 
foo( "string", object );
 
foo( options, object[ property ] );
 
foo( node, "property", 2 );
Exceptions:

// Function with a callback, object, or array as the sole argument:
// No space on either side of the argument
foo({
    a: "alpha",
    b: "beta"
});
 
// Function with a callback, object, or array as the first argument:
// No space before the first argument
foo(function() {
    // Do stuff
}, options );
 
// Function with a callback, object, or array as the last argument:
// No space after after the last argument
foo( data, function() {
    // Do stuff
});


// Multi-line Statements

When a statement is too long to fit on one line, line breaks must occur after an operator.


// Bad
var html = "<p>The sum of " + a + " and " + b + " plus " + c
    + " is " + (a + b + c);
 
// Good
var html = "<p>The sum of " + a + " and " + b + " plus " + c +
    " is " + (a + b + c);


Lines should be broken into logical groups if it improves readability, such as splitting each expression of a ternary operator onto its own line even if both will fit on a single line.

var baz = firstCondition( foo ) && secondCondition( bar ) ?
    qux( foo, bar ) :
    foo;
When a conditional is too long to fit on one line, successive lines must be indented one extra level to distinguish them from the body.

    if ( firstCondition() && secondCondition() &&
            thirdCondition() ) {
        doStuff();
    }


//Chained Method Calls

When a chain of method calls is too long to fit on one line, there must be one call per line, with the first call on a separate line from the object the methods are called on. If the method changes the context, an extra level of indentation must be used.

elements
    .addClass( "foo" )
    .children()
        .html( "hello" )
    .end()
    .appendTo( "body" );


// Full File Closures

When an entire file is wrapped in a closure, the body of the closure is not indented.

(function( $ ) {
 
// this doesn't get indented
 
})( jQuery );
The same applies to AMD wrappers.

define([
    "foo",
    "bar",
    "baz"
], function( foo, bar, baz ) {
 
// this doesn't get indented
 
});
For UMD, the factory is indented to visually differentiate it from the body.

(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
 
        // AMD. Register as an anonymous module.
        define([
            "jquery"
        ], factory );
    } else {
 
        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {
 
// this doesn't get indented
 
}));