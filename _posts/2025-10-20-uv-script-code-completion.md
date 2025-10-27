---
layout: post
title: code completion for external Python libraries in scripts with uv
date: 2025-10-20 10:00:00
description: a brief guide on how to access and use the uv-generated virtual environment in your IDE for code completion
tags: python
categories:
---

Recently I've grown fond of [loguru](https://github.com/Delgan/loguru) and [Cyclopts](https://cyclopts.readthedocs.io/en/latest/) libraries for writing even the simplest of Python scripts, the former giving a very nice logging experience and the latter providing a clean way to define and parse command-line arguments. This of course means that running those scripts with bare `python script.py` command doesn't work out of the box.

Luckily, [Inline script metadata](https://peps.python.org/pep-0723/) PEP defines a way to specify dependencies in comments at the top of the file. This is supported by [uv](https://docs.astral.sh/uv/) tool which can run such scripts with all dependencies resolved. For example, a file `script.py` with the following code:

```python
from pathlib import Path

from cyclopts import App
from loguru import logger

app = App()

@app.default
def main(path: Path):
    logger.info(f"Processing file: {path}")

if __name__ == "__main__":
    app()
```

...can be enriched with such metadata like this:

```sh
uv add --script script.py cyclopts loguru
```

This will add the following comments to the top of the file:

```python
# /// script
# requires-python = ">=3.14"
# dependencies = [
#     "cyclopts",
#     "loguru",
# ]
# ///
from pathlib import Path
...
```

Now running `uv run script.py <path>` will work as expected.

***

All of these is described in detail in the [uv documentation](https://docs.astral.sh/uv/guides/scripts/) and solves the problem of running scripts with dependencies, but alone leads to poor developer experience, as opening such a script in an IDE like VS code will not provide code completion for the external libraries specified in the metadata.

Instead of creating a new virtual environment manually and installing the dependencies there, we can use the isolated environment that **uv** creates for us when running the script. To find out where that environment is located, we can run the following command:

```sh
uv sync --script script.py
```

On top of syncing the dependencies, this will print out the path to the interpreter used for running the script, for example:

```
Using script environment at: C:\Users\username\AppData\Local\uv\cache\environments-v2\script-0b647196289807de
Resolved 12 packages in 19ms
Audited 12 packages in 2ms
```

We can access this path programmatically by parsing an optional JSON output with `jq` tool:

```sh
uv sync --script script.py --output-format json | jq .sync.environment.path
```

***

With the path to the interpreter, we can provide it to VS Code as the Python interpreter for the workspace. Open the command palette (`Ctrl+Shift+P`), type `Python: Select Interpreter`, and choose `Enter interpreter path...`, then paste the path retrieved earlier.

With that, you should have code completion and linting for the external libraries specified in the script metadata. You can then modify the dependencies by running `uv add` or `uv remove` commands and syncing the environment again with `uv sync --script script.py`. Happy scripting!