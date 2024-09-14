import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Particle
{
    constructor()
    {
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
        this.geometry = new THREE.SphereGeometry(0.1, 32, 32);
        
        // Create reflective phong material
        this.material = new THREE.MeshPhongMaterial({
            color: 0x0000ff,
            shininess: 100,
            envMap: this.resources.items.envMapTexture,
            reflectivity: 1,
            refractionRatio: 0.98,
            flatShading: true
        });

        // Create Mesh
        this.model = new THREE.Mesh(this.geometry, this.material)
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

    }
}