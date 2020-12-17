class Buffer{

    constructor(context, type, arrayType, srcData, usage){
        let buffer = context.createBuffer();
        context.bindBuffer(type, buffer);
        context.bufferData(type, new arrayType(srcData), usage||context.STATIC_DRAW);
        this.m_type = type;
        this.m_buffer = buffer;
        this.m_context = context;
    }
    bindBuffer(){
        this.m_context.bindBuffer(this.m_type, this.m_buffer);
    }
    
}

class VertexBuffer extends Buffer{

    constructor(context, srcData, usage){
        super(context, context.ARRAY_BUFFER, Float32Array, srcData, usage)
    }
} 
class IndexBuffer extends Buffer{

    constructor(context, srcData, usage){
        super(context, context.ELEMENT_ARRAY_BUFFER, Uint16Array, srcData, usage)
    }
} 
export {
    IndexBuffer,
    VertexBuffer
}