import { useEffect, useRef, useState, useCallback } from 'react';
import { NavBar } from '../components/ui/about';

const W = 640;
const H = 380;

const WORDS = [
  'const','let','var','function','return','import','export','async','await',
  'useState','useRef','useEffect','render','class','extends','typeof','void',
  'null','undefined','boolean','string','number','object','array','console',
  'promise','resolve','reject','fetch','then','catch','finally','throw',
  'ghost','pixel','laser','error','crash','debug','stack','frame','input',
  'query','scope','block','parse','token','logic','cache','proxy','route',
  'model','state','props','hooks','event','click','mount','build','deploy',
];

const BG_SYMBOLS = ['{}', '//', '[]', '()', '=>', '&&', '||', '#!/', '~~~', '---', '404', 'EOF', 'NaN'];

// 5x7 pixel font bitmap (5 cols, 7 rows = 35 bits per char)
const FONT: { [key: string]: number[] } = {
  'A': [0,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1],
  'B': [1,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,0],
  'C': [0,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 0,1,1,1,1],
  'D': [1,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,0],
  'E': [1,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 1,1,1,1,0, 1,0,0,0,0, 1,0,0,0,0, 1,1,1,1,1],
  'F': [1,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 1,1,1,1,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0],
  'G': [0,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 1,0,1,1,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
  'H': [1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1],
  'I': [1,1,1,1,1, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 1,1,1,1,1],
  'J': [0,0,1,1,1, 0,0,0,1,0, 0,0,0,1,0, 0,0,0,1,0, 1,0,0,1,0, 1,0,0,1,0, 0,1,1,1,0],
  'K': [1,0,0,0,1, 1,0,0,1,0, 1,0,1,0,0, 1,1,0,0,0, 1,0,1,0,0, 1,0,0,1,0, 1,0,0,0,1],
  'L': [1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,1,1,1,1],
  'M': [1,0,0,0,1, 1,1,0,1,1, 1,0,1,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1],
  'N': [1,0,0,0,1, 1,1,0,0,1, 1,0,1,0,1, 1,0,0,1,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1],
  'O': [0,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
  'P': [1,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0],
  'Q': [0,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,1,0, 1,0,0,0,1, 0,1,1,1,1],
  'R': [1,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,0, 1,0,1,0,0, 1,0,0,1,0, 1,0,0,0,1],
  'S': [0,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 0,1,1,1,0, 0,0,0,0,1, 0,0,0,0,1, 1,1,1,1,0],
  'T': [1,1,1,1,1, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0],
  'U': [1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
  'V': [1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,0,1,0, 0,1,0,1,0, 0,0,1,0,0],
  'W': [1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,1,0,1, 1,1,0,1,1, 1,0,0,0,1],
  'X': [1,0,0,0,1, 1,0,0,0,1, 0,1,0,1,0, 0,0,1,0,0, 0,1,0,1,0, 1,0,0,0,1, 1,0,0,0,1],
  'Y': [1,0,0,0,1, 1,0,0,0,1, 0,1,0,1,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0],
  'Z': [1,1,1,1,1, 0,0,0,0,1, 0,0,0,1,0, 0,0,1,0,0, 0,1,0,0,0, 1,0,0,0,0, 1,1,1,1,1],
  '0': [0,1,1,1,0, 1,0,0,1,1, 1,0,1,0,1, 1,1,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
  '1': [0,0,1,0,0, 0,1,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,1,1,1,0],
  '2': [0,1,1,1,0, 1,0,0,0,1, 0,0,0,0,1, 0,0,0,1,0, 0,0,1,0,0, 0,1,0,0,0, 1,1,1,1,1],
  '3': [1,1,1,1,0, 0,0,0,0,1, 0,0,0,0,1, 0,1,1,1,0, 0,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
  '4': [0,0,0,1,0, 0,0,1,1,0, 0,1,0,1,0, 1,0,0,1,0, 1,1,1,1,1, 0,0,0,1,0, 0,0,0,1,0],
  '5': [1,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 1,1,1,1,0, 0,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
  '6': [0,0,1,1,1, 0,1,0,0,0, 1,0,0,0,0, 1,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
  '7': [1,1,1,1,1, 0,0,0,0,1, 0,0,0,1,0, 0,0,1,0,0, 0,1,0,0,0, 0,1,0,0,0, 1,0,0,0,0],
  '8': [0,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
  '9': [0,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,1, 0,0,0,0,1, 0,0,0,1,0, 1,1,1,0,0],
  '>': [0,0,0,1,0, 0,0,1,0,0, 0,1,0,0,0, 0,0,1,0,0, 0,0,0,1,0, 0,0,0,0,0, 0,0,0,0,0],
  '/': [0,0,0,0,1, 0,0,0,1,0, 0,0,1,0,0, 0,1,0,0,0, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
  '(': [0,0,1,0,0, 0,1,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 0,1,0,0,0, 0,0,1,0,0],
  ')': [0,1,0,0,0, 0,0,1,0,0, 0,0,0,1,0, 0,0,0,1,0, 0,0,0,1,0, 0,0,1,0,0, 0,1,0,0,0],
  '{': [0,0,1,1,0, 0,1,0,0,0, 0,1,0,0,0, 1,0,0,0,0, 0,1,0,0,0, 0,1,0,0,0, 0,0,1,1,0],
  '}': [0,1,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,0,1,0, 0,0,1,0,0, 0,0,1,0,0, 0,1,1,0,0],
  '[': [0,1,1,1,0, 0,1,0,0,0, 0,1,0,0,0, 0,1,0,0,0, 0,1,0,0,0, 0,1,0,0,0, 0,1,1,1,0],
  ']': [0,1,1,1,0, 0,0,0,1,0, 0,0,0,1,0, 0,0,0,1,0, 0,0,0,1,0, 0,0,0,1,0, 0,1,1,1,0],
  '=': [0,0,0,0,0, 1,1,1,1,0, 0,0,0,0,0, 1,1,1,1,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
  '#': [0,1,0,1,0, 1,1,1,1,1, 0,1,0,1,0, 1,1,1,1,1, 0,1,0,1,0, 0,0,0,0,0, 0,0,0,0,0],
  '!': [0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,0,0,0, 0,0,1,0,0],
  '.': [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,1,0,0],
  ',': [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,1,0,0, 0,1,0,0,0],
  '-': [0,0,0,0,0, 0,0,0,0,0, 1,1,1,1,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
  '_': [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 1,1,1,1,1],
  ' ': [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
};

function rand(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

function drawPixelText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  blockSize: number,
  color: string,
  alpha: number = 1,
  perCharBrightness?: { [key: number]: number }
) {
  ctx.fillStyle = color;
  ctx.globalAlpha = alpha;
  let cursorX = x;
  const gap = blockSize * 1.5;

  for (let charIdx = 0; charIdx < text.length; charIdx++) {
    const char = text[charIdx].toUpperCase();
    const bitmap = FONT[char] || FONT[' '];
    const brightness = perCharBrightness?.[charIdx] ?? 1;

    if (bitmap) {
      for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 5; col++) {
          if (bitmap[row * 5 + col]) {
            ctx.globalAlpha = alpha * brightness;
            ctx.beginPath();
            ctx.roundRect(
              cursorX + col * (blockSize + 1),
              y + row * (blockSize + 1),
              blockSize,
              blockSize,
              blockSize * 0.4
            );
            ctx.fill();
          }
        }
      }
    }
    cursorX += 5 * (blockSize + 1) + gap;
  }
  ctx.globalAlpha = 1;
}

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<any>(null);
  const rafRef = useRef<number | null>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const [screen, setScreen] = useState('start');
  const [highScore, setHighScore] = useState(
    () => parseInt(localStorage.getItem('tr-best') || '0')
  );
  const [scores, setScores] = useState<number[]>([]);

  function initState() {
    return {
      words: [],
      ghosts: Array.from({ length: 4 }, (_, i) => ({
        text: BG_SYMBOLS[i % BG_SYMBOLS.length],
        x: rand(0, W),
        y: rand(60, H - 100),
        speed: rand(0.08, 0.18),
        alpha: rand(0.03, 0.05),
      })),
      particles: [],
      input: '',
      activeWord: null,
      score: 0,
      lives: 3,
      frame: 0,
      spawnTimer: 0,
      groundDots: Array.from({ length: 50 }, () => ({
        x: Math.random() * W * 2,
        w: rand(1, 3),
      })),
    };
  }

  function spawnWord(s: any) {
    const text = WORDS[Math.floor(Math.random() * WORDS.length)];
    const speed = 0.7 + s.score / 600;
    const maxX = W - text.length * 28 - 10;
    s.words.push({
      text,
      x: rand(10, Math.max(10, maxX)),
      y: -50,
      speed,
      typed: '',
      perCharBrightness: {},
    });
  }

  function destroyWord(s: any, word: any) {
    s.score += word.text.length * Math.ceil(word.speed);

    // Create dot particles for each character
    for (let charIdx = 0; charIdx < word.text.length; charIdx++) {
      const char = word.text[charIdx].toUpperCase();
      const bitmap = FONT[char] || FONT[' '];
      const charX = word.x + charIdx * 20;

      if (bitmap) {
        for (let row = 0; row < 7; row++) {
          for (let col = 0; col < 5; col++) {
            if (bitmap[row * 5 + col]) {
              const dotX = charX + col * 4;
              const dotY = word.y + row * 4;
              const angle = Math.random() * Math.PI * 2;
              const spd = rand(2, 5);
              s.particles.push({
                x: dotX,
                y: dotY,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd - rand(1, 3),
                size: 3,
                life: 1,
                decay: rand(0.025, 0.055),
              });
            }
          }
        }
      }
    }

    const idx = s.words.indexOf(word);
    if (idx !== -1) s.words.splice(idx, 1);
  }

  const endGame = useCallback(() => {
    const s = stateRef.current;
    const final = s?.score || 0;
    const prev = parseInt(localStorage.getItem('tr-best') || '0');
    if (final > prev) {
      localStorage.setItem('tr-best', final);
      setHighScore(final);
    }
    setScores(p => [...p, final].sort((a, b) => b - a).slice(0, 5));
    setScreen('over');
  }, []);

  function update() {
    const s = stateRef.current;
    s.frame++;

    const every = Math.max(50, 120 - s.score / 10);
    if (++s.spawnTimer >= every) {
      spawnWord(s);
      s.spawnTimer = 0;
    }

    // Move words
    for (let i = s.words.length - 1; i >= 0; i--) {
      const w = s.words[i];
      w.y += w.speed;

      // Update per-character brightness
      for (const key in w.perCharBrightness) {
        w.perCharBrightness[key] -= 0.1;
        if (w.perCharBrightness[key] < 0.4) {
          delete w.perCharBrightness[key];
        }
      }

      if (w.y >= H - 40) {
        if (s.activeWord === w) {
          s.activeWord = null;
          s.input = '';
        }
        s.words.splice(i, 1);
        if (--s.lives <= 0) {
          endGame();
          return;
        }
      }
    }

    // Move background symbols
    s.ghosts.forEach((g: any) => {
      g.x -= g.speed;
      if (g.x < -50) {
        g.x = W + 50;
        g.y = rand(50, H - 80);
        g.text = BG_SYMBOLS[Math.floor(Math.random() * BG_SYMBOLS.length)];
      }
    });

    // Scroll ground dots
    s.groundDots.forEach((d: any) => {
      d.x -= 1.5;
      if (d.x < -10) {
        d.x = W + 50;
      }
    });

    // Update particles
    s.particles.forEach((p: any) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
    });
    s.particles = s.particles.filter((p: any) => p.life > 0);
  }

  function draw(ctx: CanvasRenderingContext2D | null) {
    if (!ctx) return;
    const s = stateRef.current;

    // Clear background
    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, W, H);

    // Background symbols
    s.ghosts.forEach((g: any) => {
      drawPixelText(ctx, g.text, g.x, g.y, 2, '#ffffff', g.alpha);
    });

    // Ground dots
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    s.groundDots.forEach((d: any) => {
      ctx.beginPath();
      ctx.roundRect(d.x, H - 55, 4, 4, 1.6);
      ctx.fill();
    });

    // Ground line visual
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    for (let i = 0; i < W; i += 10) {
      ctx.beginPath();
      ctx.roundRect(i, H - 52, 4, 2, 0.8);
      ctx.fill();
    }

    // Falling words
    s.words.forEach((w: any) => {
      const isActive = w === s.activeWord;
      if (isActive && w.typed) {
        // Typed portion - bright
        drawPixelText(
          ctx,
          w.typed,
          w.x,
          w.y,
          4,
          '#ffffff',
          1,
          w.perCharBrightness
        );
        // Remaining portion - dim
        drawPixelText(
          ctx,
          w.text.slice(w.typed.length),
          w.x + w.typed.length * 28,
          w.y,
          4,
          '#ffffff',
          0.25
        );
      } else {
        const alpha = isActive ? 1.0 : 0.55;
        drawPixelText(ctx, w.text, w.x, w.y, 4, '#ffffff', alpha);
      }
    });

    // Particles
    s.particles.forEach((p: any) => {
      ctx.fillStyle = `rgba(255,255,255,${p.life})`;
      ctx.beginPath();
      ctx.roundRect(p.x, p.y, p.size, p.size, p.size * 0.4);
      ctx.fill();
    });

    // HUD - Lives (hearts as small dots)
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = i < s.lives ? '#ffffff' : 'rgba(255,255,255,0.15)';
      ctx.beginPath();
      ctx.roundRect(14 + i * 24, 8, 14, 14, 4);
      ctx.fill();
    }

    // HUD - Score
    drawPixelText(ctx, 'SCORE', 14, 32, 1.8, '#ffffff', 0.65);
    drawPixelText(ctx, String(s.score).padStart(6, '0'), 14, 50, 2.2, '#ffffff', 1);

    // HUD - Hi Score
    drawPixelText(ctx, 'HI', W - 110, 32, 1.8, '#ffffff', 0.65);
    drawPixelText(ctx, String(highScore).padStart(6, '0'), W - 110, 50, 2.2, '#ffffff', 1);
  }

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const s = stateRef.current;
      if (!s || screen !== 'play') return;

      if (e.key === 'Backspace') {
        s.input = s.input.slice(0, -1);
        if (!s.input) {
          s.activeWord = null;
        } else if (s.activeWord) {
          s.activeWord.typed = s.input;
        }
        return;
      }

      if (e.key.length !== 1 || e.ctrlKey || e.metaKey) return;

      const next = s.input + e.key;

      if (!s.activeWord) {
        s.activeWord = s.words.find((w: any) => w.text.startsWith(next)) || null;
        if (s.activeWord) {
          s.input = next;
          s.activeWord.typed = next;
          s.activeWord.perCharBrightness[s.input.length - 1] = 1.8;
          if (next === s.activeWord.text) {
            destroyWord(s, s.activeWord);
            s.input = '';
            s.activeWord = null;
          }
        }
      } else if (s.activeWord.text.startsWith(next)) {
        s.input = next;
        s.activeWord.typed = next;
        s.activeWord.perCharBrightness[s.input.length - 1] = 1.8;
        if (next === s.activeWord.text) {
          destroyWord(s, s.activeWord);
          s.input = '';
          s.activeWord = null;
        }
      }
    },
    [screen]
  );

  useEffect(() => {
    if (screen !== 'play') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function loop() {
      update();
      draw(ctx);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [screen, onKeyDown]);

  function onCanvasTap(e: React.TouchEvent) {
    e.preventDefault();
    const s = stateRef.current;
    if (!s) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const tx = (e.touches[0].clientX - rect.left) * (W / rect.width);
    const ty = (e.touches[0].clientY - rect.top) * (H / rect.height);
    const hit = s.words.find((w: any) =>
      tx >= w.x - 8 && tx <= w.x + w.text.length * 20 + 8 && Math.abs(ty - w.y) < 30
    );
    if (hit) {
      s.activeWord = hit;
      s.input = '';
      hit.typed = '';
      hit.perCharBrightness = {};
      hiddenInputRef.current?.focus();
    }
  }

  return (
    <>
      <NavBar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '3rem 0 2rem 0',
          gap: '1.5rem',
          fontFamily: "'Press Start 2P', 'Courier New', monospace",
        }}
      >
        <input
          ref={hiddenInputRef}
          style={{ position: 'absolute', opacity: 0, width: 1, height: 1, top: 0 }}
          onInput={e => {
            const ch = (e.target as HTMLInputElement).value.slice(-1);
            if (ch) onKeyDown({ key: ch, length: 1 } as any);
            (e.target as HTMLInputElement).value = '';
          }}
        />

        <div style={{ position: 'relative' }}>
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            style={{
              display: 'block',
              border: '1px solid rgba(255,255,255,0.06)',
              maxWidth: '100%',
              cursor: 'crosshair',
            }}
            onTouchStart={onCanvasTap}
          />

          {/* START SCREEN */}
          {screen === 'start' && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: '#111111',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2.5rem',
                zIndex: 50,
              }}
            >
              <canvas
                width={500}
                height={200}
                ref={ref => {
                  if (ref) {
                    const ctx = ref.getContext('2d');
                    if (ctx) {
                      ctx.fillStyle = '#111111';
                      ctx.fillRect(0, 0, 500, 200);
                      ctx.fillStyle = '#ffffff';
                      ctx.globalAlpha = 1;
                      drawPixelText(ctx, 'TERMINAL', 60, 20, 6, '#ffffff', 1);
                      drawPixelText(ctx, 'RAIN', 150, 130, 4, '#ffffff', 0.5);
                    }
                  }
                }}
                style={{ maxWidth: '90%', height: 'auto' }}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: "'Press Start 2P', 'Courier New', monospace",
                  letterSpacing: '1px',
                  lineHeight: '1.8',
                }}
              >
                TYPE THE FALLING WORDS
                <br />
                BEFORE THEY HIT THE GROUND
              </div>
              <button
                onClick={() => {
                  stateRef.current = initState();
                  setScreen('play');
                }}
                style={{
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.4)',
                  color: '#ffffff',
                  fontFamily: "'Press Start 2P', 'Courier New', monospace",
                  fontSize: '13px',
                  letterSpacing: '3px',
                  padding: '12px 32px',
                  cursor: 'pointer',
                  marginTop: '1rem',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    'rgba(255,255,255,0.8)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    '0 0 10px rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    'rgba(255,255,255,0.4)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
              >
                BOOT UP
              </button>
            </div>
          )}

          {/* GAME OVER SCREEN */}
          {screen === 'over' && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(17,17,17,0.98)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                zIndex: 50,
              }}
            >
              <canvas
                width={420}
                height={100}
                ref={ref => {
                  if (ref) {
                    const ctx = ref.getContext('2d');
                    if (ctx) {
                      ctx.fillStyle = 'rgba(17,17,17,0.98)';
                      ctx.fillRect(0, 0, 420, 100);
                      drawPixelText(ctx, 'TERMINATED', 20, 15, 5, '#ffffff', 1);
                    }
                  }
                }}
                style={{ maxWidth: '90%', height: 'auto' }}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: "'Press Start 2P', 'Courier New', monospace",
                  letterSpacing: '2px',
                  lineHeight: '2',
                }}
              >
                <div>SCORE {String(stateRef.current?.score || 0).padStart(6, '0')}</div>
                <div>BEST  {String(highScore).padStart(6, '0')}</div>
              </div>
              <button
                onClick={() => {
                  stateRef.current = initState();
                  setScreen('play');
                }}
                style={{
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.4)',
                  color: '#ffffff',
                  fontFamily: "'Press Start 2P', 'Courier New', monospace",
                  fontSize: '13px',
                  letterSpacing: '3px',
                  padding: '12px 32px',
                  cursor: 'pointer',
                  marginTop: '1rem',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    'rgba(255,255,255,0.8)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    '0 0 10px rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    'rgba(255,255,255,0.4)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
              >
                REBOOT
              </button>
            </div>
          )}
        </div>

        {/* SCOREBOARD */}
        {scores.length > 0 && (
          <div
            style={{
              width: W,
              maxWidth: '100%',
              borderTop: '1px solid rgba(255,255,255,.06)',
              paddingTop: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,.3)',
                letterSpacing: '2px',
                marginBottom: '12px',
                fontFamily: "'Press Start 2P', 'Courier New', monospace",
                margin: 0,
              }}
            >
              SESSION LOG
            </p>
            {scores.map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,.5)',
                  padding: '6px 0',
                  fontFamily: "'Press Start 2P', 'Courier New', monospace",
                }}
              >
                <span>{String(i + 1).padStart(2, '0')}.</span>
                <span>{String(s).padStart(6, '0')} pts</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
