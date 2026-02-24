<!-- Question and answer -->
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:-
== getElementById()- 
 *Selects an element by its ID only ,
 *it returns a single element 
 *if element not found ,it retuns null

 == getElementsByClassName()-
  *Selects an element by class name,
   *it returns a multiple elements 
   *It returns a live HTML Collection, which updates automatically when the DOM changes.

== querySelector()-

*It selects the first matching element using a CSS selector.
*It returns a single element.
*If no matching element is found, it returns null.

 ==querySelectorAll()-
*It selects all matching elements using a CSS selector.
*It returns a static NodeList, which does not update automatically when the DOM changes.

<!--Question -2  -->
2.How do you create and insert a new element into the DOM?
Ans:-
*document.createElement("div") → Creat a New div
*Object.assign(..., {...}) → set together  id, class, and text
*appendchild() →It directly adds content at the end of a container.

<!-- question -3 -->
3.What is Event Bubbling? And how does it work?
Ans:-
--Event Bubbling is a way events propagate in the DOM, where the event first triggers on the child element and then bubbles up to the parent → grandparent → … → html.
It is often used for event delegation, allowing a parent element to handle events for multiple child elements.If you want to stop the event from bubbling up, you can use event.stopPropagation().--

<!-- question-4 -->
4.What is Event Delegation in JavaScript? Why is it useful?

--Event Delegation is a technique where instead of adding event listeners to multiple child elements, you attach a single event listener to the parent element.
Since events bubble from the child to the parent, the parent listener can catch those events.
You can then use event.target to determine which child element triggered the event.---

Why is it useful--
* Fewer event listeners → better performance.
* Works even if child elements are added later.
* Avoids repetitive code for each child.

<!-- question-5 -->
5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()-
*Stops the default browser action for an event.
*Does NOT stop the event from bubbling.
*prevent a form from submitting or a link from navigating.

stopPropagation()-
*stops the event from bubbling up (or capturing down) the DOM.
*Does NOT prevent the default browser action.
*prevent parent click handlers from being triggered.
