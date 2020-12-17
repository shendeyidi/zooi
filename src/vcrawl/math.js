class Vector2{


    constructor(x, y){
        this.m_x = x;
        this.m_y = y;
    }

    toString(){
        return `Vector2[x = ${this.m_x}, y = ${this.m_y}]`;
    }


    length(){
        return  Math.sqrt(this.m_x * this.m_x + this.m_y * this.m_y);
    }

    get x(){
        return this.m_x;
    }
    set x(x){
        this.m_x = x;
    }
    get y(){
        return this.m_y;
    }
    set y(y){
        this.m_y = y;
    }
    add(v){
        return new Vector2(this.m_x + v.m_x, this.m_y + v.m_y);
    }
    sub(v){
        return new Vector2(this.m_x - v.m_x, this.m_y - v.m_y);
    }
    dot(v){
        return this.m_x * v.m_x + this.m_y * v.m_y;
    }
    static add(v1, v2){
        return new Vector2(v1.m_x + v2.m_x, v1.m_y + v2.m_y);
    }
    static sub(v1, v2){
        return new Vector2(v1.m_x - v2.m_x, v1.m_y - v2.m_y);
    }
    static dot(v1, v2){
        return v1.m_x * v2.m_x + v1.m_y * v2.m_y;
    }

}

class Vector3{

    constructor(x, y, z){
        this.m_x = x;
        this.m_y = y;
        this.m_z = z;
    }

    length(){
        return  Math.sqrt(this.m_x * this.m_x + this.m_y * this.m_y + this.m_z * this.m_z);
    }

    normalization(){
        let ratio = 1.0 / this.length();
        return new Vector3(this.m_x * ratio, this.m_y * ratio, this.m_z * ratio)
    }

    product(vec3){
        return new Vector3(this.m_y * vec3.m_z - this.m_z * vec3.m_y,
            -this.m_x * vec3.m_x + this.m_z * vec3.m_x,
            this.m_x * vec3.m_y - this.m_y * vec3.m_x);
    };

    get x() {
        return this.m_x;
    }
    set x(x){
        this.m_x = x;
    }
    get y(){
        return this.m_y;
    }
    set y(y){
        this.m_y = y;
    }
    get z() {
        return this.m_z;
    }
    set z(z){
        this.m_z = z;
    }
    add(v){
        return new Vector3(this.m_x + v.m_x, this.m_y + v.m_y, this.m_z + v.m_z);
    }
    sub(v){
        return new Vector3(this.m_x - v.m_x, this.m_y - v.m_y, this.m_z - v.m_z);
    }
    dot(v){
        return this.m_x * v.m_x + this.m_y * v.m_y + this.m_z * v.m_z;
    }
    static add(v1, v2){
        return new Vector3(v1.m_x + v2.m_x, v1.m_y + v2.m_y, v1.m_z + v2.m_z);
    }
    static sub(v1, v2){
        return new Vector3(v1.m_x - v2.m_x, v1.m_y - v2.m_y, v1.m_z - v2.m_z);
    }
    static dot(v1, v2){
        return v1.m_x * v2.m_x + v1.m_y * v2.m_y + v1.m_z * v2.m_z;
    }

}

class Vector4{

    constructor(x, y, z, w){
        this.m_x = x;
        this.m_y = y;
        this.m_z = z;
        this.m_w = w;
    }

    length(){
        return  Math.sqrt(this.m_x * this.m_x + this.m_y * this.m_y + this.m_z * this.m_z + this.m_w * this.m_w);
    }

    get x() {
        return this.m_x;
    }
    set x(x){
        this.m_x = x;
    }
    get y(){
        return this.m_y;
    }
    set y(y){
        this.m_y = y;
    }
    get z() {
        return this.m_z;
    }
    set z(z){
        this.m_z = z;
    }
    get w() {
        return this.m_w;
    }
    set w(w){
        this.m_w = w;
    }
    add(v){
        return new Vector4(this.m_x + v.m_x, this.m_y + v.m_y, this.m_z + v.m_z, this.m_w + v.m_w);
    }
    sub(v){
        return new Vector4(this.m_x - v.m_x, this.m_y - v.m_y, this.m_z - v.m_z, this.m_w - v.m_w);
    }
    dot(v){
        return this.m_x * v.m_x + this.m_y * v.m_y + this.m_z * v.m_z + this.m_w * v.m_w;
    }
    static add(v1, v2){
        return new Vector4(v1.m_x + v2.m_x, v1.m_y + v2.m_y, v1.m_z + v2.m_z, v1.m_w + v2.m_w);
    }
    static sub(v1, v2){
        return new Vector4(v1.m_x - v2.m_x, v1.m_y - v2.m_y, v1.m_z - v2.m_z, v1.m_w - v2.m_w);
    }
    static dot(v1, v2){
        return v1.m_x * v2.m_x + v1.m_y * v2.m_y + v1.m_z * v2.m_z + v1.m_w * v2.m_w;
    }


}

