import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Particle
{
    constructor(x, y)
    {
        this.x = x
        this.y = y
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('particle')
        }

        // Resource
        this.resource = this.resources.items.particleModel

        this.createGeometry()
        this.setAnimation()
    }

    createGeometry()
    {
        // Create Sphere Geometry
        this.geometry = new THREE.BoxGeometry(1, 1);
        
        // Create reflective material
        this.material = new THREE.MeshStandardMaterial({
            color: 0xff00ff,
            envMapIntensity: 1,
            roughness: 0.2,
            metalness: 0.8
        })

        // Create Mesh
        this.model = new THREE.Mesh(this.geometry, this.material)

        // Set Position
        this.model.position.set(this.x, this.y, 0)

        // Set Shadows
        // this.model.castShadow = true
        // this.model.receiveShadow = true

        // Add to Scene
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }

    setAnimation()
    {
        this.animation = null;

        // Debug
        if(this.debug.active)
        {
           
        }
    }

    update()
    {
        // Ossilate using deltaTime
        this.model.position.z = 
            Math.sin(this.time.elapsed * (Math.abs(this.y ^ this.x)) * 0.0003) * 0.5;
    }
}