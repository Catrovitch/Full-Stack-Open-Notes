#!/bin/bash

# Create the first document - Introduction_to_React.md
cat << EOF > Introduction_to_React.md
# Introduction to React

## Component

## JSX

## Multiple components

## props: passing data to components

## Some notes

## Do not render objects

## Exercises 1.1-1.2
EOF

# Create the second document - JavaScript.md
cat << EOF > JavaScript.md
# JavaScript

## Variables

## Arrays

## Objects

## Functions

## Exercises 1.3-1.5

## Object methods and "this"

## Classes

## JavaScript materials
EOF

# Create the third document - Component-state-event-handlers.md
cat << EOF > Component-state-event-handlers.md
# Component state, event handlers

## Component helper functions

## Destructuring

## Page re-rendering

## Stateful component

## Event handling

## An event handler is a function

## Passing State - to child components

## Changes in state cause rendering

## Refactoring the components
EOF

echo "Documents created successfully!"
