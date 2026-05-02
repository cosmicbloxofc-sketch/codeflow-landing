import { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec2 } from 'ogl';

const vertex = `
attribute vec2 position;
void main(){gl_Position=vec4(position,0.0,1.0);}
`;

const fragment = `
#ifdef GL_ES
precision lowp float;
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform float uSpeed;
uniform float uWarp;

void main(){
    vec2 uv = gl_FragCoord.xy / uResolution.xy;

    // Ondas grandes e visíveis
    float wave1 = sin(uv.x * 2.0 + uTime * uSpeed) * 0.5 + 0.5;
    float wave2 = sin(uv.y * 1.5 - uTime * uSpeed * 0.8) * 0.5 + 0.5;
    float wave3 = sin((uv.x - uv.y) * 1.8 + uTime * uSpeed * 0.6) * 0.5 + 0.5;

    // Movimento orgânico mais intenso
    vec2 warp = vec2(
        sin(uv.y * 3.0 + uTime * uSpeed * 0.5) * uWarp,
        cos(uv.x * 3.0 - uTime * uSpeed * 0.5) * uWarp
    );

    vec2 warpedUV = uv + warp;

    // Padrões mais definidos
    float pattern1 = sin(warpedUV.x * 4.0 + uTime * uSpeed) * 0.5 + 0.5;
    float pattern2 = cos(warpedUV.y * 4.0 - uTime * uSpeed * 0.7) * 0.5 + 0.5;

    // Combinar para criar gradientes visíveis
    float finalPattern = (wave1 * 0.4 + wave2 * 0.3 + wave3 * 0.3);
    float movement = (pattern1 * 0.6 + pattern2 * 0.4);

    // Cores com mais contraste - azul claro para branco com transições visíveis
    vec3 color1 = vec3(0.85, 0.92, 1.0);   // Azul claro
    vec3 color2 = vec3(1.0, 1.0, 1.0);      // Branco
    vec3 color3 = vec3(0.75, 0.85, 0.98);   // Azul médio claro
    vec3 color4 = vec3(0.92, 0.96, 1.0);    // Azul muito claro

    // Mix com mais contraste
    vec3 finalColor = mix(color1, color2, finalPattern);
    finalColor = mix(finalColor, color3, movement * 0.5);
    finalColor = mix(finalColor, color4, sin(uTime * uSpeed * 0.3) * 0.2 + 0.5);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

export default function LightWave({
  speed = 0.5,
  warpAmount = 0.05,
  resolutionScale = 1
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas.parentElement;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas
    });

    const gl = renderer.gl;
    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() },
        uSpeed: { value: speed },
        uWarp: { value: warpAmount }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const w = parent.clientWidth,
        h = parent.clientHeight;
      renderer.setSize(w * resolutionScale, h * resolutionScale);
      program.uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener('resize', resize);
    resize();

    const start = performance.now();
    let frame = 0;

    const loop = () => {
      program.uniforms.uTime.value = ((performance.now() - start) / 1000);
      program.uniforms.uSpeed.value = speed;
      program.uniforms.uWarp.value = warpAmount;
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [speed, warpAmount, resolutionScale]);

  return <canvas ref={ref} className="w-full h-full block" />;
}
