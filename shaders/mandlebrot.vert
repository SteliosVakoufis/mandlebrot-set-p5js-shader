attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vertPos;

void main() {
  // set pos to be used by fragment shader
  vertPos = aTexCoord;

  vec4 position = vec4(aPosition, 1);
  position.xy = (position.xy - .5) * 2.;

  gl_Position = position;
}
