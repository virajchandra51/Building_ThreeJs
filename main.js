import * as THREE from 'three'
import { Frustum, Group, MathUtils, Mesh, MeshLambertMaterial, Scene } from 'three';
import * as dat from 'dat.gui'
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'

const ground_grass_material = new THREE.MeshLambertMaterial({color:0x8bc560})
const ground_floor_Boxmaterial = new THREE.MeshLambertMaterial({color:0xa1a2a6})
const upper_floor_Boxmaterial = new THREE.MeshLambertMaterial({color:0x525e6c})
const window_door = new THREE.MeshLambertMaterial({color:0x056ca6})
const railing_fence = new THREE.MeshLambertMaterial({color:0x252a2e})
const gold_doorknob = new THREE.MeshLambertMaterial({color:0xba8e37})

function window_creater() {
  const window = new THREE.Group()
  const window_framel = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1.5,1.5,18),
    window_door
  )
  window_framel.position.set(-5,-12,25)
  window.add(window_framel)

  const window_framer = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1.5,1.5,18),
    window_door
  )
  window_framer.position.set(-5,-4,25)
  window.add(window_framer)
  
  const window_frameu = new THREE.Mesh(
    new THREE.BoxBufferGeometry(6,12,4),
    window_door
  )
  window_frameu.position.set(-6,-8,35)
  window.add(window_frameu)

  const window_frameb = new THREE.Mesh(
    new THREE.BoxBufferGeometry(6,10.5,2.8),
    window_door
  )
  window_frameb.position.set(-6,-8,17)
  window.add(window_frameb)

  const window_frame_midv1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(.3,.3,18),
    window_door
  )
  window_frame_midv1.position.set(-5,-9,25)
  window.add(window_frame_midv1)

  const window_frame_midv2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(.3,.3,18),
    window_door
  )
  window_frame_midv2.position.set(-5,-7,25)
  window.add(window_frame_midv2)

  const window_frame_midh1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(.3,10,.3),
    window_door
  )
  window_frame_midh1.position.set(-5,-8,28.4)
  window.add(window_frame_midh1)

  const window_frame_midh2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(.3,10,.3),
    window_door
  )
  window_frame_midh2.position.set(-5,-8,25)
  window.add(window_frame_midh2)

  const window_frame_midh3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(.3,10,.3),
    window_door
  )
  window_frame_midh3.position.set(-5,-8,21.6)
  window.add(window_frame_midh3)

  const window_glass = new THREE.Mesh(
    new THREE.BoxBufferGeometry(9,8,15),
    new THREE.MeshLambertMaterial({color: 0x878787})
  )
  window_glass.position.set(-10,-8,26)
  window.add(window_glass)