class Matrix3{
    constructor(m11 = 0, m12 = 0, m13 = 0, m21 = 0, m22 = 0, m23 = 0, m31 = 0, m32 = 0, m33 = 0){        
        this.m11 = m11;
        this.m12 = m12;
        this.m13 = m13;
        this.m21 = m21;
        this.m22 = m22;
        this.m23 = m23;
        this.m31 = m31;
        this.m32 = m32;
        this.m33 = m33;
    }

    add(m){
        return new Matrix3(this.m11 + m.m11, this.m12 + m.m12, this.m13 + m.m13,    
            this.m21 + m.m21, this.m22 + m.m22, this.m23 + m.m23,    
            this.m31 + m.m31, this.m32 + m.m32, this.m33 + m.m33);
    }

    sub(m){
        return new Matrix3(this.m11 - m.m11, this.m12 - m.m12, this.m13 - m.m13,    
            this.m21 - m.m21, this.m22 - m.m22, this.m23 - m.m23,    
            this.m31 - m.m31, this.m32 - m.m32, this.m33 - m.m33);
    }

    mul(m){
        return new Matrix3(
            this.m11 * m.m11 + this.m12 * m.m21 + this.m13 * m.m31,
            this.m11 * m.m12 + this.m12 * m.m22 + this.m13 * m.m32,
            this.m11 * m.m13 + this.m12 * m.m23 + this.m13 * m.m33,

            this.m21 * m.m11 + this.m22 * m.m21 + this.m23 * m.m31,
            this.m21 * m.m12 + this.m22 * m.m22 + this.m23 * m.m32,
            this.m21 * m.m13 + this.m22 * m.m23 + this.m23 * m.m33,                
            this.m31 * m.m11 + this.m32 * m.m21 + this.m33 * m.m31,
            this.m31 * m.m12 + this.m32 * m.m22 + this.m33 * m.m32,
            this.m31 * m.m13 + this.m32 * m.m23 + this.m33 * m.m33);
    }

    mulVec2(v){
        return new Vector3(
            this.m11 * v.m_x + this.m12 * v.m_y + this.m13,
            this.m21 * v.m_x + this.m22 * v.m_y + this.m23,   
            this.m31 * v.m_x + this.m32 * v.m_y + this.m33
        );
    }

    mulVec3(v){
        return new Vector3(
            this.m11 * v.m_x + this.m12 * v.m_y + this.m13 * v.m_z,
            this.m21 * v.m_x + this.m22 * v.m_y + this.m23 * v.m_z,   
            this.m31 * v.m_x + this.m32 * v.m_y + this.m33 * v.m_z
        );
    }
}

class Quaternion{

    constructor(r, i, j, k){
        this.m_r = r;
        this.m_i = i;
        this.m_j = j;
        this.m_k = k;
    }

    get r(){
        return this.m_r;
    }
    get i(){
        return this.m_i;
    }
    get j(){
        return this.m_j;
    }
    get k(){
        return this.m_k;
    }
}

class Matrix4{
    constructor(m11 = 0, m12 = 0, m13 = 0, m14 = 0, 
        m21 = 0, m22 = 0, m23 = 0, m24 = 0, 
        m31 = 0, m32 = 0, m33 = 0, m34 = 0,
        m41 = 0, m42 = 0, m43 = 0, m44 = 0){        
        this.m11 = m11;
        this.m12 = m12;
        this.m13 = m13;
        this.m14 = m14;

        this.m21 = m21;
        this.m22 = m22;
        this.m23 = m23;
        this.m24 = m24;

        this.m31 = m31;
        this.m32 = m32;
        this.m33 = m33;
        this.m34 = m34;

        this.m41 = m41;
        this.m42 = m42;
        this.m43 = m43;
        this.m44 = m44;
    }

    elements(ArrayType = Float32Array){
        return new ArrayType([
            this.m11, this.m21, this.m31, this.m41, 
            this.m12, this.m22, this.m32, this.m42, 
            this.m13, this.m23, this.m33, this.m43,
            this.m14, this.m24, this.m34, this.m44
        ]);
    }

