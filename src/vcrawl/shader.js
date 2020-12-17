function createShader(context, type, source){

    let shader = context.createShader(type);
    context.shaderSource(shader, source);
    context.compileShader(shader);
    if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
        let infoLog =  context.getShaderInfoLog(shader);
        throw new Error(`Shader程序编译出错:${infoLog}`);
    }
    return shader;
}

function createVertexShader(context, source){
    return createShader(context, context.VERTEX_SHADER, source)
}

function createFragmentShader(context, source){
    return createShader(context, context.FRAGMENT_SHADER, source)
}

class ShaderProgram{

    constructor(context, shaders){
        let program = context.createProgram();
        for(let shader of shaders){
            context.attachShader(program, shader);
        }
        context.linkProgram(program);
        if (!context.getProgramParameter(program, context.LINK_STATUS)) {
            throw new Error('Shader程序链接出错！');
        }        
        this.m_program = program;
        this.m_context = context;
    }

    useProgram(){
        this.m_context.useProgram(this.m_program);
    }

    vertexAttrib3f(index, v0, v1, v2){
        this.m_context.vertexAttrib3f(index, v0, v1, v2);
    }

    getAttribLocation(name){
        return this.m_context.getAttribLocation(this.m_program, name);
    }

    uniform4f(location, v0, v1, v2, v3){
        this.m_context.uniform4f(location, v0, v1, v2, v3);
    }

    getUniformLocation(name){
        return this.m_context.getUniformLocation(this.m_program, name);
    }
    
    bindAttribLocation(index, name){
        this.m_context.bindAttribLocation(this.m_program, index, name);
    }

    uniformMatrix4fv(location, matrix, transpose = false){    
        this.m_context.uniformMatrix4fv(location, transpose, matrix);
    }

}

export {
    ShaderProgram,
    createVertexShader,
    createFragmentShader
}