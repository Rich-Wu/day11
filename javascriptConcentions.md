# Javascript conventions

- variable names -- These should be a noun. Person, place, thing or idea.
variable names begin with a lowercase letter. Multiple words written in camelCase.

- function names -- These should be a verb. An action.

* - attributes -- Attributes that represent a state of the object should be an adjective (ex. enrolled: true || false). Whatever you're going to use for a boolean value.

- Compound statements -- On the beginning line of a compound statement, there should only be the identifying object/variable and the opening brackets

  ex. var user = {
    name: 'Richard',
    email: 'richard@example.com'
          }

Ending bracket goes inline with the first letter of the object/function being declared

- Line length -- You want to avoid lines of code being longer than 80 characters.

- Single letter var names -- avoid these at all costs. The only exception is when the variable's purpose is abundantly clear.

- Constants -- declared in all uppercase letters. example: (USERS = [])

- Operands -- put a space before and after each operand.

- Indenting -- 1 tab. Indent lines that continue or for blocks of code.

- Scope -- avoid creating global variables whenever possible. 
