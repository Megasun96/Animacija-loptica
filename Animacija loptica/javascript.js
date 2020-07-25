
var n = 50
var $, a = new Array(n), c, T = 0, clr = "0123456789ABCDEF", r = 0, m = -1, arah = 0.01
window.onload = function() {
    $ = document.getElementById.bind(document)
    c = document.createElement("canvas")
    document.body.appendChild(c);
    document.body.style.margin = 0
    c.style.backgroundColor = "#000"
    c.style.position = "fixed"
    c.style.width = "100%"
    c.style.height = "100%"
    c.width = c.offsetWidth
    c.height = c.offsetHeight
    for (var i = 0; i < n; i++) {
        a[i] = new Object()
        a[i].x = c.width / 2
        a[i].y = c.height / 2
    }
    setInterval(draw, 30)
}
function draw() {
    T += 1
    m += arah;

    var ctx = c.getContext("2d")
    ctx.globalAlpha = 0.04
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, c.width, c.height)

    if (m > 1 || m < -1) arah = -arah;
    for (var i = 0; i < n; i++) {
        t = (T + i * 4) * Math.PI / 100
        //if (i > n / 2) {
            a[i].x += m * Math.sin(t) * 5
            a[i].y += m * Math.cos(t) * 5
        //}


        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.fillStyle = "#0FF"
        //ctx.fillStyle = "#" + clr[Math.floor(Math.random() * 16)] + clr[Math.floor(Math.random() * 16)] + clr[Math.floor(Math.random() * 16)]
        ctx.arc(a[i].x, a[i].y, 5, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()
    }
}
