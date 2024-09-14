import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Particle from './Particle.js'

export default class World
{
    constructor(width = 10, height = 10)
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.particles = []

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            // Iterate to add particles
            for(let y = 0; y < height; y++) {
                for(let x = 0; x < width; x++) {
                    this.particles.push( new Particle(x, y) );
                }
            }
            
            this.environment = new Environment()
        })
    }

    update()
    {
        if (this.particles.length > 0) {
            for(let i = 0; i < this.particles.length; i++) {
                this.particles[i].update()
            }
        }
    }
}