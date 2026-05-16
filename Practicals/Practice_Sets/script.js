/*
============================================================
    JAVASCRIPT COMPLETE REFERENCE FILE
    Every concept from Unit II demonstrated
============================================================

TABLE OF CONTENTS:
1.  Variables, Data Types, and Operators
2.  Control Flow (If/Else, Switch, Loops)
3.  Functions (Declaration, Expression, Arrow)
4.  Arrays and Array Methods
5.  Objects and Destructuring
6.  DOM Selection
7.  DOM Manipulation
8.  Event Handling
9.  Mobile Menu Toggle
10. Dark Mode Toggle
11. Scroll Effects (Navbar, Progress Bar, Back to Top)
12. Active Nav Link on Scroll
13. Counter Animation (Stats)
14. Portfolio Filter
15. Tabs Component
16. Accordion / FAQ
17. Modal
18. Form Handling & Validation
19. Password Show/Hide & Strength Meter
20. Color Picker → Background Change
21. Range Slider Live Update
22. Character Counter
23. File Upload Preview
24. Todo List (CRUD)
25. Counter App
26. Digital Clock
27. Search Filter
28. Local Storage
29. Smooth Scroll
30. Event Delegation Examples
============================================================
*/


// ============================================================
// 1. VARIABLES, DATA TYPES, AND OPERATORS
// ============================================================

/*
    Three ways to declare variables:

    var   → old way, function-scoped, can be redeclared (AVOID)
    let   → modern, block-scoped, CAN be reassigned
    const → modern, block-scoped, CANNOT be reassigned

    RULE: Use const by default. Use let when value needs to change.
*/

// ── const: value cannot be reassigned ──
const APP_NAME = 'LearnHub';           // String — text wrapped in quotes
const VERSION = 2.0;                    // Number — integer or decimal
const IS_PRODUCTION = true;             // Boolean — true or false
const MAX_TODOS = 100;                  // Number used as a constant limit

// ── let: value can be reassigned ──
let currentTheme = 'light';            // will change when user toggles dark mode
let todoCount = 0;                      // will change as todos are added/removed
let counterValue = 0;                   // will change on increment/decrement

// ── Data Types ──
const myString = "Hello World";         // String — text
const myNumber = 42;                    // Number — integers and decimals
const myBoolean = true;                 // Boolean — true or false
const myNull = null;                    // Null — intentionally empty
let myUndefined;                        // Undefined — declared but no value
const myArray = [1, 2, 3];             // Array — ordered list (reference type)
const myObject = { name: 'Alice' };     // Object — key-value pairs (reference type)

/*
    Template Literals — backtick strings with ${expression} inside
    WHY: Cleaner than string concatenation ("Hello " + name + "!")
*/
const greeting = `Welcome to ${APP_NAME} v${VERSION}!`;
// Result: "Welcome to LearnHub v2!"

/*
    Operators:
    Arithmetic:  +  -  *  /  %  **  ++  --
    Assignment:  =  +=  -=  *=  /=
    Comparison:  ===  !==  >  <  >=  <=  (always use === not ==)
    Logical:     &&  ||  !
    Ternary:     condition ? valueIfTrue : valueIfFalse
*/

// Type conversion (value always returns string from inputs)
// parseInt("42")  → 42 (number)
// Number("42")    → 42 (number)
// String(42)      → "42" (string)
// +"42"           → 42 (unary plus shortcut)


// ============================================================
// 2. CONTROL FLOW — If/Else, Switch, Loops
// ============================================================

/*
    If / Else If / Else — make decisions based on conditions.
    Used throughout this file for validation, state checks, etc.
*/
function getPasswordStrength(password) {
    let strength = 0;

    // Each condition adds to strength score
    if (password.length >= 8) strength++;      // at least 8 chars
    if (password.length >= 12) strength++;     // bonus for 12+ chars
    if (/[A-Z]/.test(password)) strength++;    // has uppercase letter
    if (/[0-9]/.test(password)) strength++;    // has number
    if (/[^A-Za-z0-9]/.test(password)) strength++; // has special char

    // Return strength level using if/else chain
    if (strength <= 1) return { level: 'weak', color: '#dc3545', width: '20%' };
    else if (strength === 2) return { level: 'fair', color: '#fd7e14', width: '40%' };
    else if (strength === 3) return { level: 'good', color: '#ffc107', width: '60%' };
    else if (strength === 4) return { level: 'strong', color: '#28a745', width: '80%' };
    else return { level: 'very strong', color: '#007bff', width: '100%' };
}

