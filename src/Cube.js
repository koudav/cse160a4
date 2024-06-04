class Cube{
    constructor(){
      this.type='cube';
      //this.position = [0.0, 0.0, 0.0];
      this.color = [1.0, 1.0, 1.0, 1.0];
      //this.size = 5.0;
      //this.segments = 10;
      this.matrix = new Matrix4();
      this.textureNum = -1;
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
    
      // front
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 0.0,0.0, 0.0,0.0,-1.0,
        1.0,1.0,0.0, 1.0,1.0, 0.0,0.0,-1.0,
        1.0,0.0,0.0, 1.0,0.0, 0.0,0.0,-1.0
      ]);
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 0.0,0.0, 0.0,0.0,-1.0,
        0.0,1.0,0.0, 0.0,1.0, 0.0,0.0,-1.0,
        1.0,1.0,0.0, 1.0,1.0, 0.0,0.0,-1.0
      ]);

      // back
      input_arr = input_arr.concat([
        0.0,0.0,1.0, 0,0, 0.0,0.0,1.0,
        1.0,1.0,1.0, 1,1, 0.0,0.0,1.0,
        1.0,0.0,1.0, 1,0, 0.0,0.0,1.0
      ]);
      input_arr = input_arr.concat([
        0.0,0.0,1.0, 0,0, 0.0,0.0,1.0,
        0.0,1.0,1.0, 0,1, 0.0,0.0,1.0,
        1.0,1.0,1.0, 1,1, 0.0,0.0,1.0
      ]);

      // top
      input_arr = input_arr.concat([
        0.0,1.0,0.0, 0.0,0.0, 0,1,0,
        1.0,1.0,0.0, 1.0,0.0, 0,1,0,
        1.0,1.0,1.0, 1.0,1.0, 0,1,0
      ]);
      input_arr = input_arr.concat([
        0.0,1.0,0.0, 0.0,0.0, 0,1,0,
        1.0,1.0,1.0, 1.0,1.0, 0,1,0, 
        0.0,1.0,1.0, 0.0,1.0, 0,1,0
      ]);

      // bottom
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 0.0,0.0, 0,-1,0,
        1.0,0.0,0.0, 1.0,0.0, 0,-1,0, 
        1.0,0.0,1.0, 1.0,1.0, 0,-1,0
      ]);
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 0.0,0.0, 0,-1,0, 
        1.0,0.0,1.0, 1.0,1.0, 0,-1,0,
        0.0,0.0,1.0, 0.0,1.0, 0,-1,0,
      ]);

      // left
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 0.0,0.0, -1,0,0,
        0.0,0.0,1.0, 1.0,0.0, -1,0,0, 
        0.0,1.0,1.0, 1.0,1.0, -1,0,0
      ]);
      input_arr = input_arr.concat([
        0.0,0.0,0.0, 0.0,0.0, -1,0,0,
        0.0,1.0,1.0, 1.0,1.0, -1,0,0, 
        0.0,1.0,0.0, 0.0,1.0, -1,0,0
      ]);
    
      // right
      input_arr = input_arr.concat([
        1.0,0.0,0.0, 0.0,0.0, 1,0,0,
        1.0,0.0,1.0, 1.0,0.0, 1,0,0,
        1.0,1.0,1.0, 1.0,1.0, 1,0,0
      ]);
      input_arr = input_arr.concat([
        1.0,0.0,0.0, 0.0,0.0, 1,0,0,
        1.0,1.0,1.0, 1.0,1.0, 1,0,0, 
        1.0,1.0,0.0, 0.0,1.0, 1,0,0
      ]);
      
      drawMultiTrianglesFastNormals(input_arr);
    }
}


