var hostname = window.location.hostname;
var target = window.location.protocol + "//swkfk.top" + window.location.pathname

console.log("Current hostname: " + hostname);

if (hostname == "localhost" || hostname.startsWith("10.") || hostname.startsWith("192.")) {
    console.log("You are from localhost or the inner net!");
} else if (hostname.toLowerCase() == "swkfk.top") {
    console.log("Welcome!");
} else if (hostname.toLocaleLowerCase() == "swkfk.github.io") {
    console.log("Oh, from github page~");
    window.location.replace(target);
} else {
    console.log("Where are you from?");
    alert("Invalid visit! All actions here are independent of the original site")
}