/*
    Switch — alternative to long if/else chains.
    Each case is compared with === (strict equality).
    break prevents "fall-through" to next case.
    default runs if no case matches (like else).
*/
function getDayMessage(day) {
    switch (day) {
        case 0: return 'Sunday — Relax!';
        case 1: return 'Monday — Let\'s go!';
        case 2: return 'Tuesday — Keep pushing!';
        case 3: return 'Wednesday — Halfway there!';
        case 4: return 'Thursday — Almost Friday!';
        case 5: return 'Friday — Weekend soon!';
        case 6: return 'Saturday — Enjoy!';
        default: return 'Invalid day';
    }
}

/*
    Loops — repeat code multiple times.

    for loop: for (init; condition; update) { }
    for...of: iterate over array VALUES
    for...in: iterate over object KEYS
    while: repeat while condition is true
    forEach: array method for iteration
*/


// ============================================================
// 3. FUNCTIONS — Declaration, Expression, Arrow
// ============================================================

/*
    Function Declaration — hoisted (can call before definition).
    SYNTAX: function name(parameters) { return value; }
*/
function add(a, b) {
    return a + b;
}

/*
    Function Expression — NOT hoisted (must define before calling).
    Stored in a variable.
*/
const subtract = function(a, b) {
    return a - b;
};

/*
    Arrow Function — modern, concise syntax.
    SYNTAX: const name = (params) => expression;

    If ONE expression: implicit return (no { } or return keyword needed).
    If multiple statements: use { } and explicit return.
    If ONE parameter: parentheses optional.
    If ZERO parameters: empty () required.
*/
const multiply = (a, b) => a * b;         // implicit return
const square = x => x ** 2;                // single param, no parens needed
const sayHello = () => 'Hello!';           // no params

// Arrow with multiple statements (needs { } and return):
const divide = (a, b) => {
    if (b === 0) return 'Cannot divide by zero';
    return a / b;
};

// Default parameters:
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
// greet()        → "Hello, Guest!"
// greet('Alice') → "Hello, Alice!"


// ============================================================
// 4. ARRAYS AND ARRAY METHODS
// ============================================================

/*
    Arrays — ordered lists of values.
    Index starts at 0: arr[0] is the first element.
*/
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// ── Accessing ──
// fruits[0]              → "Apple" (first)
// fruits[fruits.length - 1]  → "Date" (last)
// fruits.length          → 4 (count)

// ── Adding / Removing ──
// fruits.push('Elderberry')   → add to END → returns new length
// fruits.pop()                → remove from END → returns removed item
// fruits.unshift('Avocado')   → add to START
// fruits.shift()              → remove from START
// fruits.splice(1, 1)        → remove 1 item at index 1

// ── Searching ──
// fruits.includes('Banana')   → true
// fruits.indexOf('Cherry')    → 2 (index) or -1 (not found)
// fruits.find(f => f.startsWith('C'))  → "Cherry" (first match)

// ── Transforming (return NEW array) ──
// fruits.map(f => f.toUpperCase())         → ["APPLE", "BANANA", ...]
// fruits.filter(f => f.length > 5)         → ["Banana", "Cherry"]
// fruits.reduce((acc, f) => acc + ', ' + f) → "Apple, Banana, Cherry, Date"
// fruits.slice(1, 3)                       → ["Banana", "Cherry"]
// fruits.sort()                            → alphabetical sort

// ── Iteration ──
// fruits.forEach((fruit, index) => console.log(index, fruit))
// for (const fruit of fruits) { console.log(fruit); }

// ── Destructuring ──
const [first, second, ...rest] = fruits;
// first = "Apple", second = "Banana", rest = ["Cherry", "Date"]

// ── Spread operator ──
const moreFruits = [...fruits, 'Elderberry'];  // copy + add item


// ============================================================
// 5. OBJECTS AND DESTRUCTURING
// ============================================================