    static ortho(left, right, bottom, top, zNear, zFar){       
       let tx = -(right + left) / (right - left), ty = - (top + bottom)/(top - bottom), tz = -(zFar + zNear)/(zFar - zNear);
        return new Matrix4(
            2.0/ (right - left), 0.0, 0.0, tx,
            0.0, 2.0/ (top - bottom), 0.0, ty,
            0.0, 0.0, -2.0/ (zFar - zNear), tz,
            0.0, 0.0, 0.0, 1.0);
    }
    

    static perspective(fov, aspect, zNear, zFar){

        let ratio = Math.tan((fov * Math.PI / 180.0) / 2.0);
        let left = -zNear * ratio * aspect, right = zNear * ratio * aspect, bottom = -zNear * ratio, top = zNear * ratio;
        let A = (right + left) / (right - left), B = (top + bottom) / (top - bottom),
	     	C = -(zFar + zNear) / (zFar - zNear), D = - 2.0 * zFar * zNear / (zFar - zNear);
    	return new Matrix4(
            2.0 * zNear / (right - left), 0.0, A, 0.0,
	    	0.0, 2.0 * zNear / (top - bottom), B, 0.0,
	     	0.0, 0.0, C, D,
             0.0, 0.0, -1.0, 0.0);
    

    }
    static frustum(left, right, bottom, top, zNear, zFar){
    	let A = (right + left) / (right - left), B = (top + bottom) / (top - bottom),
	     	C = -(zFar + zNear) / (zFar - zNear), D = - 2.0 * zFar * zNear / (zFar - zNear);
    	return new Matrix4(
            2.0 * zNear / (right - left), 0.0, A, 0.0,
	    	0.0, 2.0 * zNear / (top - bottom), B, 0.0,
	     	0.0, 0.0, C, D,
             0.0, 0.0, -1.0, 0.0);
    }

    static identity(){
        return new Matrix4(
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0);
    }

    static lookAt(eye, target, up){
        let e = eye.x, f = eye.y, g = eye.z, h = up.x, i = up.y, j = up.z, k = target.x, l = target.y, m = target.z;

        console.log(e, f, g, h, i, j, k, l, m);
        if (e == k && f == l && g == m) {
            return new Matrix4(
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0);
        }
        let n = e - k, o = f - l, p = g - m;
        let w = 1 / Math.sqrt(n * n + o * o + p * p);
        n *= w;
        o *= w;
        p *= w;
        let q = i * p - j * o, r = j * n - h * p, s = h * o - i * n;
        w = Math.sqrt(q * q + r * r + s * s);
        if (!w) {
            q = 0;
            r = 0;
            s = 0;
        } else {
            w = 1 / w;
            q *= w;
            r *= w;
            s *= w;
        }
        console.log('w', w);
        let t = o * s - p * r, u = p * q - n * s, v = n * r - o * q;
        w = Math.sqrt(t * t + u * u + v * v);
        if (!w) {
            t = 0;
            u = 0;
            v = 0;
        } else {
            w = 1 / w;
            t *= w;
            u *= w;
            v *= w;
        }
        return new Matrix4(
            q, r, s, -(q * e + r * f + s * g),
            t, u, v, -(t * e + u * f + v * g),
            n, o, p,  -(n * e + o * f + p * g),
            0.0, 0.0, 0.0, 1.0);
    }

    static newTranslation(deltaX, deltaY, deltaZ){
        return new Matrix4(
            1.0, 0.0, 0.0, deltaX,
            0.0, 1.0, 0.0, deltaY,
            0.0, 0.0, 1.0, deltaZ,
            0.0, 0.0, 0.0, 1.0);
    }

    static newZoomIn(sx, sy, sz){
        return new Matrix4(
            sx, 0.0, 0.0, 0.0,
            0.0, sy, 0.0, 0.0,
            0.0, 0.0, sz, 0.0,
            0.0, 0.0, 0.0, 1.0);
    }

    static newRatate(ux, uy, uz, theta){

        let sina = sin(theta), 
            cosa = cos(theta);
        return new Matrix4(
            cosa + (1 - cosa) * ux * ux, (1 - cosa) * ux * uy - sina * uz, (1 - cosa) * uz * ux + sina * uy, 0.0,
            (1 - cosa) * ux * uy + sina * uz, cosa + (1 - cosa) * uy * uy, (1 - cosa) * uz * uy - sina * ux, 0.0,
            (1 - cosa) * ux * uz - sina * uy, (1 - cosa) * uy * uz + sina * ux, cosa + (1 - cosa)*uz * uz, 0.0,
            0.0, 0.0, 0.0, 1.0);
    }