return window
}
function vertical_fence() {
  const vertical_fence = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.8,0.8,8),
    railing_fence
  )
  return vertical_fence
}
function brickx() {
  const brickx = new THREE.Mesh(
    new THREE.BoxBufferGeometry(3,6.5,5),
    new THREE.MeshLambertMaterial({color: 0x878787})
  )
  return brickx
}
function bricky() {
  const bricky = new THREE.Mesh(
    new THREE.BoxBufferGeometry(6.5,3,5),
    new THREE.MeshLambertMaterial({color: 0x6b7b7b})
  )
  return bricky
}
function Building() {
  const building = new THREE.Group()
{ //grass, ground floor, first floor
  const ground_grass = new THREE.Mesh(
    new THREE.BoxBufferGeometry(30,45,5),
    ground_grass_material
  )
  ground_grass.position.x=10
  ground_grass.position.z=-30

  building.add(ground_grass)

  const ground_floor_box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(30,45,40),
    ground_floor_Boxmaterial
  )
  ground_floor_box.receiveShadow = ground_floor_box.castShadow = true
  ground_floor_box.position.x = -15
  ground_floor_box.position.z = -12.5

  building.add(ground_floor_box)

  const f_floor_box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(24,45,35),
    upper_floor_Boxmaterial
  )
  f_floor_box.receiveShadow = f_floor_box.castShadow = true
  f_floor_box.position.z = 25
  f_floor_box.position.x = -18
  building.add(f_floor_box)
}
{ //roof 1,2,3
  const f_floor_roof1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(24,45,2),
    ground_floor_Boxmaterial
  )
  f_floor_roof1.receiveShadow = f_floor_roof1.castShadow = true
  f_floor_roof1.position.z = 43
  f_floor_roof1.position.x = -18
  building.add(f_floor_roof1)

  const f_floor_roof2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(25,46,4),
    new THREE.MeshLambertMaterial({color: 0x666666})
  )
  f_floor_roof2.receiveShadow = f_floor_roof2.castShadow = true
  f_floor_roof2.position.z = 46
  f_floor_roof2.position.x = -18
  building.add(f_floor_roof2)

  const f_floor_roof3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(28,48,3),
    ground_floor_Boxmaterial
  )
  f_floor_roof3.receiveShadow = f_floor_roof3.castShadow = true
  f_floor_roof3.position.z = 49
  f_floor_roof3.position.x = -18
  building.add(f_floor_roof3)
} 
{ //stairs
  const stair1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10,19,3.5),
    upper_floor_Boxmaterial
  )
  stair1.position.x = 5
  stair1.position.y = -8
  stair1.position.z = -26
  building.add(stair1)

  const stair2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(8,15,3.5),
    upper_floor_Boxmaterial
  )
  stair2.position.x = 3
  stair2.position.y = -8
  stair2.position.z = -23
  building.add(stair2)

  const stair3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(5,11,3.5),
    upper_floor_Boxmaterial
  )
  stair3.position.x = 2
  stair3.position.y = -8
  stair3.position.z = -20
  building.add(stair3)
}
{ //door
  const door = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.6,8,20),
    railing_fence
  )
  door.receiveShadow = true
  door.position.x = 1
  door.position.y = -8
  door.position.z = -12
  building.add(door)

  const gold = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.7,2.2,1.5),
   gold_doorknob
  )
  gold.receiveShadow= true
  gold.position.x = 1
  gold.position.y = -8
  gold.position.z = -7.5
  building.add(gold)