/*
    Objects — collections of key-value pairs.
    Access with dot notation (obj.key) or bracket notation (obj["key"]).
*/
const user = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com',
    skills: ['HTML', 'CSS', 'JS'],
    address: {
        city: 'New York',
        country: 'USA'
    },
    // Method — function inside an object
    getFullInfo() {
        return `${this.name}, ${this.age}, ${this.address.city}`;
    }
};

// Accessing:
// user.name              → "Alice"
// user.address.city      → "New York"
// user.skills[0]         → "HTML"
// user.getFullInfo()     → "Alice, 25, New York"

// Destructuring — extract values into variables:
const { name, age, email } = user;
// name = "Alice", age = 25, email = "alice@example.com"

// Nested destructuring:
const { address: { city } } = user;  // city = "New York"

// Object methods:
// Object.keys(user)      → ["name", "age", "email", ...]
// Object.values(user)    → ["Alice", 25, "alice@example.com", ...]
// Object.entries(user)   → [["name","Alice"], ["age",25], ...]

// Spread to merge/copy:
const updatedUser = { ...user, age: 26, role: 'Developer' };


// ============================================================
// 6-8. DOM SELECTION, MANIPULATION, AND EVENTS
// ============================================================
// (Demonstrated practically in all the interactive features below)


// ============================================================
// 9. MOBILE MENU TOGGLE
// ============================================================

/*
    querySelector — selects the FIRST element matching CSS selector.
    Returns null if nothing found.
    WHY: Most flexible — uses CSS selector syntax you already know.
*/
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

/*
    addEventListener — attaches a function to run when event occurs.
    SYNTAX: element.addEventListener('eventType', callbackFunction)
    
    'click' event fires when element is clicked.
    
    classList.toggle('active'):
    - If element HAS 'active' class → REMOVES it
    - If element DOESN'T have 'active' class → ADDS it
    
    In CSS: .nav-links { display: none } → hidden
            .nav-links.active { display: flex } → visible
*/
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when any nav link is clicked (on mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// ============================================================
// 10. DARK MODE TOGGLE
// ============================================================

const darkToggle = document.getElementById('darkToggle');

/*
    localStorage — saves data in the browser permanently.
    Only stores STRINGS.
    localStorage.getItem('key') → retrieves saved value (or null)
    localStorage.setItem('key', 'value') → saves value
*/

// Load saved dark mode preference on page load
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkToggle.textContent = '☀️';
    currentTheme = 'dark';
}

darkToggle.addEventListener('click', () => {
    /*
        classList.toggle returns true if class was ADDED, false if REMOVED.
        We store this to know the new state.
    */
    const isDark = document.body.classList.toggle('dark-mode');

    // Update button icon based on state
    darkToggle.textContent = isDark ? '☀️' : '🌙';

    // Save preference — persists even after browser is closed
    localStorage.setItem('darkMode', isDark.toString());

    // Update our tracking variable
    currentTheme = isDark ? 'dark' : 'light';
});


// ============================================================
// 11. SCROLL EFFECTS
// ============================================================

const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('backToTop');
const scrollProgress = document.getElementById('scrollProgress');

/*
    window.addEventListener('scroll', callback)
    Fires EVERY time user scrolls the page.
    
    window.scrollY → how many pixels scrolled from top.
    document.documentElement.scrollHeight → total page height.
    window.innerHeight → visible viewport height.
*/
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // ── Navbar scroll effect ──
    // Add 'scrolled' class when user scrolls past 50px
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // ── Back to Top button visibility ──
    if (scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }

    // ── Scroll progress bar ──
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
});

// Back to top — smooth scroll
backToTopBtn.addEventListener('click', () => {
    /*
        window.scrollTo scrolls the page.
        top: 0 → scroll to very top.
        behavior: 'smooth' → smooth animation instead of instant jump.
    */
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ============================================================
// 12. ACTIVE NAV LINK ON SCROLL
// ============================================================

/*
    As user scrolls, highlight the nav link matching the current section.
    Uses: querySelectorAll, forEach, getBoundingClientRect or offsetTop.
*/
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        // getAttribute('href') returns "#services", "#about", etc.
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
});


// ============================================================
// 13. COUNTER ANIMATION (Stats Section)
// ============================================================

