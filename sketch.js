function setup() {
    createCanvas(800, 800);
}

function draw() {
    background("#E4DFC9");
    translate(400, 400);
    fill("#282828");
    noStroke();
    triangle(-400, -400, -195, -400, -400, -4);
    beginShape();
    vertex(-400, -4);
    vertex(-197, -1);
    vertex(-195, -195);
    vertex(-96, -193);
    vertex(0, 0);
    vertex(-192, height - 400);
    vertex(-400, height - 400);
    endShape(CLOSE);
    rotate(PI);
    fill("#282828");
    noStroke();
    triangle(-400, -400, -195, -400, -400, -4);
    beginShape();
    vertex(-400, -4);
    vertex(-197, -1);
    vertex(-195, -195);
    vertex(-96, -193);
    vertex(0, 0);
    vertex(-192, height - 400);
    vertex(-400, height - 400);
    endShape(CLOSE);
    noFill();
    stroke(255);
    strokeWeight(5);
    rect(-400,-400,width,height);
}