const frame_door1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1.5,1.5,18),
    window_door
  )
  frame_door1.position.set(0.8,-12,-10)
  building.add(frame_door1)

  const frame_door2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1.5,1.5,18),
    window_door
  )
  frame_door2.position.set(1.2,-4,-10)
  building.add(frame_door2)
  
  const frame_door3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(6,12,4),
    window_door
  )
  frame_door3.position.set(-0.5,-8,-1)
  building.add(frame_door3)
}  
{ //vertical_fence
  const fence1 = vertical_fence()
  fence1.position.set(18,1,-24)
  building.add(fence1)

  const fence2 = vertical_fence()
  fence2.position.set(18,5,-24)
  building.add(fence2)

  const fence3 = vertical_fence()
  fence3.position.set(18,9,-24)
  building.add(fence3)

  const fence6 = vertical_fence()
  fence6.position.set(18,13,-24)
  building.add(fence6)

  const fence4 = vertical_fence()
  fence4.position.set(18,17,-24)
  building.add(fence4)

  const fence5 = vertical_fence()
  fence5.position.set(18,21,-24)
  building.add(fence5)

  const fence7 = vertical_fence()
  fence7.position.set(18,-21,-24)
  building.add(fence7)

  const fence8 = vertical_fence()
  fence8.position.set(18,-17,-24)
  building.add(fence8)

  const fence9 = vertical_fence()
  fence9.position.set(13,-21,-24)
  building.add(fence9)

  const fence10 = vertical_fence()
  fence10.position.set(8,-21,-24)
  building.add(fence10)

  const fence11 = vertical_fence()
  fence11.position.set(3,-21,-24)
  building.add(fence11)

  const fence12 = vertical_fence()
  fence12.position.set(13,21,-24)
  building.add(fence12)

  const fence13 = vertical_fence()
  fence13.position.set(8,21,-24)
  building.add(fence13)
  
  const fence14 = vertical_fence()
  fence14.position.set(3,21,-24)
  building.add(fence14)
}
{ //railing
  const railing1 = vertical_fence()
  railing1.position.set(-1.5,5,6.2)
  building.add(railing1)
  
  const railing2 = vertical_fence()
  railing2.position.set(-1.5,7,6.2)
  building.add(railing2)

  const railing3 = vertical_fence()
  railing3.position.set(-1.5,9,6.2)
  building.add(railing3)

  const railing4 = vertical_fence()
  railing4.position.set(-1.5,11,6.2)
  building.add(railing4)

  const railing5 = vertical_fence()
  railing5.position.set(-1.5,13,6.2)
  building.add(railing5)

  const railing6 = vertical_fence()
  railing6.position.set(-1.5,15,6.2)
  building.add(railing6)

  const railing7 = vertical_fence()
  railing7.position.set(-1.5,17,6.2)
  building.add(railing7)

  const railing8 = vertical_fence()
  railing8.position.set(-1.5,19,6.2)
  building.add(railing8)

  const railing9 = vertical_fence()
  railing9.position.set(-1.5,21,6.2)
  building.add(railing9)

  const railing24 = vertical_fence()
  railing24.position.set(-4,21,6.2)
  building.add(railing24)

  const railing10 = vertical_fence()
  railing10.position.set(-1.5,3,6.2)
  building.add(railing10)

  const railing11 = vertical_fence()
  railing11.position.set(-1.5,1,6.2)
  building.add(railing11)

  const railing12 = vertical_fence()
  railing12.position.set(-1.5,-1,6.2)
  building.add(railing12)

  const railing13 = vertical_fence()
  railing13.position.set(-1.5,-3,6.2)
  building.add(railing13)
  
  const railing14 = vertical_fence()
  railing14.position.set(-1.5,-5,6.2)
  building.add(railing14)

  const railing15 = vertical_fence()
  railing15.position.set(-1.5,-7,6.2)
  building.add(railing15)

  const railing16 = vertical_fence()
  railing16.position.set(-1.5,-9,6.2)
  building.add(railing16)

  const railing17 = vertical_fence()
  railing17.position.set(-1.5,-11,6.2)
  building.add(railing17)

  const railing18 = vertical_fence()
  railing18.position.set(-1.5,-13,6.2)
  building.add(railing18)

  const railing19 = vertical_fence()
  railing19.position.set(-1.5,-15,6.2)
  building.add(railing19)

  const railing20 = vertical_fence()
  railing20.position.set(-1.5,-17,6.2)
  building.add(railing20)

  const railing21 = vertical_fence()
  railing21.position.set(-1.5,-19,6.2)
  building.add(railing21)

  const railing22 = vertical_fence()
  railing22.position.set(-1.5,-21,6.2)
  building.add(railing22)

  const railing23 = vertical_fence()
  railing23.position.set(-4,-21,6.2)
  building.add(railing23)



}
{ //horizontal fence
  const hor_fence1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5,24,0.5),
    railing_fence
  )
  hor_fence1.position.set(18,11,-18.5)
  building.add(hor_fence1)

  const hor_fence2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5,24,0.5),
    railing_fence
  )
  hor_fence2.position.set(18,11,-22.5)
  building.add(hor_fence2)

  const hor_fence3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5,8,0.5),
    railing_fence
  )
  hor_fence3.position.set(18,-19,-22.5)
  building.add(hor_fence3)

  const hor_fence4 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(0.5,8,0.5),
    railing_fence
  )
  hor_fence4.position.set(18,-19,-18.5)
  building.add(hor_fence4)

  const hor_fence5 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(19,0.5,0.5),
    railing_fence
  )
  hor_fence5.position.set(10,-21,-22.5)
  building.add(hor_fence5)

  const hor_fence6 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(19,0.5,0.5),
    railing_fence
  )
  hor_fence6.position.set(10,-21,-18.5)
  building.add(hor_fence6)

  const hor_fence7 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(19,0.5,0.5),
    railing_fence
  )
  hor_fence7.position.set(10,21,-22.5)
  building.add(hor_fence7)

  const hor_fence8 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(19,0.5,0.5),
    railing_fence
  )
  hor_fence8.position.set(10,21,-18.5)
  building.add(hor_fence8)
}
{ //bricks
const brick1 = brickx()
brick1.position.set(-0.8,-19.5,4)
building.add(brick1)

const brick2 = brickx()
brick2.position.set(-0.8,-19.8,-8)
building.add(brick2)

const brick3 = brickx()
brick3.position.set(-0.8,-19.8,-20)
building.add(brick3)

const brick4 = brickx()
brick4.position.set(-0.8,19.8,-20)
building.add(brick4)

const brick5 = brickx()
brick5.position.set(-0.8,19.8,-8)
building.add(brick5)

const brick6 = brickx()
brick6.position.set(-0.8,19.8,4)
building.add(brick6) 

const brick7 = brickx()
brick7.position.set(-7,-19.8,18)
building.add(brick7)

const brick8 = brickx()
brick8.position.set(-7,-19.8,30)
building.add(brick8)

const brick9 = brickx()
brick9.position.set(-7,19.8,18)
building.add(brick9)

const brick10 = brickx()
brick10.position.set(-7,19.8,30)
building.add(brick10)

const brick11 = bricky()
brick11.position.set(-8.8,-21.5,36)
building.add(brick11)

const brick12 = bricky()
brick12.position.set(-8.8,-21.5,24)
building.add(brick12)

const brick13 = bricky()
brick13.position.set(-8.8,-21.5,12)
building.add(brick13)

const brick14 = bricky()
brick14.position.set(-8.8,21.5,36)
building.add(brick14)

const brick15 = bricky()
brick15.position.set(-8.8,21.5,24)
building.add(brick15)

const brick16 = bricky()
brick16.position.set(-8.8,21.5,12)
building.add(brick16)

const brick17 = bricky()
brick17.position.set(-3,-21.5,-2.3)
building.add(brick17)

const brick18 = bricky()
brick18.position.set(-3,-21.5,-14.3)
building.add(brick18)

const brick19 = bricky()
brick19.position.set(-3,-21.5,-26.3)
building.add(brick19)

const brick20 = bricky()
brick20.position.set(-3,21.5,-2.3)
building.add(brick20)

const brick21 = bricky()
brick21.position.set(-3,21.5,-14.3)
building.add(brick21)

const brick22 = bricky()
brick22.position.set(-3,21.5,-26.3)
building.add(brick22)
}
{ //window
  const window1 = window_creater()
  building.add(window1)
  const window2 = window_creater()
  window2.position.y = 15
  building.add(window2)
  const window3 = window_creater()
  window3.position.set(6,15,-36)
  building.add(window3)
}
return building
}
const scene = new THREE.Scene()
const building = Building()

