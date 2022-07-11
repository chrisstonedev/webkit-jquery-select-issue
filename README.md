# Webkit jQuery Select issue

## The Problem

For a `<select>` dropdown HTML element, without an explicit `multiple` attribute, it should not be possible to select
more than one `<option>` for that dropdown.

Using a modern version of jQuery to set a selected option in a `<select>` drop down element by
calling `.attr('selected', true)` works just fine in most browsers. The option that is intended to be selected will
become selected and any other options that get selected will remove selection from those other options.

In Webkit, though, this is not handled well. Selecting an option using this method does select that option, but it also
leaves other options selected, including the initial placeholder value if not directly interacted with by the user.

## The Solution

According to [jQuery documentation](https://api.jquery.com/attr/):

> As of jQuery 1.6, the .attr() method returns undefined for attributes that have not been set. **To retrieve and change
> DOM properties such as the checked, selected, or disabled state of form elements, use the .prop() method.**

Using jQuery to set an option to be selected by calling `.prop('selected', true)` works as expected in all browsers.

## The Proof

Clone this repository to see the reproduction of this error.

Run `npm install` to install all development dependencies.

Then, run `npm start` to run the application in a live server over port `8080` that contains a dropdown, buttons to
change the selected value by each method, and a submit button. The submit button will reload the page and add the values
from the form into the URL. Those parameters are then printed in a paragraph tag on the page for easy viewing.

Then, run `npm test`, while the app is running, to run all Playwright tests in all browser types. There are two tests,
one for each method of changing selected value. You should see that all tests pass except for exactly one; the test that
changes using the `.attr()` function should fail on Webkit.
