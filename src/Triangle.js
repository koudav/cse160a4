class Triangle{
    constructor(){
      this.type='triangle';
      this.position = [0.0, 0.0, 0.0];
      this.color = [1.0, 1.0, 1.0, 1.0];
      this.size = 5.0;
      this.isCustom = false; //overrides size to make custom triangle
      this.customCoords = [[0.0, 0.0], [1.0, 0.0] [0.0, 1.0]]; //only used if override is true
    }
  
    render() {
      var xy = this.position;
      var rgba = this.color;
      var size = this.size;
      /*var xy = g_points[i];
      var rgba = g_colors[i];
      var size = g_sizes[i];*/
  
      // Pass the position of a point to a_Position variable
      //gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
      // Pass the color of a point to u_FragColor variable
      gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
      // Pass the size of a point to u_Size variable
      gl.uniform1f(u_Size, size);
      // Draw
      //gl.drawArrays(gl.POINTS, 0, 1);
      if (!this.isCustom) {
        var d = this.size / 200.0; // delta
        drawTriangle( [xy[0], xy[1], xy[0]+d, xy[1], xy[0], xy[1]+d] );
      }
      else {
        drawTriangle( [this.customCoords[0][0], this.customCoords[0][1], this.customCoords[1][0], this.customCoords[1][1], this.customCoords[2][0], this.customCoords[2][1]] );
      }
    }
  }

function drawTriangle(vertices) {
  /*var vertices = new Float32Array([
    0, 0.5,   -0.5, -0.5,   0.5, -0.5
  ]);*/
  var n = 3; // The number of vertices

  // Create a buffer object
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
  //gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  /*var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }*/
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);


  gl.drawArrays(gl.TRIANGLES, 0, n);
  return n;
}

var g_vertexBuffer = null;

function initTriangle3D() {
  g_vertexBuffer = gl.createBuffer();
  if (!g_vertexBuffer) {
    console.log("Failed to create vertex buffer");
    return -1;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, g_vertexBuffer);
  // Write date into the buffer object
  //gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
  //gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  /*var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }*/
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);
}

function drawTriangle3D(vertices) {
  /*var vertices = new Float32Array([
    0, 0.5,   -0.5, -0.5,   0.5, -0.5
  ]);*/

  if (g_vertexBuffer == null) {
    initTriangle3D();
  }
  var n = 3; // The number of vertices

  /*// Create a buffer object
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
  //gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);*/

  /*var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }*/
  // Assign the buffer object to a_Position variable
  /*gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);*/


  gl.drawArrays(gl.TRIANGLES, 0, n);
  return n;
}

function drawTriangle3DUV(vertices, uv) {
  var n = vertices.length/3; // The number of vertices

  // Create a buffer object for positions
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);

  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);


  // Create buffer object for UV
  var uvBuffer = gl.createBuffer();
  if (!uvBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }
  
  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);

  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.DYNAMIC_DRAW);

  // Assign the buffer object to a_UV variable
  gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_UV variable
  gl.enableVertexAttribArray(a_UV);


  // Draw the triangle
  gl.drawArrays(gl.TRIANGLES, 0, n);

  g_vertexBuffer = null;
  return n;
}



function drawMultiTrianglesFast(arr_input) {
  var stride = 5 * Float32Array.BYTES_PER_ELEMENT; // 5 floats (3+2) per vertex = 20 bytes
  var pos_offset = 0;
  var uv_offset = 3 * Float32Array.BYTES_PER_ELEMENT; // 3 floats = 12 bytes

  var n = arr_input.length/5; // The number of vertices

  /*// Create a buffer object for positions
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }*/

  var allBuffer = gl.createBuffer();
  if (!allBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }
  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, allBuffer);

  // Write data into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr_input), gl.DYNAMIC_DRAW);

  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, stride, pos_offset);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);

  // Assign the buffer object to a_UV variable
  gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, stride, uv_offset);

  // Enable the assignment to a_UV variable
  gl.enableVertexAttribArray(a_UV);


  // Draw the triangle
  gl.drawArrays(gl.TRIANGLES, 0, n);
  g_vertexBuffer = null;
  return n;
}

function drawMultiTrianglesFastNormals(arr_input) {
  var numVars = 8; // vertex coords = 3, UV = 2, normals = 3, 8 floats per vertex
  var stride = numVars * Float32Array.BYTES_PER_ELEMENT; // 8 floats (3+2+3) per vertex = 32 bytes
  var pos_offset = 0;
  var uv_offset = 3 * Float32Array.BYTES_PER_ELEMENT; // 3 floats = 12 bytes
  var normal_offset = (3 + 2) * Float32Array.BYTES_PER_ELEMENT; // 3 + 2 floats = 20 bytes

  var n = arr_input.length/numVars; // The number of vertices

  //console.log(stride, pos_offset, uv_offset, normal_offset, n);
  //console.log("drawMultiTrianglesFastNormals: arr_input is " + arr_input);
  //console.log("drawMultiTrianglesFastNormals: arr_input.length is " + arr_input.length);

  /*// Create a buffer object for positions
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }*/

  var allBuffer = gl.createBuffer();
  if (!allBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }
  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, allBuffer);

  // Write data into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr_input), gl.DYNAMIC_DRAW);

  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, stride, pos_offset);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);

  // Assign the buffer object to a_UV variable
  gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, stride, uv_offset);

  // Enable the assignment to a_UV variable
  gl.enableVertexAttribArray(a_UV);

  // Assign the buffer object to a_Normal variable
  gl.vertexAttribPointer(a_Normal, 3, gl.FLOAT, false, stride, normal_offset);

  // Enable the assignment to a_UV variable
  gl.enableVertexAttribArray(a_Normal);

var attributeSize = gl.getVertexAttrib(a_Normal, gl.VERTEX_ATTRIB_ARRAY_SIZE);
//console.log('a_Normal attribute size:', attributeSize);

  // Draw the triangle
  gl.drawArrays(gl.TRIANGLES, 0, n);

  
  return n;
}