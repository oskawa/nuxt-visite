<template>
  <div id="canvas1">
    <div id="layer">
      <div id="listButton" class="pt-8 pl-8">
        {{ latestTickId }}
        <button class="btn-list mb-5" id="return">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0313 6.25781H3.60354L10.4434 0.320312C10.5528 0.224609 10.4864 0.046875 10.3418 0.046875H8.61331C8.53713 0.046875 8.46487 0.0742186 8.40823 0.123047L1.02737 6.52734C0.959769 6.58594 0.905554 6.65838 0.868398 6.73976C0.831242 6.82114 0.812012 6.90956 0.812012 6.99902C0.812012 7.08849 0.831242 7.1769 0.868398 7.25828C0.905554 7.33966 0.959769 7.41211 1.02737 7.4707L8.4512 13.9141C8.48049 13.9395 8.51565 13.9531 8.55276 13.9531H10.3399C10.4844 13.9531 10.5508 13.7734 10.4414 13.6797L3.60354 7.74219H15.0313C15.1172 7.74219 15.1875 7.67188 15.1875 7.58594V6.41406C15.1875 6.32812 15.1172 6.25781 15.0313 6.25781Z"
              fill="black"
            />
          </svg>
        </button>
        <nuxt-link to="/">
          <button class="btn-list mb-5" id="home">
            <svg
              width="16"
              height="19"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.66667 11.8333V17.6667H1V7.16668L8 1.33334L15 7.16668V17.6667H10.3333V11.8333H5.66667Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </nuxt-link>
        <button class="btn-list" id="share">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0294 15.1156C10.0882 15.1343 10.1275 15.1719 10.1471 15.2282C10.1667 15.2845 10.1569 15.3407 10.1176 15.397L7.67647 17.7333C7.28431 18.1087 6.83333 18.4089 6.32353 18.6341C5.81372 18.8593 5.29412 18.9906 4.7647 19.0282C4.23529 19.0657 3.70588 19.0282 3.17647 18.9156C2.64706 18.803 2.16666 18.5684 1.73529 18.2119C1.20588 17.8178 0.794113 17.3393 0.499996 16.7763C0.205878 16.2133 0.049015 15.6504 0.0294072 15.0874C0.00979935 14.5245 0.0980347 13.9521 0.294113 13.3704C0.490192 12.7887 0.823525 12.282 1.29411 11.8504L5.08823 8.21927C5.69608 7.63754 6.40196 7.20593 7.20588 6.92445C8.0098 6.64297 8.83333 6.56791 9.67647 6.69927C10.4216 6.81186 11.0098 7.01828 11.4412 7.31853C11.8725 7.61877 12.2157 7.96593 12.4706 8.36001C12.5098 8.45384 12.5049 8.52421 12.4559 8.57112C12.4069 8.61803 12.3529 8.66026 12.2941 8.69779C12.2353 8.73532 12.1667 8.79161 12.0882 8.86668L11.8824 9.06371C11.6863 9.27013 11.451 9.37334 11.1765 9.37334C10.902 9.37334 10.652 9.26544 10.4265 9.04964C10.201 8.83384 9.95098 8.66964 9.67647 8.55705C9.40196 8.44445 9.09804 8.39754 8.7647 8.41631C8.43137 8.43507 8.13725 8.48198 7.88235 8.55705C7.62745 8.63211 7.36274 8.801 7.08823 9.06371L2.73529 13.2296C2.48039 13.4736 2.29411 13.7551 2.17647 14.0741C2.05882 14.3931 2.0196 14.7121 2.05882 15.0311C2.09804 15.3501 2.19607 15.6691 2.35294 15.9882C2.5098 16.3072 2.7647 16.5605 3.11764 16.7482C3.60784 17.0672 4.13725 17.1798 4.70588 17.0859C5.27451 16.9921 5.7549 16.7669 6.14706 16.4104L8.02941 14.637C8.06863 14.5807 8.12745 14.5714 8.20588 14.6089C8.79412 14.8528 9.40196 15.0217 10.0294 15.1156ZM18.2059 0.872602C18.7353 1.26668 19.1471 1.73581 19.4412 2.28001C19.7353 2.82421 19.902 3.38717 19.9412 3.9689C19.9804 4.55063 19.8922 5.13235 19.6765 5.71408C19.4608 6.29581 19.1176 6.80248 18.6471 7.23408L14.8529 10.8652C14.2451 11.4469 13.5392 11.8691 12.7353 12.1319C11.9314 12.3946 11.098 12.4696 10.2353 12.357C9.4902 12.2632 8.91176 12.0568 8.5 11.7378C8.08823 11.4188 7.7451 11.0716 7.47059 10.6963C7.43137 10.6212 7.44117 10.5556 7.5 10.4993L8.02941 9.9926C8.2451 9.80495 8.49019 9.71112 8.7647 9.71112C9.03921 9.71112 9.27451 9.80495 9.47059 9.9926C9.70588 10.2178 9.97059 10.3867 10.2647 10.4993C10.5588 10.6119 10.8627 10.6682 11.1765 10.6682C11.4902 10.6682 11.7941 10.6119 12.0882 10.4993C12.3824 10.3867 12.6373 10.2178 12.8529 9.9926L17.2059 5.85482C17.4608 5.61087 17.6471 5.32001 17.7647 4.98223C17.8824 4.64445 17.9216 4.31606 17.8824 3.99705C17.8431 3.67803 17.7353 3.3684 17.5588 3.06816C17.3824 2.76791 17.1275 2.51458 16.7941 2.30816C16.3235 2.00791 15.8039 1.89532 15.2353 1.97038C14.6667 2.04544 14.1765 2.28001 13.7647 2.67408L11.9118 4.44742C11.8529 4.50371 11.7941 4.5131 11.7353 4.47556C11.1863 4.25038 10.5784 4.07211 9.91176 3.94075C9.83333 3.94075 9.79412 3.90322 9.79412 3.82816C9.79412 3.7531 9.80392 3.70618 9.82353 3.68742L12.2647 1.35112C12.6569 0.975812 13.1078 0.675565 13.6176 0.450379C14.1275 0.225194 14.6373 0.0844536 15.1471 0.0281573C15.6569 -0.028139 16.1863 0.0187745 16.7353 0.168898C17.2843 0.319021 17.7745 0.553589 18.2059 0.872602Z"
              fill="#1D1D1D"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three/build/three.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import axios from "axios";

