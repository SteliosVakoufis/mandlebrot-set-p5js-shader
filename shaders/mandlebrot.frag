precision mediump float;

const int maxIters = 500;

const float maxSumComponent = 16.0;

varying vec2 vertPos;

uniform vec3 setPos;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

// a^2 - b^2 + 2abi

void main() {

  vec2 constant = (
    vec2(
      map(
        vertPos.x, 
        0.0, 
        1.0, 
        -2.0, 
        2.0
      ),
      map(
        vertPos.y, 
        0.0, 
        1.0, 
        -2.0, 
        2.0
      )
    ) 
    + 
    vec2(
      setPos.x, 
      setPos.y
    )
  )
  *
  setPos.z
  ;

  // constant = constant + vec2(4.0);
  // constant = constant * .1;

  vec2 current = constant;

  vec3 col = vec3(0.0, 0.0, 0.0);
  for(int i = 0; i < maxIters; i++) {
    current = vec2(
      current.x * current.x - current.y * current.y,
      2.0 * current.x * current.y
    ) + constant;

    float currentSumComponents = current.x + current.y;
    if (currentSumComponents > maxSumComponent) {
      float weight = float(i) / float(maxIters) * 4.0;
      col = vec3(1.0 * weight);
      break;
    }
  }

  gl_FragColor = vec4(col, 1.); 
}
