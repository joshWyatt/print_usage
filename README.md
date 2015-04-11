# print_usage

Exit the program and print the usage from usage.md or a provided string.

# Example

usage.md
```
Usage: your_sweet_module [OPTIONS] COMMAND
```

index.js
``` js
var printUsage = require('print_usage');
printUsage()
```

```
$ Usage: your_sweet_module [OPTIONS] COMMAND
```

or:
``` js
printUsage('Usage: my_other_sweet_module [-abfjd] [--thing]');
```

```
$ Usage: my_other_sweet_module [-abfjd] [--thing]
```


# install

With [npm](https://npmjs.org) do:

```
npm install print_usage
```

# license

MIT