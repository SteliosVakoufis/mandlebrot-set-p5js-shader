precision mediump float;

const int maxIters = 200;

const float maxSumComponent = 16.0;

varying vec2 pos;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

// a^2 - b^2 + 2abi

void main() {

  vec2 constant = vec2(
    map(
      pos.x,
      0.0,
      1.0,
      -2.0,
      2.0
    ),
    map(
      pos.y, 
      0.0, 
      1.0, 
      -2.0, 
      2.0
    )
  );

  vec2 current = constant;

  vec3 col = vec3(1., 1., 1.);
  for(int i = 0; i < maxIters; i++) {
    current = vec2(
      current.x * current.x - current.y * current.y,
      2.0 * current.x * current.y
    ) + constant;

    float currentSumComponents = current.x + current.y;
    if (currentSumComponents > maxSumComponent) {
      float weight = map(
        float(i), 
        0.0, 
        float(maxIters), 
        0.0, 
        maxSumComponent
      );
      col = vec3(1.0 * weight);
      break;
    }

  }

  gl_FragColor = vec4(col, 1.); 
}
