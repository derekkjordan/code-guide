// Each .jshintrc file follows a specific format. All options must be alphabetized and grouped:
{
    "common1": true,
    "common2": true,
 
    "repoSpecific1": true,
    "repoSpecific2": true,
 
    "globals": {
        "repoGlobal1": true,
        "repoGlobal2": false
    }
}

// The following common options must be used in all projects:
{
    "boss": true,
    "curly": true,
    "eqeqeq": true,
    "eqnull": true,
    "expr": true,
    "immed": true,
    "noarg": true,
    "onevar": true,
    "quotmark": "double",
    "smarttabs": true,
    "trailing": true,
    "undef": true,
    "unused": true
}

// If the project supports browsers which do not implement ES5, then the es3 option must be included with the repo-specific options.