    static newRatateByQuaternion(quaternion){
        let _2i2 = 2 * quaternion.i * quaternion.i,
		_2j2 = 2 * quaternion.j * quaternion.j,
		_2k2 = 2 * quaternion.k * quaternion.k,
		_2ij = 2 * quaternion.i * quaternion.j,
		_2ik = 2 * quaternion.i * quaternion.k,
		_2jk = 2 * quaternion.j * quaternion.k,
		_2ir = 2 * quaternion.i * quaternion.r,
		_2jr = 2 * quaternion.j * quaternion.r,
		_2kr = 2 * quaternion.k * quaternion.r;

     	return new Matrix4(
            1.0 - _2j2 - _2k2, _2ij + _2kr, _2ik - _2jr, 0.0,
	     	_2ij - _2kr, 1.0 - _2i2 - _2k2, _2jk + _2ir, 0.0,
	     	_2ik + _2jr, _2jk - _2ir, 1.0 - _2i2 - _2j2, 0.0,
	      	0.0, 0.0, 0.0, 1.0);
    }

    add(m){
        return new Matrix4(this.m11 + m.m11, this.m12 + m.m12, this.m13 + m.m13, this.m14 + m.m14,    
            this.m21 + m.m21, this.m22 + m.m22, this.m23 + m.m23, this.m24 + m.m24,
            this.m31 + m.m31, this.m32 + m.m32, this.m33 + m.m33, this.m34 + m.m34,
            this.m41 + m.m41, this.m42 + m.m42, this.m43 + m.m43, this.m44 + m.m44);
    }

    sub(m){
        return new Matrix4(this.m11 - m.m11, this.m12 - m.m12, this.m13 - m.m13,  this.m14 - m.m14,
            this.m21 - m.m21, this.m22 - m.m22, this.m23 - m.m23, this.m24 - m.m24,
            this.m31 - m.m31, this.m32 - m.m32, this.m33 - m.m33, this.m34 - m.m34,
            this.m41 - m.m41, this.m42 - m.m42, this.m43 - m.m43, this.m44 - m.m44);
    }

    mul(m){
        return new Matrix4(
            this.m11 * m.m11 + this.m12 * m.m21 + this.m13 * m.m31 + this.m14 * m.m41,
            this.m11 * m.m12 + this.m12 * m.m22 + this.m13 * m.m32 + this.m14 * m.m42,
            this.m11 * m.m13 + this.m12 * m.m23 + this.m13 * m.m33 + this.m14 * m.m43,
            this.m11 * m.m14 + this.m12 * m.m24 + this.m13 * m.m34 + this.m14 * m.m44,


            this.m21 * m.m11 + this.m22 * m.m21 + this.m23 * m.m31 + this.m24 * m.m41,
            this.m21 * m.m12 + this.m22 * m.m22 + this.m23 * m.m32 + this.m24 * m.m42,
            this.m21 * m.m13 + this.m22 * m.m23 + this.m23 * m.m33 + this.m24 * m.m43,
            this.m21 * m.m14 + this.m22 * m.m24 + this.m23 * m.m34 + this.m24 * m.m44, 

            this.m31 * m.m11 + this.m32 * m.m21 + this.m33 * m.m31 + this.m34 * m.m41,
            this.m31 * m.m12 + this.m32 * m.m22 + this.m33 * m.m32 + this.m34 * m.m42,
            this.m31 * m.m13 + this.m32 * m.m23 + this.m33 * m.m33 + this.m34 * m.m43,
            this.m31 * m.m14 + this.m32 * m.m24 + this.m33 * m.m34 + this.m34 * m.m44,

            this.m41 * m.m11 + this.m42 * m.m21 + this.m43 * m.m31 + this.m44 * m.m41,
            this.m41 * m.m12 + this.m42 * m.m22 + this.m43 * m.m32 + this.m44 * m.m42,
            this.m41 * m.m13 + this.m42 * m.m23 + this.m43 * m.m33 + this.m44 * m.m43,
            this.m41 * m.m14 + this.m42 * m.m24 + this.m43 * m.m34 + this.m44 * m.m44);
    }

    mulVec2(v){
        return new Vector3(
            this.m11 * v.m_x + this.m12 * v.m_y + this.m13,
            this.m21 * v.m_x + this.m22 * v.m_y + this.m23,   
            this.m31 * v.m_x + this.m32 * v.m_y + this.m33
        );
    }

    mulVec3(v){
        return new Vector3(
            this.m11 * v.m_x + this.m12 * v.m_y + this.m13 * v.m_z,
            this.m21 * v.m_x + this.m22 * v.m_y + this.m23 * v.m_z,   
            this.m31 * v.m_x + this.m32 * v.m_y + this.m33 * v.m_z
        );
    }
}
export {
    Vector2,
    Vector3,
    Vector4,

    Matrix3,
    Matrix4,

    Quaternion
}