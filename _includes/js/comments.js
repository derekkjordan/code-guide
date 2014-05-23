Single line comments go over the line they refer to:

// We need an explicit "bar", because later in the code foo is checked.
var foo = "bar";
 
// Even long comments that span
// multiple lines use the single
// line comment form.
Multi-line comments are only used for file and function headers.

Inline comments are allowed as an exception when used to annotate special arguments in formal parameter lists or when needed to support a specific development tool:

function foo( types, selector, data, fn, /* INTERNAL */ one ) {
    // Do stuff
}
Do not write API documentation in comments. API documentation lives in its own repository.