/*
    Animate numbers counting up from 0 to target value.
    Uses: data attributes, setInterval, clearInterval.
    
    Intersection Observer watches when elements enter the viewport.
    WHY: Only start animation when user can see it (not on page load).
*/
const counters = document.querySelectorAll('.counter');
let countersAnimated = false;

function animateCounters() {
    counters.forEach(counter => {
        // parseInt converts string to integer
        // counter.dataset.target reads data-target="150" → "150"
        const target = parseInt(counter.dataset.target);
        let current = 0;
        const increment = target / 80; // divide into 80 steps

        /*
            setInterval runs a function repeatedly at set intervals.
            16ms ≈ 60fps (smooth animation).
            Returns an ID used to stop it with clearInterval.
        */
        const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
                counter.textContent = target + '+';
                clearInterval(timer); // STOP the interval
            } else {
                counter.textContent = Math.ceil(current);
            }
        }, 16);
    });
}

// Trigger counters when stats section is visible
window.addEventListener('scroll', () => {
    if (countersAnimated) return; // only animate once

    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    // getBoundingClientRect() returns element's position relative to viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        animateCounters();
        countersAnimated = true;
    }
});


// ============================================================
// 14. PORTFOLIO FILTER
// ============================================================

/*
    Event Delegation — ONE listener on parent handles ALL child clicks.
    WHY: 
    1. Fewer event listeners = better performance
    2. Works for dynamically added elements
    3. Cleaner code
    
    e.target → the actual element that was clicked.
    We check if it has the right class before acting.
*/
const filterButtons = document.querySelector('.filter-buttons');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterButtons) {
    filterButtons.addEventListener('click', (e) => {
        // Only act if a filter button was clicked
        if (!e.target.classList.contains('filter-btn')) return;

        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // Get filter value from data-filter attribute
        const filter = e.target.dataset.filter;

        // Show/hide portfolio items based on data-category
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';     // show
            } else {
                item.style.display = 'none';      // hide
            }
        });
    });
}


// ============================================================
// 15. TABS COMPONENT
// ============================================================

const tabButtonsContainer = document.querySelector('.tab-buttons');

if (tabButtonsContainer) {
    tabButtonsContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tab-btn')) return;

        // Remove active from ALL tabs and panels
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

        // Add active to clicked tab
        e.target.classList.add('active');

        // Show corresponding panel
        // e.target.dataset.tab → reads data-tab attribute value
        const targetPanel = document.getElementById(e.target.dataset.tab);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
}


// ============================================================
// 16. ACCORDION / FAQ
// ============================================================

const accordion = document.getElementById('accordion');

if (accordion) {
    accordion.addEventListener('click', (e) => {
        const header = e.target.closest('.accordion-header');
        if (!header) return;

        const item = header.parentElement; // the .accordion-item

        // Close all OTHER items (single-open accordion)
        document.querySelectorAll('.accordion-item').forEach(i => {
            if (i !== item) i.classList.remove('active');
        });

        // Toggle THIS item
        item.classList.toggle('active');
    });
}


// ============================================================
// 17. MODAL
// ============================================================

const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modalConfirmBtn = document.getElementById('modalConfirm');

// Open modal
if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });
}

// Close modal — three ways
function closeModal() {
    modalOverlay.classList.remove('active');
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (modalConfirmBtn) modalConfirmBtn.addEventListener('click', closeModal);

// Close on overlay click (but NOT modal content click)
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        /*
            e.target === modalOverlay:
            Only close if the OVERLAY itself was clicked,
            NOT if something inside the modal was clicked.
            e.target is the actual clicked element.
        */
        if (e.target === modalOverlay) closeModal();
    });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});


// ============================================================
// 18. FORM HANDLING & VALIDATION
// ============================================================

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

/*
    Real-time validation using 'input' event.
    'input' fires on EVERY keystroke/change.
    'change' only fires when input loses focus.
    
    .value.trim() removes leading/trailing whitespace.
*/

// ── Name validation ──
if (nameInput) {
    nameInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        const error = document.getElementById('nameError');

        if (value.length === 0) {
            error.textContent = '';
            e.target.classList.remove('valid', 'invalid');
        } else if (value.length < 2) {
            error.textContent = 'Name must be at least 2 characters';
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
        } else {
            error.textContent = '';
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
        }
    });
}

