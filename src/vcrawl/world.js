export default class World {
    constructor(el) {
        let canvas = document.querySelector(el);
        let context = canvas.getContext("webgl");        
        this.m_context = context; 
        context.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);
        this.init(context);        
    }

    init(context){

    }

    enableVertexAttribArray(index){
        this.m_context.enableVertexAttribArray(index);
    }

    vertexAttribPointer(index, size, stride, offset = 0, type, normalized = false){
        this.m_context.vertexAttribPointer(index, size, type || this.m_context.FLOAT, normalized, stride, offset);
    }

    drawArrays(count, mode, first = 0){
        this.m_context.drawArrays(mode != undefined? mode : this.m_context.TRIANGLES, first, count);
    }

    drawElements(count, mode, type, offset = 0){
        this.m_context.drawElements(mode || this.m_context.TRIANGLES, count, type || this.m_context.UNSIGNED_SHORT, offset);
    }
    

    
}