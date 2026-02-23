# 1. There ar differences 
 
  ### getElementById("id")
    - return a single element or null

   ### getElementByClassName("class")
    - it returns an html collection and live list
    - return an array like collection
   ### querySelector("select")/querySelectorAll("select")
   - select with css selectors .class , #id ,div >p 
   - querySelector return only fast match if finds
   - return a NodeList of all matches

# 2. 
## first use thr method - document.createElement() like 'div'

## configure The Element -  newDiv.textContent = "Hello, World!";

## insert into the dom - You need to tell the browser exactly where this new element should live by selecting a parent element and appending the child. Like app - parent.appendChild(childeNode);
------------------------------
# 3. How It Works

## When you click a button that is nested inside a div , which is inside a body , the browser triggers the click event in this specific order

### i. the target : first, it first on the    element you actually clicked Button
### ii.  than, it moves up to the div
### iii. the grandparent : the uo to body
### iv. The Root : Finally , it hits the documents and window.

------------------------------
# 4.Event delegation is instead of attaching an event listener to multiple child element in Javascript. Click the childe and the event "bubbkes" up tp the parents event usinf (  event.target   ) property.
## Why is it Useful-

     - Memory Efficiency

     - Handling Dynamic Elements

     - cleaner Code

-------------------------------
# 5. preventDefault() stops the browser's default action , while stopPropagation() stops thr event from moving up the DOM Tree.
  ### i. preventDefault()
      - stopping the from refreshing the page on submit Commonly use that
      - does it stop bubbling? no.
  ### ii. stopPropagation()
      - click the button inside a container where the container also has a click listener , and you  only want the button's code to run
      - does if stop te default action? No.If you use this on a submit button, the form will still submit unless you also call preventDefault()