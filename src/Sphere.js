class Sphere{
    constructor(){
      this.type='sphere';
      //this.position = [0.0, 0.0, 0.0];
      this.color = [1.0, 1.0, 1.0, 1.0];
      //this.size = 5.0;
      //this.segments = 10;
      this.matrix = new Matrix4();
      this.textureNum = 10;
      this.verts32 = new Float32Array([]);
    }
  
    render() {
      //var xy = this.position;
      var rgba = this.color;
      // var size = this.size;

      // pass texture number
      gl.uniform1i(u_whichTexture, this.textureNum);
    
      // Pass the color of a point to u_FragColor uniform variable
      gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

      // pass matrix
      gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    

        // front
        drawTriangle3DUV( [0.0,0.0,0.0, 1.0,1.0,0.0, 1.0,0.0,0.0] , [0,0, 1,1, 1,0]);
        drawTriangle3DUV( [0.0,0.0,0.0, 0.0,1.0,0.0, 1.0,1.0,0.0] , [0,0, 0,1, 1,1]);

        gl.uniform4f(u_FragColor, rgba[0]*0.85, rgba[1]*0.85, rgba[2]*0.85, rgba[3]);

        // back
        drawTriangle3DUV( [0.0,0.0,1.0, 1.0,1.0,1.0, 1.0,0.0,1.0] , [0,0, 1,1, 1,0]);
        drawTriangle3DUV( [0.0,0.0,1.0, 0.0,1.0,1.0, 1.0,1.0,1.0] , [0,0, 0,1, 1,1]);

        gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);

        // top
        drawTriangle3DUV( [0.0,1.0,0.0, 1.0,1.0,0.0, 1.0,1.0,1.0] , [0,0, 1,0, 1,1]);
        drawTriangle3DUV( [0.0,1.0,0.0, 1.0,1.0,1.0, 0.0,1.0,1.0] , [0,0, 1,1, 0,1]);

        gl.uniform4f(u_FragColor, rgba[0]*0.55, rgba[1]*0.55, rgba[2]*0.55, rgba[3]);

        // bottom
        drawTriangle3DUV( [0.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,1.0] , [1,0, 1,1, 0,1]);
        drawTriangle3DUV( [0.0,0.0,0.0, 1.0,0.0,1.0, 0.0,0.0,1.0] , [1,0, 0,1, 0,0]);

        gl.uniform4f(u_FragColor, rgba[0]*0.4, rgba[1]*0.4, rgba[2]*0.4, rgba[3]);

        // left (facing it)
        drawTriangle3DUV( [0.0,0.0,0.0, 0.0,0.0,1.0, 0.0,1.0,1.0] , [1,0, 0,0, 0,1]);
        drawTriangle3DUV( [0.0,0.0,0.0, 0.0,1.0,1.0, 0.0,1.0,0.0] , [1,0, 0,1, 1,1]);

        gl.uniform4f(u_FragColor, rgba[0]*0.25, rgba[1]*0.25, rgba[2]*0.25, rgba[3]);
      
        // right (facing it)
        drawTriangle3DUV( [1.0,0.0,0.0, 1.0,0.0,1.0, 1.0,1.0,1.0] , [0,0, 1,0, 1,1]);
        drawTriangle3DUV( [1.0,0.0,0.0, 1.0,1.0,1.0, 1.0,1.0,0.0] , [0,0, 1,1, 0,1]);
        
  }

  render() {
    //var xy = this.position;
    var rgba = this.color;
    // var size = this.size;

    // pass texture number
    gl.uniform1i(u_whichTexture, this.textureNum);
  
    // Pass the color of a point to u_FragColor uniform variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    // pass matrix
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

  

      // front
      drawTriangle3DUV( [0.0,0.0,0.0, 1.0,1.0,0.0, 1.0,0.0,0.0] , [0,0, 1,1, 1,0]);
      drawTriangle3DUV( [0.0,0.0,0.0, 0.0,1.0,0.0, 1.0,1.0,0.0] , [0,0, 0,1, 1,1]);

      gl.uniform4f(u_FragColor, rgba[0]*0.85, rgba[1]*0.85, rgba[2]*0.85, rgba[3]);

      // back
      drawTriangle3DUV( [0.0,0.0,1.0, 1.0,1.0,1.0, 1.0,0.0,1.0] , [0,0, 1,1, 1,0]);
      drawTriangle3DUV( [0.0,0.0,1.0, 0.0,1.0,1.0, 1.0,1.0,1.0] , [0,0, 0,1, 1,1]);

      gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);

      // top
      drawTriangle3DUV( [0.0,1.0,0.0, 1.0,1.0,0.0, 1.0,1.0,1.0] , [0,0, 1,0, 1,1]);
      drawTriangle3DUV( [0.0,1.0,0.0, 1.0,1.0,1.0, 0.0,1.0,1.0] , [0,0, 1,1, 0,1]);

      gl.uniform4f(u_FragColor, rgba[0]*0.55, rgba[1]*0.55, rgba[2]*0.55, rgba[3]);

      // bottom
      drawTriangle3DUV( [0.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,1.0] , [1,0, 1,1, 0,1]);
      drawTriangle3DUV( [0.0,0.0,0.0, 1.0,0.0,1.0, 0.0,0.0,1.0] , [1,0, 0,1, 0,0]);

      gl.uniform4f(u_FragColor, rgba[0]*0.4, rgba[1]*0.4, rgba[2]*0.4, rgba[3]);

      // left (facing it)
      drawTriangle3DUV( [0.0,0.0,0.0, 0.0,0.0,1.0, 0.0,1.0,1.0] , [1,0, 0,0, 0,1]);
      drawTriangle3DUV( [0.0,0.0,0.0, 0.0,1.0,1.0, 0.0,1.0,0.0] , [1,0, 0,1, 1,1]);

      gl.uniform4f(u_FragColor, rgba[0]*0.25, rgba[1]*0.25, rgba[2]*0.25, rgba[3]);
    
      // right (facing it)
      drawTriangle3DUV( [1.0,0.0,0.0, 1.0,0.0,1.0, 1.0,1.0,1.0] , [0,0, 1,0, 1,1]);
      drawTriangle3DUV( [1.0,0.0,0.0, 1.0,1.0,1.0, 1.0,1.0,0.0] , [0,0, 1,1, 0,1]);
      
}


  renderFastTest() {
    //var xy = this.position;
    var rgba = this.color;
    // var size = this.size;

    // pass texture number
    gl.uniform1i(u_whichTexture, this.textureNum);
  
    // Pass the color of a point to u_FragColor uniform variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    // pass matrix
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

  
    var input_arr = [];
    
      // front
      //drawTriangle3DUV( [0.0,0.0,0.0, 1.0,1.0,0.0, 1.0,0.0,0.0] , [0,0, 1,1, 1,0]);
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 0,0,
        1.0,1.0,0.0, 1,1,
        1.0,0.0,0.0, 1,0
      ]);
      //drawTriangle3DUV( [0.0,0.0,0.0, 0.0,1.0,0.0, 1.0,1.0,0.0] , [0,0, 0,1, 1,1]);
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 0,0,
        0.0,1.0,0.0, 0,1,
        1.0,1.0,0.0, 1,1
      ]);

      //gl.uniform4f(u_FragColor, rgba[0]*0.85, rgba[1]*0.85, rgba[2]*0.85, rgba[3]);

      // back
      //drawTriangle3DUV( [0.0,0.0,1.0, 1.0,1.0,1.0, 1.0,0.0,1.0] , [0,0, 1,1, 1,0]);
      input_arr = input_arr.concat([
        0.0,0.0,1.0, 0,0,
        1.0,1.0,1.0, 1,1,
        1.0,0.0,1.0, 1,0
      ]);
      //drawTriangle3DUV( [0.0,0.0,1.0, 0.0,1.0,1.0, 1.0,1.0,1.0] , [0,0, 0,1, 1,1]);
      input_arr = input_arr.concat([
        0.0,0.0,1.0, 0,0,
        0.0,1.0,1.0, 0,1,
        1.0,1.0,1.0, 1,1
      ]);

      //gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);

      // top
      //drawTriangle3DUV( [0.0,1.0,0.0, 1.0,1.0,0.0, 1.0,1.0,1.0] , [0,0, 1,0, 1,1]);
      input_arr = input_arr.concat([
        0.0,1.0,0.0, 0.0,0.0,
        1.0,1.0,0.0, 1.0,0.0,
        1.0,1.0,1.0, 1.0,1.0
      ]);
      //drawTriangle3DUV( [0.0,1.0,0.0, 1.0,1.0,1.0, 0.0,1.0,1.0] , [0,0, 1,1, 0,1]);
      input_arr = input_arr.concat([
        0.0,1.0,0.0, 0.0,0.0,
        1.0,1.0,1.0, 1.0,1.0, 
        0.0,1.0,1.0, 0.0,1.0
      ]);

      //gl.uniform4f(u_FragColor, rgba[0]*0.55, rgba[1]*0.55, rgba[2]*0.55, rgba[3]);

      // bottom
      //drawTriangle3DUV( [0.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,1.0] , [1,0, 1,1, 0,1]);
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 1.0,0.0,
        1.0,0.0,0.0, 1.0,1.0, 
        1.0,0.0,1.0, 0.0,1.0
      ]);
      //drawTriangle3DUV( [0.0,0.0,0.0, 1.0,0.0,1.0, 0.0,0.0,1.0] , [1,0, 0,1, 0,0]);
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 1.0,0.0, 
        1.0,0.0,1.0, 0.0,1.0,
        0.0,0.0,1.0, 0.0,0.0
      ]);

      //gl.uniform4f(u_FragColor, rgba[0]*0.4, rgba[1]*0.4, rgba[2]*0.4, rgba[3]);

      // left
      //drawTriangle3DUV( [0.0,0.0,0.0, 0.0,0.0,1.0, 0.0,1.0,1.0] , [1,0, 0,0, 0,1]);
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 1.0,0.0,
        0.0,0.0,1.0, 0.0,0.0, 
        0.0,1.0,1.0, 0.0,1.0
      ]);
      //drawTriangle3DUV( [0.0,0.0,0.0, 0.0,1.0,1.0, 0.0,1.0,0.0] , [1,0, 0,1, 1,1]);
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 1.0,0.0,
        0.0,1.0,1.0, 0.0,1.0, 
        0.0,1.0,0.0, 1.0,1.0
      ]);

      //gl.uniform4f(u_FragColor, rgba[0]*0.25, rgba[1]*0.25, rgba[2]*0.25, rgba[3]);
    
      // right
      //drawTriangle3DUV( [1.0,0.0,0.0, 1.0,0.0,1.0, 1.0,1.0,1.0] , [0,0, 1,0, 1,1]);
      input_arr = input_arr.concat([
        1.0,0.0,0.0, 0.0,0.0,
        1.0,0.0,1.0, 1.0,0.0, 
        1.0,1.0,1.0, 1.0,1.0
      ]);
      //drawTriangle3DUV( [1.0,0.0,0.0, 1.0,1.0,1.0, 1.0,1.0,0.0] , [0,0, 1,1, 0,1]);
      input_arr = input_arr.concat([
        1.0,0.0,0.0, 0.0,0.0,
        1.0,1.0,1.0, 1.0,1.0, 
        1.0,1.0,0.0, 0.0,1.0
      ]);
      
      drawMultiTrianglesFast(input_arr);
  }

  renderFastTestNormals() {
    //var xy = this.position;
    var rgba = this.color;
    // var size = this.size;

    // pass texture number
    //console.log(this.textureNum);
    gl.uniform1i(u_whichTexture, this.textureNum);
  
    // Pass the color of a point to u_FragColor uniform variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    // pass matrix
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

  
    var input_arr = [];

    var d = Math.PI/10;
    var dd = Math.PI/10;
    for (var t=0; t<Math.PI; t+=d) {
        for (var r=0; r< (2*Math.PI); r+=d) {
            var p1 = [Math.sin(t)*Math.cos(r), Math.sin(t)*Math.sin(r), Math.cos(t)];
            var p1UV = [(t)/Math.PI,(r)/(2*Math.PI)];
            var p1Norm = p1;
            
            var p2 = [Math.sin(t+dd)*Math.cos(r), Math.sin(t+dd)*Math.sin(r), Math.cos(t+dd)];
            var p2UV = [(t+dd)/Math.PI,(r)/(2*Math.PI)];
            var p2Norm = p2;
            
            var p3 = [Math.sin(t)*Math.cos(r+dd), Math.sin(t)*Math.sin(r+dd), Math.cos(t)];
            var p3UV = [(t)/Math.PI,(r+dd)/(2*Math.PI)];
            var p3Norm = p3;
            
            var p4 = [Math.sin(t+dd)*Math.cos(r+dd), Math.sin(t+dd)*Math.sin(r+dd), Math.cos(t+dd)];
            var p4UV = [(t+dd)/Math.PI,(r+dd)/(2*Math.PI)];
            var p4Norm = p4;

            input_arr = input_arr.concat(p1);
            input_arr = input_arr.concat(p1UV);
            input_arr = input_arr.concat(p1Norm);
            input_arr = input_arr.concat(p2);
            input_arr = input_arr.concat(p2UV);
            input_arr = input_arr.concat(p2Norm);
            input_arr = input_arr.concat(p4);
            input_arr = input_arr.concat(p4UV);
            input_arr = input_arr.concat(p4Norm);

            input_arr = input_arr.concat(p1);
            input_arr = input_arr.concat(p1UV);
            input_arr = input_arr.concat(p1Norm);
            input_arr = input_arr.concat(p4);
            input_arr = input_arr.concat(p4UV);
            input_arr = input_arr.concat(p4Norm);
            input_arr = input_arr.concat(p3);
            input_arr = input_arr.concat(p3UV);
            input_arr = input_arr.concat(p3Norm);

            //console.log(p1);
            //console.log(p1Norm);
        }
    }
      
      drawMultiTrianglesFastNormals(input_arr);
    }
}