scene.add(building)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
dirLight.position.set(100, -300 ,400)
dirLight.castShadow = true
dirLight.shadow.mapSize.width = 1024;
dirLight.shadow.mapSize.height = 1024;
dirLight.shadow.camera.left = -400;
dirLight.shadow.camera.right = 350;
dirLight.shadow.camera.top = 400;
dirLight.shadow.camera.bottom = -300;
dirLight.shadow.camera.near = 100;
dirLight.shadow.camera.far = 800;
scene.add(dirLight)


const aspectRatio = window.innerWidth / window.innerHeight
const cameraWidth = 150
const cameraHeight = cameraWidth / aspectRatio

const shadowLight = new THREE.DirectionalLight(0xffffff, .2);
shadowLight.position.set(-50, 100, 50);
shadowLight.castShadow = true;
scene.add(shadowLight)

const camera = new THREE.OrthographicCamera(
  cameraWidth/-2,
  cameraWidth/2,
  cameraHeight/2,
  cameraHeight/-2,
  0,
  1000
)
camera.position.set(300,-200,100)
camera.up.set(0,0,1)
camera.lookAt(0,0,0)



const renderer = new THREE.WebGL1Renderer({antialias: true, powerPreference: "high-performance"})
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)
document.body.appendChild(renderer.domElement)