// ── Email validation ──
if (emailInput) {
    emailInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        const error = document.getElementById('emailError');
        // Regular expression (regex) for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value.length === 0) {
            error.textContent = '';
            e.target.classList.remove('valid', 'invalid');
        } else if (!emailRegex.test(value)) {
            error.textContent = 'Please enter a valid email';
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
        } else {
            error.textContent = '';
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
        }
    });
}

// ── Form submission ──
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        /*
            e.preventDefault() — CRITICAL!
            Without it, browser RELOADS the page on form submit.
            We want to handle the data with JavaScript instead.
        */
        e.preventDefault();

        // Gather all form values
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value,
            age: document.getElementById('age').value,
            phone: document.getElementById('phone').value,
            dob: document.getElementById('dob').value,
            website: document.getElementById('website').value,
            favcolor: document.getElementById('favcolor').value,
            satisfaction: document.getElementById('satisfaction').value,
            country: document.getElementById('country').value,
            message: document.getElementById('message').value.trim()
        };

        // Get selected radio button
        const genderRadio = document.querySelector('input[name="gender"]:checked');
        formData.gender = genderRadio ? genderRadio.value : 'not selected';

        // Get all checked checkboxes
        const checkedSkills = document.querySelectorAll('input[name="skills"]:checked');
        /*
            Spread [...nodeList] converts NodeList to array.
            .map() transforms each element.
            cb.value gets the value attribute.
        */
        formData.skills = [...checkedSkills].map(cb => cb.value);

        // Final validation
        let isValid = true;

        if (formData.name.length < 2) {
            document.getElementById('nameError').textContent = 'Name is required (min 2 chars)';
            isValid = false;
        }
        if (!formData.email.includes('@') || !formData.email.includes('.')) {
            document.getElementById('emailError').textContent = 'Valid email is required';
            isValid = false;
        }
        if (formData.password.length < 8) {
            document.getElementById('passwordError').textContent = 'Password must be 8+ characters';
            isValid = false;
        }
        if (formData.message.length === 0) {
            isValid = false;
            alert('Please enter a message');
        }

        if (!isValid) return;

        // ✅ SUCCESS — Display submitted data
        const resultDiv = document.getElementById('formResult');
        resultDiv.innerHTML = `
            <div class="success-card">
                <h3>✅ Form Submitted Successfully!</h3>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Age:</strong> ${formData.age || 'Not provided'}</p>
                <p><strong>Gender:</strong> ${formData.gender}</p>
                <p><strong>Skills:</strong> ${formData.skills.join(', ') || 'None selected'}</p>
                <p><strong>Country:</strong> ${formData.country || 'Not selected'}</p>
                <p><strong>Fav Color:</strong> <span style="color:${formData.favcolor}">${formData.favcolor}</span></p>
                <p><strong>Satisfaction:</strong> ${formData.satisfaction}/10</p>
                <p><strong>Message:</strong> ${formData.message}</p>
            </div>
        `;

        // Scroll to result
        resultDiv.scrollIntoView({ behavior: 'smooth' });

        // Reset form and validation states
        contactForm.reset();
        contactForm.querySelectorAll('input').forEach(input => {
            input.classList.remove('valid', 'invalid');
        });

        // Reset dynamic displays
        document.getElementById('charCount').textContent = '0/500';
        document.getElementById('rangeValue').textContent = '5';
        document.getElementById('colorDisplay').textContent = '#007bff';
        const strengthFill = document.getElementById('strengthFill');
        if (strengthFill) {
            strengthFill.style.width = '0%';
        }
    });
}


// ============================================================
// 19. PASSWORD SHOW/HIDE & STRENGTH METER
// ============================================================

const togglePasswordBtn = document.getElementById('togglePassword');

if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
        // Toggle input type between 'password' and 'text'
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';        // show password
            togglePasswordBtn.textContent = '🙈';
        } else {
            passwordInput.type = 'password';    // hide password
            togglePasswordBtn.textContent = '👁️';
        }
    });
}

