/**
 * Ghost Kitchen Radar - Frontend Engine (Cyber-Forensic Edition)
 * Three.js 3D Wireframe Globe, Particle Dust, 2D Sonar Sweep,
 * Interactive Topology Node Graph, Synthetic Web Audio FX, & 3D Tilt
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-btn');
  const quickPillsContainer = document.getElementById('quick-pills-container');
  const scanLoader = document.getElementById('scan-loader');
  const scanLogLines = document.getElementById('scan-log-lines');
  const scanProgressStep = document.getElementById('scan-progress-step');
  const errorAlert = document.getElementById('error-alert');
  const errorTitle = document.getElementById('error-title');
  const errorMessage = document.getElementById('error-message');
  const errorSuggestions = document.getElementById('error-suggestions');
  const resultCard = document.getElementById('result-card');
  const defaultDashboard = document.getElementById('default-dashboard');
  const hotspotsGrid = document.getElementById('hotspots-grid');

  // Dossier DOM Elements
  const dossierFacilityCode = document.getElementById('dossier-facility-code');
  const dossierAreaBadge = document.getElementById('dossier-area-badge');
  const dossierMatchConfidence = document.getElementById('dossier-match-confidence');
  const dossierBrandTypeBadge = document.getElementById('dossier-brand-type-badge');
  const dossierBrandCuisine = document.getElementById('dossier-brand-cuisine');
  const dossierBrandName = document.getElementById('dossier-brand-name');
  const dossierRiskBanner = document.getElementById('dossier-risk-banner');
  const dossierRiskIcon = document.getElementById('dossier-risk-icon');
  const dossierRiskLevel = document.getElementById('dossier-risk-level');
  const dossierRiskSummary = document.getElementById('dossier-risk-summary');
  const scoreCircle = document.getElementById('score-circle');
  const dossierScoreNum = document.getElementById('dossier-score-num');
  const dossierScoreVerdict = document.getElementById('dossier-score-verdict');

  // Metrics
  const metricBrandsCount = document.getElementById('metric-brands-count');
  const metricBrandsNote = document.getElementById('metric-brands-note');
  const metricSeating = document.getElementById('metric-seating');
  const metricSeatingNote = document.getElementById('metric-seating-note');
  const metricInspectionGrade = document.getElementById('metric-inspection-grade');
  const metricInspectionDesc = document.getElementById('metric-inspection-desc');
  const metricRiskTag = document.getElementById('metric-risk-tag');
  const metricRiskDesc = document.getElementById('metric-risk-desc');

  // Co-Located Grid & Node Graph
  const coLocatedGrid = document.getElementById('co-located-grid');
  const coLocatedBadgeCount = document.getElementById('co-located-badge-count');
  const nodeGraphCanvas = document.getElementById('node-graph-canvas');

  // Facility Details
  const facilityName = document.getElementById('facility-name');
  const facilityType = document.getElementById('facility-type');
  const facilityAddress = document.getElementById('facility-address');
  const facilityPermits = document.getElementById('facility-permits');
  const facilityLastInspected = document.getElementById('facility-last-inspected');
  const facilityInspectionFull = document.getElementById('facility-inspection-full');
  const facilitySharedEquipment = document.getElementById('facility-shared-equipment');

  // Telemetry & Audio Elements
  const telemetryBrands = document.getElementById('telemetry-brands');
  const telemetryGhosts = document.getElementById('telemetry-ghosts');
  const telemetryAuthentic = document.getElementById('telemetry-authentic');
  const headerHubsCount = document.getElementById('header-hubs-count');
  const liveClock = document.getElementById('live-clock');
  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  const audioIcon = document.getElementById('audio-icon');
  const audioLabel = document.getElementById('audio-label');

  // ==========================================
  // 1. SYNTHETIC WEB AUDIO FX (No external audio files needed)
  // ==========================================
  class CyberAudioFX {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }

    playRadarPing(freq = 920) {
      if (!this.enabled) return;
      try {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.45, this.ctx.currentTime + 0.28);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.28);
      } catch (_) {}
    }

    playRiskAlert(isHighRisk) {
      if (!this.enabled) return;
      try {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        if (isHighRisk) {
          // Double cyber alert chirp
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.setValueAtTime(880, now + 0.09);
          osc.frequency.setValueAtTime(440, now + 0.18);

          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
        } else {
          // Clean authentic harmonic chime
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.22);

          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        }

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(now + 0.35);
      } catch (_) {}
    }
  }

  const audioFX = new CyberAudioFX();

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      const active = audioFX.toggle();
      audioIcon.textContent = active ? '🔊' : '🔇';
      audioLabel.textContent = active ? 'FX: ON' : 'FX: OFF';
      audioToggleBtn.classList.toggle('text-slate-500', !active);
      audioToggleBtn.classList.toggle('text-cyber-cyan', active);
      if (active) audioFX.playRadarPing(800);
    });
  }

  // ==========================================
  // 2. THREE.JS 3D BACKGROUND (Wireframe Radar Globe & Particle Dust)
  // ==========================================
  let triggerThreePulse = () => {};

  function initThreeBackground() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // 1. Rotating Wireframe Radar Globe
    const globeGeo = new THREE.IcosahedronGeometry(13.5, 2);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.11
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // 2. Inner Radar Ring
    const ringGeo = new THREE.RingGeometry(13.2, 13.5, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.2;
    scene.add(ring);

    // 3. Cyber Floating Particle Field
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00f0ff);
    const colorRed = new THREE.Color(0xff1a53);
    const colorGreen = new THREE.Color(0x00ff88);

    for (let i = 0; i < particleCount; i++) {
      const radius = 8 + Math.random() * 32;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const rand = Math.random();
      const chosenColor = rand > 0.55 ? colorCyan : rand > 0.4 ? colorRed : colorGreen;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.55
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse interactive tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0007;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0007;
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Pulse pulse event trigger
    triggerThreePulse = (colorHex) => {
      globeMat.opacity = 0.35;
      globeMat.color.setHex(colorHex || 0x00f0ff);
      ringMat.opacity = 0.45;
      setTimeout(() => {
        globeMat.opacity = 0.11;
        globeMat.color.setHex(0x00f0ff);
        ringMat.opacity = 0.16;
      }, 700);
    };

    function animate() {
      requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      globe.rotation.y += 0.0018;
      globe.rotation.x = targetY * 0.4;
      ring.rotation.z += 0.0012;
      particles.rotation.y += 0.0007;
      particles.rotation.x = -targetY * 0.3;

      camera.position.x = targetX * 12;
      camera.position.y = -targetY * 12;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
    animate();
  }

  initThreeBackground();

  // ==========================================
  // 3. ANIMATED HERO SONAR RADAR SWEEP DISH (Canvas 2D)
  // ==========================================
  let triggerRadarShockwave = () => {};

  function initHeroSonarRadar() {
    const canvas = document.getElementById('radar-sonar-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const center = size / 2;
    const maxRadius = center - 24;

    const blips = [
      { angle: 0.45, dist: 0.68, label: "LEKKI", alpha: 0.2 },
      { angle: 1.25, dist: 0.45, label: "VI", alpha: 0.2 },
      { angle: 2.35, dist: 0.72, label: "IKEJA", alpha: 0.2 },
      { angle: 3.55, dist: 0.58, label: "SURULERE", alpha: 0.2 },
      { angle: 4.65, dist: 0.42, label: "YABA", alpha: 0.2 },
      { angle: 5.65, dist: 0.62, label: "IKOYI", alpha: 0.2 }
    ];

    let sweepAngle = 0;
    const ripples = [];

    triggerRadarShockwave = (colorStr) => {
      ripples.push({
        radius: 12,
        alpha: 1.0,
        maxRadius: maxRadius,
        color: colorStr || 'rgba(0, 240, 255,'
      });
    };

    function draw() {
      requestAnimationFrame(draw);
      ctx.clearRect(0, 0, size, size);

      // Concentric Range Rings
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.16)';
      ctx.lineWidth = 1;
      for (let r = 0.25; r <= 1.0; r += 0.25) {
        ctx.beginPath();
        ctx.arc(center, center, maxRadius * r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(center - maxRadius, center);
      ctx.lineTo(center + maxRadius, center);
      ctx.moveTo(center, center - maxRadius);
      ctx.lineTo(center, center + maxRadius);
      ctx.stroke();

      // Degree cross notches
      for (let i = 0; i < 12; i++) {
        const rad = (i * Math.PI) / 6;
        const x1 = center + Math.cos(rad) * (maxRadius - 6);
        const y1 = center + Math.sin(rad) * (maxRadius - 6);
        const x2 = center + Math.cos(rad) * maxRadius;
        const y2 = center + Math.sin(rad) * maxRadius;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
        ctx.stroke();
      }

      // Expanding Shockwave Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.radius += 5;
        rip.alpha -= 0.018;
        if (rip.alpha <= 0 || rip.radius > rip.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(center, center, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${rip.color} ${rip.alpha})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // Sweeping Beam Cone
      sweepAngle = (sweepAngle + 0.024) % (Math.PI * 2);
      const beamAngle = 0.42; // cone width in radians

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, maxRadius, sweepAngle - beamAngle, sweepAngle);
      ctx.closePath();

      const grad = ctx.createRadialGradient(center, center, 0, center, center, maxRadius);
      grad.addColorStop(0, 'rgba(0, 240, 255, 0.26)');
      grad.addColorStop(1, 'rgba(0, 240, 255, 0.0)');
      ctx.fillStyle = grad;
      ctx.fill();

      // Leading beam ray
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(center + Math.cos(sweepAngle) * maxRadius, center + Math.sin(sweepAngle) * maxRadius);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.85)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // Monitored Hub Blips
      blips.forEach(b => {
        let diff = sweepAngle - b.angle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;

        if (Math.abs(diff) < 0.06) {
          b.alpha = 1.0;
        } else {
          b.alpha = Math.max(0.18, b.alpha - 0.007);
        }

        const bx = center + Math.cos(b.angle) * (maxRadius * b.dist);
        const by = center + Math.sin(b.angle) * (maxRadius * b.dist);

        ctx.beginPath();
        ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${b.alpha})`;
        ctx.shadowColor = '#00ff88';
        ctx.shadowBlur = b.alpha * 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (b.alpha > 0.6) {
          ctx.beginPath();
          ctx.arc(bx, by, 8 * (1 - b.alpha + 0.5), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 255, 136, ${b.alpha * 0.6})`;
          ctx.stroke();

          // Blip Label
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = `rgba(0, 255, 136, ${b.alpha * 0.9})`;
          ctx.fillText(b.label, bx + 7, by + 3);
        }
      });
    }

    draw();
  }

  initHeroSonarRadar();

  // ==========================================
  // 4. INTERACTIVE 2D NODE GRAPH CANVAS (Physical Hub & Co-Located Tentacles)
  // ==========================================
  class FacilityNodeGraph {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.facilityData = null;
      this.nodes = [];
      this.particles = [];
      this.hoveredNode = null;
      this.mouse = { x: -999, y: -999 };
      this.animId = null;

      this.initEvents();
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      const rect = this.canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = rect.width * dpr;
      this.canvas.height = rect.height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = rect.width;
      this.height = rect.height;
      if (this.facilityData) this.layoutNodes();
    }

    initEvents() {
      this.canvas.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
        this.checkHover();
      });

      this.canvas.addEventListener('mouseleave', () => {
        this.mouse.x = -999;
        this.mouse.y = -999;
        this.hoveredNode = null;
      });
    }

    checkHover() {
      let found = null;
      for (const node of this.nodes) {
        const dx = this.mouse.x - node.x;
        const dy = this.mouse.y - node.y;
        if (Math.hypot(dx, dy) <= node.radius + 6) {
          found = node;
          break;
        }
      }
      this.hoveredNode = found;
      this.canvas.style.cursor = found ? 'pointer' : 'crosshair';
    }

    loadFacility(facility, brands, targetBrandName) {
      this.facilityData = { facility, brands, targetBrandName };
      this.layoutNodes();
      if (!this.animId) this.animate();
    }

    layoutNodes() {
      if (!this.facilityData || !this.width) return;
      this.nodes = [];
      this.particles = [];

      const centerX = this.width / 2;
      const centerY = this.height / 2;

      // 1. Central Physical Kitchen Facility Node
      const centerNode = {
        id: 'center-facility',
        isCenter: true,
        name: this.facilityData.facility.code || 'HUB',
        fullName: this.facilityData.facility.name,
        type: this.facilityData.facility.facilityType,
        x: centerX,
        y: centerY,
        radius: 20,
        color: '#00f0ff',
        auraColor: 'rgba(0, 240, 255, 0.35)',
        haloRadius: 36
      };
      this.nodes.push(centerNode);

      // 2. Perimeter Co-Located Brand Nodes
      const brands = this.facilityData.brands || [];
      const count = brands.length;
      const radiusX = Math.min(this.width * 0.38, 190);
      const radiusY = Math.min(this.height * 0.38, 120);

      brands.forEach((brand, idx) => {
        const angle = (idx / count) * Math.PI * 2 - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radiusX;
        const y = centerY + Math.sin(angle) * radiusY;

        const isTarget = brand.name.toLowerCase() === (this.facilityData.targetBrandName || '').toLowerCase();
        const isVirtual = brand.virtual;

        const nodeColor = isTarget ? '#00f0ff' : isVirtual ? '#ff1a53' : '#00ff88';

        const bNode = {
          id: `brand-${idx}`,
          isCenter: false,
          name: brand.name,
          cuisine: brand.cuisine,
          prepStation: brand.prepStation || 'Shared Kitchen Bay',
          platforms: brand.platforms || [],
          isTarget,
          isVirtual,
          x,
          y,
          radius: isTarget ? 13 : 10,
          color: nodeColor,
          auraColor: isTarget ? 'rgba(0, 240, 255, 0.4)' : isVirtual ? 'rgba(255, 26, 83, 0.35)' : 'rgba(0, 255, 136, 0.35)'
        };
        this.nodes.push(bNode);

        // Animated Tentacle Energy Particles (3 particles per link)
        for (let p = 0; p < 3; p++) {
          this.particles.push({
            fromX: centerX,
            fromY: centerY,
            toX: x,
            toY: y,
            t: (p / 3) + Math.random() * 0.1,
            speed: 0.006 + Math.random() * 0.004,
            color: nodeColor
          });
        }
      });
    }

    animate() {
      this.animId = requestAnimationFrame(() => this.animate());
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;

      ctx.clearRect(0, 0, w, h);

      // Subtle Background Grid inside graph
      ctx.strokeStyle = 'rgba(27, 36, 56, 0.5)';
      ctx.lineWidth = 1;
      const step = 28;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const center = this.nodes[0];
      if (!center) return;

      // Draw Energy Tentacles connecting Center to Perimeter Brands
      this.nodes.slice(1).forEach((node) => {
        const isHovered = this.hoveredNode === node || this.hoveredNode === center;

        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = isHovered ? node.color : 'rgba(0, 240, 255, 0.22)';
        ctx.lineWidth = isHovered ? 2.5 : 1.2;
        ctx.setLineDash(node.isVirtual ? [4, 4] : []);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw Energy Pulse Packets flowing along Tentacles
      this.particles.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;

        const curX = p.fromX + (p.toX - p.fromX) * p.t;
        const curY = p.fromY + (p.toY - p.fromY) * p.t;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Nodes
      this.nodes.forEach((node) => {
        const isHovered = this.hoveredNode === node;

        // Pulsing Aura Ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (isHovered ? 8 : 4), 0, Math.PI * 2);
        ctx.fillStyle = node.auraColor;
        ctx.fill();

        // Node Body
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isCenter ? '#0e1422' : '#090d16';
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = node.isTarget || node.isCenter ? 3 : 2;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isHovered ? 15 : 8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Center Node Icon
        if (node.isCenter) {
          ctx.fillStyle = '#00f0ff';
          ctx.font = 'bold 9px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.name, node.x, node.y);
        } else {
          // Label beside perimeter node
          ctx.font = `${node.isTarget ? 'bold' : 'normal'} 10px "Inter", sans-serif`;
          ctx.fillStyle = node.isTarget ? '#ffffff' : '#94a3b8';
          ctx.textAlign = node.x >= center.x ? 'left' : 'right';
          const offset = node.x >= center.x ? node.radius + 6 : -(node.radius + 6);
          ctx.fillText(node.name, node.x + offset, node.y + 3);
        }
      });

      // Tooltip on Node Hover
      if (this.hoveredNode) {
        const hn = this.hoveredNode;
        ctx.save();
        ctx.font = '11px "JetBrains Mono", monospace';
        const title = hn.isCenter ? `FACILITY: ${hn.fullName}` : `BRAND: ${hn.name}`;
        const sub = hn.isCenter ? hn.type : `PREP: ${hn.prepStation} // ${hn.isVirtual ? 'VIRTUAL' : 'AUTHENTIC'}`;
        const textWidth = Math.max(ctx.measureText(title).width, ctx.measureText(sub).width);
        const boxW = textWidth + 20;
        const boxH = 46;

        let tipX = hn.x + 15;
        let tipY = hn.y - 30;
        if (tipX + boxW > w - 10) tipX = hn.x - boxW - 15;
        if (tipY < 10) tipY = 15;

        ctx.fillStyle = 'rgba(9, 13, 22, 0.94)';
        ctx.strokeStyle = hn.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(tipX, tipY, boxW, boxH, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(title, tipX + 10, tipY + 8);

        ctx.fillStyle = hn.color;
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText(sub, tipX + 10, tipY + 26);
        ctx.restore();
      }
    }
  }

  let facilityGraph = null;
  if (nodeGraphCanvas) {
    facilityGraph = new FacilityNodeGraph(nodeGraphCanvas);
  }

  // ==========================================
  // 5. 3D CARD TILT MICRO-INTERACTIONS
  // ==========================================
  function attachTiltEffects(element) {
    if (!element) return;
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  document.querySelectorAll('.tilt-card').forEach(attachTiltEffects);

  // ==========================================
  // 6. GHOST INDEX ANIMATED NUMBER COUNT-UP
  // ==========================================
  function animateGhostIndexScore(targetScore, colorHex) {
    const scoreNumEl = document.getElementById('dossier-score-num');
    const circle = document.getElementById('score-circle');
    if (!scoreNumEl || !circle) return;

    const circumference = 2 * Math.PI * 40; // ~251.2
    circle.style.strokeDasharray = `${circumference}`;
    circle.setAttribute('stroke', colorHex);

    const startTime = performance.now();
    const duration = 1100; // ms

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(targetScore * ease);

      scoreNumEl.textContent = `${currentVal}%`;
      const offset = circumference * (1 - (currentVal / 100));
      circle.style.strokeDashoffset = `${offset}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        scoreNumEl.textContent = `${targetScore}%`;
      }
    }

    requestAnimationFrame(update);
  }

  // ==========================================
  // 7. CLOCK & BASIC SEARCH INPUT CONTROLS
  // ==========================================
  function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Africa/Lagos', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    if (liveClock) liveClock.textContent = now.toLocaleTimeString('en-GB', options) + ' WAT';
  }
  updateClock();
  setInterval(updateClock, 1000);

  searchInput.addEventListener('input', () => {
    if (searchInput.value.trim().length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    hideResultCard();
    searchInput.focus();
    if (leafletMap) {
      leafletMap.flyTo([6.5244, 3.3792], 12, { duration: 1.0 });
    }
  });

  // Global Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (e.key === 'Escape') {
      searchInput.value = '';
      clearBtn.classList.add('hidden');
      hideResultCard();
    }
  });

  // ==========================================
  // 7B. LEAFLET FORENSIC CORRIDOR MAP ENGINE
  // ==========================================
  let leafletMap = null;
  const mapMarkers = new Map();
  const brandToFacilityMap = new Map();

  function initForensicMap() {
    const mapEl = document.getElementById('forensic-map');
    if (!mapEl || typeof L === 'undefined') return;

    try {
      leafletMap = L.map('forensic-map', {
        center: [6.5244, 3.3792],
        zoom: 12,
        zoomControl: true,
        attributionControl: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }).addTo(leafletMap);

      setTimeout(() => {
        if (leafletMap) leafletMap.invalidateSize();
      }, 350);

      window.addEventListener('resize', () => {
        if (leafletMap) leafletMap.invalidateSize();
      });
    } catch (err) {
      console.warn('Leaflet map initialization warning:', err);
    }
  }

  function plotFacilityMarkers(facilities) {
    if (!leafletMap || !Array.isArray(facilities)) return;

    // Clear previous markers
    mapMarkers.forEach(item => {
      if (item.marker) item.marker.remove();
    });
    mapMarkers.clear();
    brandToFacilityMap.clear();

    facilities.forEach(fac => {
      if (!fac.coordinates || typeof fac.coordinates.lat !== 'number' || typeof fac.coordinates.lng !== 'number') {
        return;
      }

      const score = fac.ghostIndexScore || 0;
      let blipClass = 'cyber-blip-green';
      let statusColor = '#00ff88';
      let statusText = 'AUTHENTIC RESTAURANT';

      if (score >= 75) {
        blipClass = 'cyber-blip-red';
        statusColor = '#ff1a53';
        statusText = 'CRITICAL GHOST HIVE';
      } else if (score >= 40) {
        blipClass = 'cyber-blip-amber';
        statusColor = '#f59e0b';
        statusText = 'MODERATE CO-LOCATION';
      }

      const icon = L.divIcon({
        className: 'cyber-leaflet-div-icon',
        html: `<div class="cyber-blip ${blipClass}" title="${escapeHtml(fac.facilityName)}"><div class="cyber-blip-pulse"></div><div class="cyber-blip-dot"></div></div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });

      const marker = L.marker([fac.coordinates.lat, fac.coordinates.lng], { icon }).addTo(leafletMap);

      const brandCount = fac.brands ? fac.brands.length : 1;
      const brandPreview = fac.brands ? fac.brands.slice(0, 3).map(b => b.name).join(', ') + (fac.brands.length > 3 ? '...' : '') : '';

      const popupHtml = `
        <div class="font-mono text-xs space-y-1.5 min-w-[220px]">
          <div class="flex items-center justify-between gap-2 border-b border-cyber-border pb-1">
            <span class="font-bold text-white text-xs">${escapeHtml(fac.facilityName)}</span>
            <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${score >= 75 ? 'bg-red-500/20 text-red-400 border border-red-500/40' : score >= 40 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'}">${score}% GHOST</span>
          </div>
          <div class="text-[11px] text-slate-300">${escapeHtml(fac.address)}</div>
          <div class="text-[10px] text-slate-400">${brandCount} ${brandCount > 1 ? 'co-located brands' : 'brand'}: <span class="text-slate-200">${escapeHtml(brandPreview)}</span></div>
          <div class="pt-1 text-cyber-cyan text-[11px] font-bold flex items-center justify-between">
            <span>INSPECT FORENSIC DOSSIER</span>
            <span>&rarr;</span>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { className: 'cyber-leaflet-popup', closeButton: true });

      const tooltipContent = `<div style="font-family:'JetBrains Mono',monospace;"><b>${escapeHtml(fac.facilityName)}</b><br><span style="color:${statusColor};">${score}% Ghost Index (${statusText})</span> &bull; ${escapeHtml(fac.area)}</div>`;
      marker.bindTooltip(tooltipContent, {
        className: 'cyber-leaflet-tooltip',
        direction: 'top',
        offset: [0, -12]
      });

      marker.on('click', () => {
        if (fac.coordinates) {
          leafletMap.flyTo([fac.coordinates.lat, fac.coordinates.lng], 14, { duration: 1.2 });
        }
        const brandToSearch = fac.brands && fac.brands.length > 0 ? fac.brands[0].name : fac.facilityName;
        searchInput.value = brandToSearch;
        clearBtn.classList.remove('hidden');
        audioFX.playRadarPing(score >= 50 ? 920 : 680);
        triggerRadarShockwave(score >= 50 ? 'rgba(255, 26, 83,' : 'rgba(0, 255, 136,');
        triggerThreePulse(score >= 50 ? 0xff1a53 : 0x00ff88);
        marker.openTooltip();
        runInspection(brandToSearch, false);
      });

      mapMarkers.set(fac.id, { marker, facility: fac });

      if (fac.brands) {
        fac.brands.forEach(b => {
          brandToFacilityMap.set(b.name.toLowerCase().trim(), fac.id);
          if (b.aliases) {
            b.aliases.forEach(a => brandToFacilityMap.set(a.toLowerCase().trim(), fac.id));
          }
        });
      }
      brandToFacilityMap.set(fac.facilityName.toLowerCase().trim(), fac.id);
    });

    if (leafletMap) {
      setTimeout(() => leafletMap.invalidateSize(), 250);
    }
  }

  function focusMapOnFacility(facOrCoord, openTooltip = true) {
    if (!leafletMap || !facOrCoord) return;
    const coords = facOrCoord.coordinates || facOrCoord;
    if (!coords || typeof coords.lat !== 'number' || typeof coords.lng !== 'number') return;

    leafletMap.flyTo([coords.lat, coords.lng], 14, { duration: 1.2 });

    const facId = facOrCoord.id;
    if (facId && mapMarkers.has(facId)) {
      const item = mapMarkers.get(facId);
      if (item && item.marker) {
        if (openTooltip) {
          setTimeout(() => {
            if (item.marker) item.marker.openTooltip();
          }, 350);
        }
        const el = item.marker.getElement();
        if (el) {
          const blip = el.querySelector('.cyber-blip');
          if (blip) {
            blip.classList.add('cyber-blip-active');
            setTimeout(() => blip.classList.remove('cyber-blip-active'), 3500);
          }
        }
      }
    }
  }

  function focusMapOnBrandName(name) {
    if (!name || !leafletMap) return;
    const lower = name.toLowerCase().trim();
    let facId = brandToFacilityMap.get(lower);

    if (!facId) {
      for (const [id, item] of mapMarkers.entries()) {
        const fac = item.facility;
        if (fac.facilityName.toLowerCase().includes(lower) ||
            (fac.brands && fac.brands.some(b => b.name.toLowerCase().includes(lower) || (b.aliases && b.aliases.some(a => a.toLowerCase().includes(lower)))))) {
          facId = id;
          break;
        }
      }
    }

    if (facId && mapMarkers.has(facId)) {
      const item = mapMarkers.get(facId);
      focusMapOnFacility(item.facility, true);
    }
  }

  // ==========================================
  // 8. DATA INGESTION: STATS & QUICK-LIST
  // ==========================================
  async function loadTelemetry() {
    try {
      const res = await fetch('/api/stats');
      if (!res.ok) return;
      const data = await res.json();

      if (telemetryBrands) telemetryBrands.textContent = data.totalBrandsMonitored;
      if (telemetryGhosts) telemetryGhosts.textContent = `${data.highRiskGhostClusters} Hives`;
      if (telemetryAuthentic) {
        const ratio = Math.round((data.authenticDineInVenues / data.totalBrandsMonitored) * 100);
        telemetryAuthentic.textContent = `${ratio}%`;
      }
      if (headerHubsCount) headerHubsCount.textContent = `${data.totalFacilitiesTracked} FACILITIES`;
    } catch (err) {
      console.warn('Telemetry offline:', err);
    }
  }

  async function loadQuickList() {
    try {
      const res = await fetch('/api/quick-list');
      if (!res.ok) throw new Error('Failed to load quick list');
      const items = await res.json();
      renderQuickPills(items);
    } catch (err) {
      console.warn('Using fallback quick pills:', err);
      renderQuickPills([
        { name: "Midnight Burger Lab", badge: "🚨 7 Brands", type: "ghost", score: 96 },
        { name: "Terra Kulture Restaurant", badge: "✅ 120-Seat Dine-In", type: "authentic", score: 4 },
        { name: "The Wok Legend", badge: "🚨 5 Brands", type: "ghost", score: 89 },
        { name: "The Yellow Chilli", badge: "✅ 85-Seat Standalone", type: "authentic", score: 5 },
        { name: "Suya Express 24/7", badge: "🚨 4 Brands", type: "ghost", score: 79 },
        { name: "Ocean Basket Lekki", badge: "✅ 150-Seat Waterfront", type: "authentic", score: 7 }
      ]);
    }
  }

  function renderQuickPills(pills) {
    quickPillsContainer.innerHTML = '';
    pills.forEach(pill => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'group flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card hover:glass-card-hover text-xs font-mono transition-all duration-200 active:scale-95 shadow-sm';

      const isGhost = pill.type === 'ghost' || (pill.score && pill.score >= 50);
      const icon = isGhost ? '🚨' : '✅';
      const badgeClass = isGhost
        ? 'text-cyber-red bg-cyber-red/15 border-cyber-red/40 shadow-[0_0_8px_rgba(255,26,83,0.25)]'
        : 'text-cyber-green bg-cyber-green/15 border-cyber-green/40 shadow-[0_0_8px_rgba(0,255,136,0.25)]';

      btn.innerHTML = `
        <span class="text-xs">${icon}</span>
        <span class="text-slate-200 group-hover:text-white font-medium">${escapeHtml(pill.name)}</span>
        <span class="text-[10px] px-1.5 py-0.5 rounded border ${badgeClass}">${escapeHtml(pill.badge || pill.tag || '')}</span>
      `;

      btn.addEventListener('click', () => {
        searchInput.value = pill.name;
        clearBtn.classList.remove('hidden');
        audioFX.playRadarPing(isGhost ? 960 : 720);
        triggerRadarShockwave(isGhost ? 'rgba(255, 26, 83,' : 'rgba(0, 255, 136,');
        triggerThreePulse(isGhost ? 0xff1a53 : 0x00ff88);
        focusMapOnBrandName(pill.name);
        runInspection(pill.name, true);
      });
      quickPillsContainer.appendChild(btn);
    });
  }

  async function loadHotspots() {
    try {
      const res = await fetch('/api/facilities');
      if (!res.ok) return;
      const facilities = await res.json();
      renderHotspots(facilities);
      plotFacilityMarkers(facilities);
    } catch (err) {
      console.warn('Hotspots offline:', err);
    }
  }

  function renderHotspots(facilities) {
    if (!hotspotsGrid) return;
    hotspotsGrid.innerHTML = '';

    facilities.forEach(fac => {
      const isGhost = fac.ghostIndexScore >= 50;
      const card = document.createElement('div');
      card.className = 'glass-card p-4 sm:p-5 rounded-2xl border border-cyber-border hover:border-cyber-cyan/50 transition-all duration-200 flex flex-col justify-between space-y-3 cursor-pointer group tilt-card shadow-lg';

      const riskBadgeClass = isGhost
        ? 'text-cyber-red bg-cyber-red/15 border-cyber-red/40 shadow-[0_0_8px_rgba(255,26,83,0.3)]'
        : 'text-cyber-green bg-cyber-green/15 border-cyber-green/40 shadow-[0_0_8px_rgba(0,255,136,0.3)]';

      card.innerHTML = `
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-slate-400 uppercase text-[10px] tracking-wider">${escapeHtml(fac.area)}</span>
            <span class="px-2 py-0.5 rounded border text-[10px] ${riskBadgeClass}">
              ${fac.ghostIndexScore}% GHOST INDEX
            </span>
          </div>
          <h4 class="font-bold text-sm sm:text-base text-white group-hover:text-cyber-cyan transition-colors">${escapeHtml(fac.facilityName)}</h4>
          <p class="text-xs text-slate-400 line-clamp-2">${escapeHtml(fac.address)}</p>
        </div>

        <div class="pt-2.5 border-t border-cyber-border/70 flex items-center justify-between font-mono text-xs text-slate-400">
          <span>${fac.brands.length} ${fac.brands.length > 1 ? 'co-located brands' : 'dedicated restaurant'}</span>
          <span class="text-cyber-cyan group-hover:translate-x-1 transition-transform">Inspect →</span>
        </div>
      `;

      card.addEventListener('click', () => {
        const brandToSearch = fac.brands[0].name;
        searchInput.value = brandToSearch;
        clearBtn.classList.remove('hidden');
        audioFX.playRadarPing(isGhost ? 920 : 680);
        triggerRadarShockwave(isGhost ? 'rgba(255, 26, 83,' : 'rgba(0, 255, 136,');
        triggerThreePulse(isGhost ? 0xff1a53 : 0x00ff88);
        focusMapOnFacility(fac, true);
        runInspection(brandToSearch, false);
      });
      attachTiltEffects(card);
      hotspotsGrid.appendChild(card);
    });
  }

  // ==========================================
  // 9. SEARCH & FORENSIC INSPECTION PIPELINE
  // ==========================================
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) {
      searchInput.focus();
      return;
    }
    audioFX.playRadarPing(880);
    triggerRadarShockwave('rgba(0, 240, 255,');
    triggerThreePulse(0x00f0ff);
    focusMapOnBrandName(query);
    runInspection(query, true);
  });

  async function runInspection(brandName, shouldFly = true) {
    hideError();
    hideResultCard();
    showLoader(brandName);
    try {
      // Step-by-step forensic terminal animation
      await animateScanProgress();

      const response = await fetch(`/api/inspect?q=${encodeURIComponent(brandName)}`);
      const data = await response.json();

      hideLoader();

      if (!response.ok || !data.success) {
        showError(
          data.message || 'No matching brand found in the Lagos surveillance registry.',
          data.suggestions || []
        );
        audioFX.playRiskAlert(true);
        return;
      }

      // Render Inspection Result
      renderDossier(data);

      // Auto-focus marker on map with open cyber tooltip
      if (shouldFly && data.facility) {
        focusMapOnFacility(data.facility, true);
      }

      const isHighRisk = data.ghostIndexScore >= 50;
      audioFX.playRiskAlert(isHighRisk);

    } catch (err) {
      hideLoader();
      showError('Network error while querying Lagos radar. Ensure server is running.', []);
      console.error(err);
    }
  }

  async function animateScanProgress() {
    const steps = [
      { text: '> Querying Lagos municipal facility registry...', step: 'STEP 1/4' },
      { text: '> Calculating Dice string-similarity coefficient...', step: 'STEP 2/4' },
      { text: '> Cross-referencing commercial hood extraction permits...', step: 'STEP 3/4' },
      { text: '> Mapping co-located kitchens cooked under shared roof...', step: 'STEP 4/4' }
    ];

    for (let i = 0; i < steps.length; i++) {
      scanProgressStep.textContent = steps[i].step;
      const line = document.createElement('div');
      line.className = i === steps.length - 1 ? 'text-cyber-green' : 'text-cyber-cyan';
      line.textContent = steps[i].text;
      scanLogLines.appendChild(line);
      await new Promise(r => setTimeout(r, 100));
    }
  }

  function renderDossier(data) {
    const { matchedBrand, facility, coLocatedBrands, ghostIndexScore, riskLevel, riskSummary, matchConfidence, forensicBreakdown } = data;

    // Header metadata
    dossierFacilityCode.textContent = facility.code || facility.id;
    dossierAreaBadge.textContent = `${facility.area.toUpperCase()}, LAGOS`;
    dossierMatchConfidence.textContent = `${matchConfidence}% MATCH CONFIDENCE`;

    // Brand info
    dossierBrandName.textContent = matchedBrand.name;
    dossierBrandCuisine.textContent = matchedBrand.cuisine;

    // Brand Type Badge
    if (matchedBrand.virtual) {
      dossierBrandTypeBadge.textContent = 'VIRTUAL GHOST BRAND';
      dossierBrandTypeBadge.className = 'text-xs font-mono uppercase px-2 py-0.5 rounded border text-cyber-red border-cyber-red/40 bg-cyber-red/15 shadow-[0_0_8px_rgba(255,26,83,0.3)]';
    } else {
      dossierBrandTypeBadge.textContent = 'AUTHENTIC RESTAURANT';
      dossierBrandTypeBadge.className = 'text-xs font-mono uppercase px-2 py-0.5 rounded border text-cyber-green border-cyber-green/40 bg-cyber-green/15 shadow-[0_0_8px_rgba(0,255,136,0.3)]';
    }

    // Risk Banner & Colors
    dossierRiskLevel.textContent = riskLevel;
    dossierRiskSummary.textContent = riskSummary;

    const isHighRisk = ghostIndexScore >= 75;
    const isModerateRisk = ghostIndexScore >= 40 && ghostIndexScore < 75;
    let scoreColor = '#00ff88';

    if (isHighRisk) {
      dossierRiskBanner.className = 'p-3.5 rounded-xl border flex items-center gap-3 bg-cyber-red/15 border-cyber-red/50 text-cyber-red shadow-[0_0_20px_rgba(255,26,83,0.25)]';
      dossierRiskIcon.textContent = '🚨';
      scoreColor = '#ff1a53';
      dossierScoreVerdict.textContent = 'CRITICAL SHARING DETECTED';
      dossierScoreVerdict.className = 'mt-2.5 text-xs font-mono font-semibold text-cyber-red';
    } else if (isModerateRisk) {
      dossierRiskBanner.className = 'p-3.5 rounded-xl border flex items-center gap-3 bg-cyber-amber/15 border-cyber-amber/50 text-cyber-amber shadow-[0_0_20px_rgba(245,158,11,0.25)]';
      dossierRiskIcon.textContent = '⚠️';
      scoreColor = '#f59e0b';
      dossierScoreVerdict.textContent = 'MODERATE CO-LOCATION';
      dossierScoreVerdict.className = 'mt-2.5 text-xs font-mono font-semibold text-cyber-amber';
    } else {
      dossierRiskBanner.className = 'p-3.5 rounded-xl border flex items-center gap-3 bg-cyber-green/15 border-cyber-green/50 text-cyber-green shadow-[0_0_20px_rgba(0,255,136,0.25)]';
      dossierRiskIcon.textContent = '✅';
      scoreColor = '#00ff88';
      dossierScoreVerdict.textContent = 'VERIFIED AUTHENTIC VENUE';
      dossierScoreVerdict.className = 'mt-2.5 text-xs font-mono font-semibold text-cyber-green';
    }

    // Dynamic Count-Up & Stroke Transition
    animateGhostIndexScore(ghostIndexScore, scoreColor);

    // Key Metrics
    metricBrandsCount.textContent = `${facility.totalBrandsInRoom} BRAND${facility.totalBrandsInRoom > 1 ? 'S' : ''}`;
    metricBrandsNote.textContent = facility.totalBrandsInRoom > 1 ? 'Sharing same room' : 'Dedicated kitchen';
    metricBrandsNote.className = facility.totalBrandsInRoom > 1 ? 'text-[11px] text-cyber-red' : 'text-[11px] text-cyber-green';

    metricSeating.textContent = facility.dineInAvailable ? `${facility.dineInCapacity} SEATS` : '0 SEATS';
    metricSeatingNote.textContent = facility.dineInAvailable ? 'Verified guest dining' : 'Pickup hatch only';
    metricSeatingNote.className = facility.dineInAvailable ? 'text-[11px] text-cyber-green' : 'text-[11px] text-slate-400';

    const grade = (facility && facility.sanitationGrade) || data.sanitationGrade || 'A';
    const insp = (facility && facility.inspectionStatus) || data.inspectionStatus || 'Standard Inspection';
    metricInspectionGrade.textContent = `GRADE ${grade}`;
    metricInspectionDesc.textContent = insp.includes('-') ? insp.split('-')[0].trim() : insp;

    const riskCross = (forensicBreakdown && forensicBreakdown.crossContaminationRisk) || 'Standard';
    metricRiskTag.textContent = riskCross.split(' ')[0].toUpperCase();
    metricRiskDesc.textContent = facility.totalBrandsInRoom > 1 ? 'Shared vats & hoods' : 'Single brigade team';

    // Update 2D Node Graph Canvas
    if (facilityGraph) {
      facilityGraph.loadFacility(facility, coLocatedBrands, matchedBrand.name);
    }

    // Co-Located Brands Grid
    coLocatedBadgeCount.textContent = `${coLocatedBrands.length} BRAND${coLocatedBrands.length > 1 ? 'S' : ''}`;
    coLocatedGrid.innerHTML = '';

    coLocatedBrands.forEach(b => {
      const isTarget = b.isTargetSearched;
      const bCard = document.createElement('div');

      const targetBorder = isTarget
        ? 'border-cyber-cyan shadow-[0_0_20px_rgba(0,240,255,0.25)] bg-cyber-darker/95'
        : 'border-cyber-border bg-cyber-darker/70 hover:border-slate-500';

      bCard.className = `p-4 sm:p-5 rounded-2xl border ${targetBorder} transition-all space-y-3 relative tilt-card`;

      const platformsHtml = (b.platforms || []).map(p =>
        `<span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-cyber-border text-[10px]">${escapeHtml(p)}</span>`
      ).join(' ');

      bCard.innerHTML = `
        <div class="flex items-start justify-between gap-2">
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <h4 class="font-bold text-white text-sm sm:text-base">${escapeHtml(b.name)}</h4>
              ${isTarget ? '<span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyber-cyan text-cyber-black font-bold uppercase shadow-[0_0_8px_#00f0ff]">TARGET</span>' : ''}
              ${b.virtual ? '<span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyber-red/15 border border-cyber-red/40 text-cyber-red uppercase">VIRTUAL</span>' : '<span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyber-green/15 border border-cyber-green/40 text-cyber-green uppercase">DEDICATED</span>'}
            </div>
            <p class="text-xs text-slate-400 mt-0.5">${escapeHtml(b.cuisine)}</p>
          </div>
          <span class="text-xs font-mono font-semibold text-slate-400">${escapeHtml(b.priceTier || '₦₦')}</span>
        </div>

        <div class="space-y-1.5 text-xs font-mono pt-2 border-t border-cyber-border/60">
          <div class="flex items-center gap-1.5 text-[11px] text-slate-300">
            <span class="text-slate-500">PREP BAY:</span>
            <span class="text-cyber-cyan">${escapeHtml(b.prepStation || 'Shared kitchen floor')}</span>
          </div>

          <div class="flex items-center gap-1.5 text-[11px] text-slate-400 truncate">
            <span class="text-slate-500">PACKAGING:</span>
            <span>${escapeHtml(b.packagingTag || 'Standard takeaway container')}</span>
          </div>

          <div class="flex items-center gap-1.5 pt-1 flex-wrap">
            <span class="text-[10px] text-slate-500 uppercase">MASQUERADES ON:</span>
            <div class="flex items-center gap-1 flex-wrap">${platformsHtml}</div>
          </div>
        </div>
      `;

      attachTiltEffects(bCard);
      coLocatedGrid.appendChild(bCard);
    });

    // Physical Facility Details
    facilityName.textContent = facility.name;
    facilityType.textContent = facility.facilityType;
    facilityAddress.textContent = facility.address;
    facilityPermits.textContent = `Permit: ${facility.activePermits}`;
    facilityLastInspected.textContent = `LAST AUDIT: ${facility.lastInspected}`;
    facilityInspectionFull.textContent = facility.inspectionStatus;
    facilitySharedEquipment.textContent = (facility.sharedEquipment && facility.sharedEquipment.length > 0)
      ? facility.sharedEquipment.join(', ')
      : 'None - Dedicated single-brand kitchen equipment';

    // Show result card and scroll into view smoothly
    resultCard.classList.remove('hidden');
    defaultDashboard.classList.add('hidden');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Helpers
  function showLoader(brand) {
    scanLoader.classList.remove('hidden');
    scanLogLines.innerHTML = `<div class="text-cyber-cyan">> Initializing target scan: "${escapeHtml(brand)}"...</div>`;
  }

  function hideLoader() {
    scanLoader.classList.add('hidden');
  }

  function showError(msg, suggestions) {
    errorAlert.classList.remove('hidden');
    errorTitle.textContent = 'TARGET NOT IDENTIFIED IN LAGOS MESH';
    errorMessage.textContent = msg;

    errorSuggestions.innerHTML = '';
    if (suggestions && suggestions.length > 0) {
      const label = document.createElement('span');
      label.className = 'w-full text-slate-400 font-mono text-[11px] mb-1';
      label.textContent = 'CLOSEST DETECTED TARGETS:';
      errorSuggestions.appendChild(label);

      suggestions.forEach(s => {
        const name = typeof s === 'string' ? s : s.name;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'px-2 py-1 bg-cyber-card border border-cyber-border hover:border-cyber-cyan text-cyber-cyan rounded-lg font-mono text-xs transition-colors shadow-sm';
        btn.textContent = name;
        btn.addEventListener('click', () => {
          searchInput.value = name;
          clearBtn.classList.remove('hidden');
          runInspection(name);
        });
        errorSuggestions.appendChild(btn);
      });
    }
  }

  function hideError() {
    errorAlert.classList.add('hidden');
  }

  function hideResultCard() {
    resultCard.classList.add('hidden');
    defaultDashboard.classList.remove('hidden');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Data Ingestion & Map Setup
  initForensicMap();
  loadTelemetry();
  loadQuickList();
  loadHotspots();
});
