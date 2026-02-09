result = (a !== null && a !== undefined) ? a : b;

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

firstName = null;
lastName = null;
nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

// without parentheses
area = height ?? 100 * width ?? 50;

// ...works this way (not what we want):
area = height ?? (100 * width) ?? 50;

let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'

// The correct way to write it is:
x = (1 && 2) ?? 3; // 2