// Password strength meter
if (passwordInput) {
    passwordInput.addEventListener('input', (e) => {
        const result = getPasswordStrength(e.target.value);
        const fill = document.getElementById('strengthFill');
        const error = document.getElementById('passwordError');

        if (fill) {
            fill.style.width = result.width;
            fill.style.backgroundColor = result.color;
        }

        if (e.target.value.length > 0 && e.target.value.length < 8) {
            if (error) {
                error.textContent = `${8 - e.target.value.length} more characters needed`;
                error.style.color = '#dc3545';
            }
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
        } else if (e.target.value.length >= 8) {
            if (error) {
                error.textContent = `Strength: ${result.level}`;
                error.style.color = result.color;
            }
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
        } else {
            if (error) error.textContent = '';
            e.target.classList.remove('valid', 'invalid');
        }
    });
}


// ============================================================
// 20. COLOR PICKER → BACKGROUND CHANGE
// ============================================================

/*
    type="color" input gives hex color value.
    'input' event fires continuously while user picks a color.
*/
const favColorInput = document.getElementById('favcolor');
const colorDisplay = document.getElementById('colorDisplay');

if (favColorInput) {
    favColorInput.addEventListener('input', (e) => {
        const color = e.target.value;  // "#ff6b6b" format

        // Update the display text
        if (colorDisplay) {
            colorDisplay.textContent = color;
            colorDisplay.style.color = color;
        }
    });
}

// Color changer in component card
const cardColorPicker = document.getElementById('cardColorPicker');
const randomColorBtn = document.getElementById('randomColorBtn');
const colorResult = document.getElementById('colorResult');

if (cardColorPicker) {
    cardColorPicker.addEventListener('input', (e) => {
        const card = e.target.closest('.component-card');
        card.style.backgroundColor = e.target.value;
        if (colorResult) colorResult.textContent = e.target.value;

        // Adjust text color for readability (dark bg = white text)
        const hex = e.target.value.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        // Perceived brightness formula
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        card.style.color = brightness > 128 ? '#333' : '#fff';
    });
}

if (randomColorBtn) {
    randomColorBtn.addEventListener('click', () => {
        /*
            Generate random hex color:
            Math.random() → random decimal 0-1
            * 16777215 → random number 0-16777215 (0xFFFFFF)
            .toString(16) → convert to hexadecimal
            .padStart(6, '0') → ensure 6 digits (pad with leading zeros)
        */
        const randomColor = '#' + Math.floor(Math.random() * 16777215)
                                      .toString(16)
                                      .padStart(6, '0');

        const card = randomColorBtn.closest('.component-card');
        card.style.backgroundColor = randomColor;
        if (cardColorPicker) cardColorPicker.value = randomColor;
        if (colorResult) colorResult.textContent = randomColor;

        // Adjust text color
        const hex = randomColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        card.style.color = brightness > 128 ? '#333' : '#fff';
    });
}


// ============================================================
// 21. RANGE SLIDER LIVE UPDATE
// ============================================================

const satisfactionSlider = document.getElementById('satisfaction');
const rangeValue = document.getElementById('rangeValue');

if (satisfactionSlider) {
    satisfactionSlider.addEventListener('input', (e) => {
        // e.target.value → current slider position
        if (rangeValue) {
            rangeValue.textContent = e.target.value;
        }
    });
}


// ============================================================
// 22. CHARACTER COUNTER (Textarea)
// ============================================================

const messageTextarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

if (messageTextarea && charCount) {
    messageTextarea.addEventListener('input', (e) => {
        const current = e.target.value.length;
        const max = 500;
        charCount.textContent = `${current}/${max}`;

        // Visual feedback based on characters remaining
        charCount.classList.remove('warning', 'danger');
        if (max - current <= 20) {
            charCount.classList.add('danger');
        } else if (max - current <= 50) {
            charCount.classList.add('warning');
        }
    });
}


// ============================================================
// 23. FILE UPLOAD PREVIEW
// ============================================================

const avatarInput = document.getElementById('avatar');
const avatarPreview = document.getElementById('avatarPreview');

if (avatarInput && avatarPreview) {
    avatarInput.addEventListener('change', (e) => {
        // e.target.files → FileList of selected files
        // files[0] → first selected file
        const file = e.target.files[0];

        if (file) {
            /*
                FileReader reads file contents.
                readAsDataURL converts file to base64 data URL
                that can be used as <img> src.
            */
            const reader = new FileReader();

            // onload fires when file is fully read
            reader.onload = (event) => {
                avatarPreview.src = event.target.result;
                avatarPreview.style.display = 'block';
            };

            reader.readAsDataURL(file);
        }
    });
}


