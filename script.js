let c = document.getElementById("canvas");
(S = Math.sin), (C = Math.cos);
x = c.getContext("2d");
(c.width = 1920), (c.height = 1080);
t = 0;

function draw() {
    requestAnimationFrame(draw);
    (cx = 960), (cy = 540), x.fillRect(0, 0, 2e3, 2e3);
    for (i = 99; i--;) x.clearRect(cx + (1 /(Z = 3 + C((p = i + t
    )) * S((q = i / 31)))) * (X = S(p) * S(q)) * cx, cy + (C(q) / Z) * cx, (s = 69 / Z / Z), s);
    t += 0.01;
}
draw();