# `koi`

`koi` is a tiny template engine that only implements the bare minimum set of features that it can. It currently sits around 180 bytes, but more JavaScript tricks could probably bring that down a bit.

## Features

- String interpolation with `{{ param }}` syntax.
- Can throw an error or ignore a missing parameter (the throwing an error took another 60 bytes so you better use it!)

## Usage

`koi` exports one single function, called `template`. Alias this to whatever if you'd like, and call it with a string and an object of. You can also pass a third arguement to enable or disable strict mode. Strict mode will throw an error if the parameter is not found. The default behavior is to just ignore the match and leave it.

## How does it work?

If you beautify it, the code is *reletively* readable. The basic way it operates is:

1. Uses a regular expression to match the interpolation syntax (`/{{ *[a-zA-Z_.]+ *}}/g`)
2. Loops through the matches and attempts to find the parameters in the `options` object. Depending on the mode, if the parameter isn't found, it will either: throw an error; ignore it
3. Returns the modified result

That's it. It's really simple.

## Possible improvements

I fiddled with the idea of javascript interpolation, but it's unsafe and it adds 100 bytes without even considering the difficulties I would have writing a regex that would recognize all valid JavaScript