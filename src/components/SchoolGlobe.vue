<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/** 沈阳药科大学主校区（沈阳）近似坐标（维基 / GeoHack：41.7694°N, 123.4461°E） */
const SHENYANG = { lat: 41.7694, lon: 123.4461, label: '沈阳 · SYPHU' }

const EARTH_MAP =
  'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'

const containerRef = ref(null)

let renderer
let scene
let camera
let controls
let animationId = 0
let resizeHandler = () => {}

function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)
  return new THREE.Vector3(x, y, z)
}

function init() {
  const el = containerRef.value
  if (!el) return

  const width = el.clientWidth
  const height = el.clientHeight || 360

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0a0f1a)

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.set(0, 0.35, 2.8)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)

  const ambient = new THREE.AmbientLight(0xffffff, 0.35)
  scene.add(ambient)
  const sun = new THREE.DirectionalLight(0xffffff, 1.1)
  sun.position.set(5, 3, 5)
  scene.add(sun)

  const earthGroup = new THREE.Group()
  scene.add(earthGroup)

  const geo = new THREE.SphereGeometry(1, 96, 96)
  const loader = new THREE.TextureLoader()
  loader.crossOrigin = 'anonymous'

  const addEarth = (material) => {
    const earthSphere = new THREE.Mesh(geo, material)
    earthSphere.rotation.y = Math.PI

    const markerPos = latLonToVector3(SHENYANG.lat, SHENYANG.lon, 1.02)
    const pinGeo = new THREE.SphereGeometry(0.038, 24, 24)
    const pinMat = new THREE.MeshBasicMaterial({ color: 0xb22222 })
    const pin = new THREE.Mesh(pinGeo, pinMat)
    pin.position.copy(markerPos)
    earthSphere.add(pin)

    earthGroup.add(earthSphere)
  }

  loader.load(
    EARTH_MAP,
    (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace
      const mat = new THREE.MeshPhongMaterial({
        map: tex,
        shininess: 8,
        specular: new THREE.Color(0x222233),
      })
      addEarth(mat)
    },
    undefined,
    () => {
      addEarth(
        new THREE.MeshPhongMaterial({
          color: 0x2a5f8f,
          shininess: 12,
        })
      )
    }
  )

  const starsGeo = new THREE.BufferGeometry()
  const starCount = 1200
  const positions = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount; i++) {
    const r = 8 + Math.random() * 12
    const th = Math.random() * Math.PI * 2
    const ph = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = r * Math.sin(ph) * Math.cos(th)
    positions[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th)
    positions[i * 3 + 2] = r * Math.cos(ph)
  }
  starsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const starsMat = new THREE.PointsMaterial({
    color: 0x8899aa,
    size: 0.02,
    sizeAttenuation: true,
  })
  const stars = new THREE.Points(starsGeo, starsMat)
  scene.add(stars)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.minDistance = 1.6
  controls.maxDistance = 5
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.35
  controls.target.set(0, 0, 0)

  resizeHandler = () => {
    if (!containerRef.value || !renderer || !camera) return
    const w = containerRef.value.clientWidth
    const h = containerRef.value.clientHeight || 360
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', resizeHandler)

  const animate = () => {
    animationId = requestAnimationFrame(animate)
    controls?.update()
    renderer.render(scene, camera)
  }
  animate()
}

function dispose() {
  window.removeEventListener('resize', resizeHandler)
  cancelAnimationFrame(animationId)
  controls?.dispose()
  scene?.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose()
    if (obj.material) {
      if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.())
      else obj.material.dispose?.()
    }
  })
  renderer?.dispose()
  if (renderer?.domElement?.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement)
  }
  renderer = null
  scene = null
  camera = null
  controls = null
}

onMounted(() => init())
onUnmounted(() => dispose())
</script>

<template>
  <div
    ref="containerRef"
    class="school-globe w-full min-h-[280px] md:min-h-[360px] rounded-2xl overflow-hidden bg-[#0a0f1a] border border-white/10 shadow-xl"
    role="img"
    :aria-label="`三维地球，标注 ${SHENYANG.label} 坐标`"
  />
</template>
