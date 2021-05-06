let el = document.getElementsByTagName("span");

for (let i = 0; i < el.length; i++) {
    console.log(el[i].getAttribute("data-name"))
}