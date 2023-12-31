let mandlebrotShader;

let position;

/** This function loads resources that will be used later. */
function preload() {
  // load in the shader
  mandlebrotShader = loadShader('shaders/mandlebrot.vert', 'shaders/mandlebrot.frag');
}

function setup() {
  createCanvas(400, 400, WEBGL);

  position = createVector(0, 0, 1);

  /**
   * tell p5 to use the shader
   * 
   * this will make everything that we draw use that specific shader
   * if we want to revert back to the default shaders we can use the
   * resetShader() function
   */
  shader(mandlebrotShader);

  noStroke();
}

function draw() {
  background(0);

  if (keyIsPressed) handleKeyPressed(keyCode);

  mandlebrotShader.setUniform('setPos', position.array());

  // runs shader on geometry
  rect();
}

function handleKeyPressed(code) {
  const moveSpeed = 0.1;
  const zoomSpeed = 0.01;

  switch (code) {
    case 81: // Handle key Q
      position.z += zoomSpeed;
      break;
    case 69: // Handle key E
      position.z -= zoomSpeed;
      break;
    case 87: // Handle key W
      position.y += moveSpeed;
      break;
    case 83: // Handle key S
      position.y -= moveSpeed;
      break;
    case 65: // Handle key A
      position.x -= moveSpeed;
      break;
    case 68: // Handle key D
      position.x += moveSpeed;
      break;
  }
}
