# Exception Formatter

Hey! 👋

First things first, you can check it out here: https://dtext.github.io/exception-formatter/.

## What does it do?
In projects for clients, we frequently do two things:

1. log stack traces
2. use json logging

When doing so, newlines and tabs are replaced with `\n` and `\t`, respectively.
This is done to keep the json object intact, but sadly, it makes the log output in Grafana unreadable.
This app allows you to paste an escaped stacktrace like that and reverts the change instantly for you.