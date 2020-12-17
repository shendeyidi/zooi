import { VertexBuffer, Matrix4, World, ShaderProgram, createVertexShader, createFragmentShader } from './vcrawl'
export default class TestWorld extends World {

    constructor(el) {
        super(el)
    }

    init(context) {

        let webgl = context;

        let shaderProgram = new ShaderProgram(context,
            [createVertexShader(context,
                `attribute vec4 a_color;
        attribute vec4 a_position;        
        uniform mat4 u_translation;
        varying vec4 v_color;
        void main(){
            v_color = a_color;
            gl_Position = u_translation * a_position;
            
        }`),
            createFragmentShader(context,
        `precision mediump float;
        varying vec4 v_color;
        void main(){
            gl_FragColor = v_color;
        }`)])
        let a_color = shaderProgram.getAttribLocation("a_color");
        let a_position = shaderProgram.getAttribLocation("a_position");
        shaderProgram.useProgram();

        let buffer = new VertexBuffer(context, [
            0.0, +0.5, 1.0, 0.0, 0.0,
            -0.5, -0.5, 0.0, 1.0, 0.0,
            0.5, -0.5, 0.0, 0.0, 1.0
        ]);



        webgl.clearColor(0.0, 0.0, 0.0, 1.0);
        webgl.clear(webgl.COLOR_BUFFER_BIT);

        buffer.bindBuffer();

        this.enableVertexAttribArray(a_position);
        this.vertexAttribPointer(a_position, 2, 5 * 4);

        this.enableVertexAttribArray(a_color);
        this.vertexAttribPointer(a_color, 3, 5 * 4, 2 * 4);

        let u_translation = shaderProgram.getUniformLocation("u_translation");

        let translation = Matrix4.newTranslation(.5, .4, .3);

        shaderProgram.uniformMatrix4fv(u_translation, translation.elements())

        this.drawArrays(3);

        // webgl.drawArrays(webgl.TRIANGLES, 0, 3);

        // this.drawElements(3);

    }

}