// ============================================================
// 24. TODO LIST (Complete CRUD)
// ============================================================

const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Load saved todos from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render all todos to the DOM
function renderTodos() {
    if (!todoList) return;

    todoList.innerHTML = ''; // Clear existing list

    todos.forEach((todo, index) => {
        /*
            document.createElement — creates a new HTML element.
            We build it, set its properties, then append to the page.
        */
        const li = document.createElement('li');
        if (todo.completed) li.classList.add('completed');

        // innerHTML sets the HTML content of the element
        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="todo-delete" data-index="${index}">✕</button>
        `;

        // Click on text to toggle completed state
        li.querySelector('span').addEventListener('click', () => {
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderTodos();
        });

        todoList.appendChild(li); // Add to the DOM
    });

    todoCount = todos.length;
}

// Save todos to localStorage
function saveTodos() {
    /*
        JSON.stringify converts array/object to string.
        localStorage only stores strings!
        JSON.parse converts string back to array/object.
    */
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Add a new todo
function addTodo() {
    if (!todoInput) return;
    const text = todoInput.value.trim();
    if (!text) return;
    if (todos.length >= MAX_TODOS) {
        alert(`Maximum ${MAX_TODOS} todos allowed!`);
        return;
    }

    // Push new object to array
    todos.push({ text: text, completed: false });
    saveTodos();
    renderTodos();

    todoInput.value = '';   // Clear input
    todoInput.focus();      // Keep focus on input for quick adding
}

// Event listeners for adding
if (addTodoBtn) addTodoBtn.addEventListener('click', addTodo);
if (todoInput) {
    todoInput.addEventListener('keypress', (e) => {
        // e.key tells us WHICH key was pressed
        if (e.key === 'Enter') addTodo();
    });
}

// Delete todo — event delegation on the list
if (todoList) {
    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('todo-delete')) {
            const index = parseInt(e.target.dataset.index);
            /*
                splice(index, 1) removes 1 item at the given index.
                Modifies the original array.
            */
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        }
    });
}

// Initial render
renderTodos();


// ============================================================
// 25. COUNTER APP
// ============================================================

const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetCounterBtn = document.getElementById('resetCounterBtn');

function updateCounter() {
    if (!counterDisplay) return;
    counterDisplay.textContent = counterValue;

    // Dynamic color: green for positive, red for negative, default for zero
    // Ternary operator: condition ? valueIfTrue : valueIfFalse
    counterDisplay.style.color =
        counterValue > 0 ? '#28a745' :
        counterValue < 0 ? '#dc3545' :
        'inherit';
}

if (incrementBtn) incrementBtn.addEventListener('click', () => { counterValue++; updateCounter(); });
if (decrementBtn) decrementBtn.addEventListener('click', () => { counterValue--; updateCounter(); });
if (resetCounterBtn) resetCounterBtn.addEventListener('click', () => { counterValue = 0; updateCounter(); });


// ============================================================
// 26. DIGITAL CLOCK
// ============================================================

const clockDisplay = document.getElementById('clockDisplay');
const clockDate = document.getElementById('clockDate');

function updateClock() {
    if (!clockDisplay) return;

    const now = new Date();

    // String().padStart(2, '0') ensures 2 digits (e.g., "9" → "09")
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    if (clockDate) {
        // toLocaleDateString with options for formatted date
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        clockDate.textContent = now.toLocaleDateString('en-US', options);
    }
}

/*
    setInterval runs a function repeatedly at specified intervals.
    1000 ms = 1 second → updates clock every second.
*/
setInterval(updateClock, 1000);
updateClock(); // Call immediately (don't wait 1 second for first update)


// ============================================================
// 27. SEARCH FILTER
// ============================================================

const searchInput = document.getElementById('searchInput');
const searchItems = document.querySelectorAll('.search-item');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        /*
            .toLowerCase() converts to lowercase for case-insensitive search.
            .trim() removes whitespace.
            .includes(query) checks if string contains the query.
        */
        const query = e.target.value.toLowerCase().trim();

        searchItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.classList.remove('hidden'); // show
            } else {
                item.classList.add('hidden');    // hide
            }
        });
    });
}


// ============================================================
// 28. LOCAL STORAGE — Summary
// ============================================================

/*
    localStorage API:

    SAVE:
    localStorage.setItem('key', 'string value');
    localStorage.setItem('obj', JSON.stringify({ a: 1 }));

    READ:
    const val = localStorage.getItem('key');     // returns string or null
    const obj = JSON.parse(localStorage.getItem('obj')); // parse back to object

    DELETE:
    localStorage.removeItem('key');              // remove one item
    localStorage.clear();                        // remove everything

    Already demonstrated in:
    - Dark mode toggle (saves preference)
    - Todo list (saves tasks)
*/


// ============================================================
// 29. SMOOTH SCROLL for Anchor Links
// ============================================================

/*
    Select all links that start with # (internal page links).
    Attribute selector: a[href^="#"] → <a> where href STARTS WITH "#"
*/
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // prevent default jump behavior

        const targetId = link.getAttribute('href'); // e.g., "#services"
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ============================================================
// 30. EVENT DELEGATION — Summary
// ============================================================

/*
    Event Delegation is used throughout this file:
    
    1. Filter buttons (Section 14):
       - ONE listener on .filter-buttons container
       - Checks if e.target has 'filter-btn' class
    
    2. Tab buttons (Section 15):
       - ONE listener on .tab-buttons container
       - Checks if e.target has 'tab-btn' class
    
    3. Accordion headers (Section 16):
       - ONE listener on #accordion container
       - Uses e.target.closest('.accordion-header') to find the header
    
    4. Todo delete buttons (Section 24):
       - ONE listener on #todoList container
       - Checks if e.target has 'todo-delete' class
    
    5. Modal overlay (Section 17):
       - ONE listener on overlay
       - Checks if e.target === overlay (not modal content)
    
    WHY Event Delegation:
    - Fewer listeners = better memory usage
    - Works for elements added dynamically (like new todo items)
    - Single point of control for related interactions
    
    HOW:
    parent.addEventListener('click', (e) => {
        if (e.target.matches('.specific-child')) {
            // handle click on this type of child
        }
    });
    
    e.target → the actual element that was clicked
    e.target.closest('.class') → find nearest ancestor with class
    e.target.matches('.class') → check if target matches selector
*/


// ============================================================
// BONUS: Console welcome message
// ============================================================
console.log(`
%c${APP_NAME} v${VERSION}
%cComplete HTML, CSS, JS Reference
%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All interactive features are working!
Open this file to study every concept.
`,
'color: #007bff; font-size: 24px; font-weight: bold;',
'color: #666; font-size: 14px;',
'color: #ddd;'
);


// ============================================================
// Summary of Key Concepts Used in This File:
// ============================================================
/*
    VARIABLES:     const, let (Sections 1, throughout)
    DATA TYPES:    String, Number, Boolean, Array, Object (Section 1)
    OPERATORS:     +, -, *, /, %, ===, !==, &&, ||, !, ternary (throughout)
    CONTROL FLOW:  if/else (Section 2, 18), switch (Section 2)
    LOOPS:         forEach (throughout), for...of (implicit via forEach)
    FUNCTIONS:     Declaration, Expression, Arrow (Section 3)
    ARRAYS:        push, splice, map, filter, forEach, includes (Sections 4, 24)
    OBJECTS:       Creation, access, destructuring, spread (Section 5)
    DOM SELECT:    getElementById, querySelector, querySelectorAll (Section 6)
    DOM CHANGE:    textContent, innerHTML, style, classList (Section 7)
    EVENTS:        click, input, change, submit, keydown, scroll (Section 8)
    EVENT OBJ:     e.target, e.preventDefault(), e.key (throughout)
    DELEGATION:    Parent listener + e.target check (Sections 14-16, 24)
    TIMERS:        setInterval, clearInterval (Sections 13, 26)
    STORAGE:       localStorage.setItem/getItem, JSON (Sections 10, 24)
    DOM CREATE:    createElement, appendChild, innerHTML (Section 24)
    FORM VALUES:   .value, .checked, :checked selector (Section 18)
    DATA ATTRS:    dataset.*, data-* attributes (Sections 13, 14, 15)
*/