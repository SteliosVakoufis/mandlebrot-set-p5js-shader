let mandlebrotShader;

/** This function loads resources that will be used later. */
function preload() {
  // load in the shader
  exampleShader = loadShader('shaders/mandlebrot.vert', 'shaders/mandlebrot.frag');
}

function setup() {
  createCanvas(400, 400, WEBGL);

  /**
   * tell p5 to use the shader
   * 
   * this will make everything that we draw use that specific shader
   * if we want to revert back to the default shaders we can use the
   * resetShader() function
   */
  shader(exampleShader);

  noStroke();
}

function draw() {
  background(0);

  // runs shader on geometry
  rect();
}