// import io from "socket.io-client";

export default {
  data() {
    return {
      renderer: null,
      modele: null,
      scene: null,
      camera: null,
      cube: null,
      cameraBox: null,
      collisionBox: null,
      prevTime: performance.now(),
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      controls: new PointerLockControls(),
      currentPosition: new THREE.Vector3(),
      objects: [],
      vertex: new THREE.Vector3(),
      color: new THREE.Color(),
      latestTickId: 0,
      players: [],
    };
  },
  mounted() {
    const vm = this;

    // use "main" socket defined in nuxt.config.js
    this.socket = this.$nuxtSocket({
      name: "main", // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
    });

    // vm.socket.on("tick", (tickId) => {
    //   console.log(tickId);
    //   vm.latestTickId = tickId;
    // });



    vm.socket.on("checkIfUsers", (args) => {
      console.log(' Nombre de personnes connectés : ')
      if(args.users.length>1){
        console.log('Vous netes pas seuls!')
        args.users.forEach(element => {
          if (element != args.socket){
            this.otherPlayers(element)
          }
          
        });
      }
      console.log(args.users.length); // world
    });
    vm.socket.on("otherConnected", (socket) => {
      this.otherPlayers(socket);
      console.log("Oh, vous netes plus tout seul ! ");
      console.log(socket);
    });

    vm.socket.on("disconnected", (socket) => {
      console.log("ils sont partis dans les couloirs du temps ! " + socket);
      let obj = this.players.find((o) => o.socket === socket);
      let cub = this.scene.getObjectById(obj.idObject);

      this.scene.remove(cub)



      this.players = this.players.filter(function (obj) {
        return obj.socket !== socket;
      });
      console.log(this.players);
    });

    const buttonReturn = document.getElementById("return");
    buttonReturn.addEventListener("click", () => {
      
      // vm.socket.emit("test");
    });

    vm.socket.on("updateDirection", (args) => {
      let obj = this.players.find((o) => o.socket === args.socketId);

      let cub = this.scene.getObjectById(obj.idObject);

      cub.position.x = args.x.x;
      cub.position.z = args.x.z;
    });

    this.init();
    this.animate();
  },
  methods: {
    initMainPlayer() {
      this.controls = new PointerLockControls(this.camera);
      const geometry = new THREE.BoxGeometry(5, 5, 5);
      const material = new THREE.MeshBasicMaterial({ color: 0xfff });
      this.cube = new THREE.Mesh(geometry, material);
      this.cube.geometry.computeBoundingBox();
      this.scene.add(this.cube);
      this.collisionBox = new THREE.Box3();
      this.cube.position.copy(this.controls.getObject().position);
      this.currentPosition.copy(this.controls.getObject().position);
      this.scene.add(this.controls.getObject());
      this.cameraBox = new THREE.Box3();
    },
    otherPlayers(socket) {
      const geometry = new THREE.BoxGeometry(5, 5, 5);
      const material = new THREE.MeshBasicMaterial({ color: 0xfff });
      const singlePlayer = new THREE.Mesh(geometry, material);
      this.scene.add(singlePlayer);
      this.players.push({
        socket,
        direction: singlePlayer.position,
        idObject: singlePlayer.id,
      });
      console.log(this.players);
    },
    init() {
      this.scene = new THREE.Scene();
      this.renderer = new THREE.WebGLRenderer({});
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMap.enabled = true;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.toneMapping = THREE.ReinhardToneMapping;
      this.renderer.toneMappingExposure = 1.3;
      this.renderer.domElement.style.position = "fixed";
      this.renderer.domElement.style.top = "0px";
      this.renderer.domElement.style.zIndex = "10";
      this.time = performance.now();

      this.camera = new THREE.PerspectiveCamera(
        80,
        window.innerWidth / window.innerHeight,
        1,
        20000
      );
      this.camera.position.y = 0;
      this.camera.position.x = 50;
      this.camera.rotation.y = 0.4;

      this.initMainPlayer();

      const spotLight = new THREE.SpotLight(0xf7e08d, 1, 0, 0.9, 0, 1);
      spotLight.position.set(0, 155, 90);
      spotLight.castShadow = true;
      this.scene.add(spotLight);

      const test = this.scene;
      const pmremGenerator = new THREE.PMREMGenerator(this.renderer);

      new RGBELoader().load("/models/sky.hdr", function (texture) {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        test.background = envMap;
        test.environment = envMap;
        texture.dispose();
        pmremGenerator.dispose();
      });

      new GLTFLoader().load("/models/visite7.gltf", (result) => {
        this.modele = result.scene;
        this.modele.scale.set(5, 5, 5);
        this.scene.add(this.modele);

        this.modele.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.geometry.computeBoundingBox();
            this.objects.push(node);
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
      });

      document.getElementById("canvas1").appendChild(this.renderer.domElement);

      // if (keyUP !== null) {
      //   keyUP.addEventListener("touchstart", function () {
      //     this.moveForward = true;
      //   });
      //   keyUP.addEventListener("touchend", function () {
      //     this.moveForward = false;
      //   });

      //   keyDOWN.addEventListener("touchstart", function () {
      //     this.moveBackward = true;
      //   });
      //   keyDOWN.addEventListener("touchend", function () {
      //     this.moveBackward = false;
      //   });

      //   keyLEFT.addEventListener("touchstart", function () {
      //     this.moveLeft = true;
      //   });
      //   keyLEFT.addEventListener("touchend", function () {
      //     this.moveLeft = false;
      //   });

      //   keyRIGHT.addEventListener("touchstart", function () {
      //     this.moveRight = true;
      //   });
      //   keyRIGHT.addEventListener("touchend", function () {
      //     this.moveRight = false;
      //   });
      // }

      const layer = document.getElementById("layer");
      const buttonReturn = document.getElementById("return");
      buttonReturn.addEventListener("click", () => {
        this.controls.lock();
      });

      this.controls.addEventListener("lock", function () {
        layer.style.display = "none";
      });
      this.controls.addEventListener("unlock", function () {
        layer.style.display = "block";
      });

      document.addEventListener("keydown", this.onKeyDown);
      document.addEventListener("keyup", this.onKeyUp);
    },
    onKeyDown(event) {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          this.moveForward = true;

          break;

        case "ArrowLeft":
        case "KeyA":
          this.moveLeft = true;
          break;

        case "ArrowDown":
        case "KeyS":
          this.moveBackward = true;
          break;

        case "ArrowRight":
        case "KeyD":
          this.moveRight = true;
          break;
      }
    },
    onKeyUp(event) {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          this.moveForward = false;
          break;

        case "ArrowLeft":
        case "KeyA":
          this.moveLeft = false;
          break;

        case "ArrowDown":
        case "KeyS":
          this.moveBackward = false;
          break;

        case "ArrowRight":
        case "KeyD":
          this.moveRight = false;
          break;
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.onWindowResize();

      const time1 = performance.now();

      if (this.controls.isLocked === true) {
        const delta = (time1 - this.prevTime) / 1000;
        let velocity = new THREE.Vector3();
        let direction = new THREE.Vector3();

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        direction.z = Number(this.moveForward) - Number(this.moveBackward);
        direction.x = Number(this.moveRight) - Number(this.moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions

        if (this.moveForward || this.moveBackward)
          this.socket.emit("direction", {
            x: this.cube.position.x,
            z: this.cube.position.z,
            id: this.cube.id,
          });

        velocity.z -= direction.z * 400.0 * delta;

        if (this.moveLeft || this.moveRight)
          this.socket.emit("direction", {
            x: this.cube.position.x,
            z: this.cube.position.z,
            id: this.cube.id,
          });
        velocity.x -= direction.x * 400.0 * delta;

        this.controls.moveRight(-velocity.x * delta);

        this.controls.moveForward(-velocity.z * delta);
      }
      this.collision();
      this.prevTime = time1;
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    collision() {
      this.cube.position.copy(this.controls.getObject().position);
      this.cameraBox
        .copy(this.cube.geometry.boundingBox)
        .applyMatrix4(this.cube.matrixWorld);
      for (var i = 0; i < this.objects.length; i++) {
        this.collisionBox
          .copy(this.objects[i].geometry.boundingBox)
          .applyMatrix4(this.objects[i].matrixWorld);

        if (this.cameraBox.intersectsBox(this.collisionBox)) {
          this.controls.getObject().position.copy(this.currentPosition);
        }
      }
      this.currentPosition.copy(this.controls.getObject().position);
    },
  },
};
</script>

<style lang="scss">
#layer {
  position: absolute;
  z-index: 111;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  #listButton {
    .btn-list {
      width: 30px;
      height: 30px;
      background: #f1f1f1;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>