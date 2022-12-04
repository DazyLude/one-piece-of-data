
const exampleRenderGroup = {
  id: "example group",
  style: {
    scale: 5,
    nodes: {
      color: "#0ff",
      size: 40
    },
    edges: {
      color: "#f0f",
      size: 10,
      markerEnd: "dot"
    },
    beziers: {
      color: "#ff0",
      size: 5,
      markerStart: "dot"
    },
  },
  points: {
    "p1" : {x: 0, y: 0},
    "p2" : {x: 10, y: 10},
    "p3" : {x: 0, y: 20},
  },
  nodes: [
    "p1",
    "p2",
    "p3",
  ],
  edges: [
    {start: "p1", end: "p2"},
    {start: "p2", end: "p3"},
  ],
  beziers: [
    {start: "p1", end: "p3", tangent: "p2"},
    {start: "p1", end: "p2", tangent: "p3"},
  ]
}

export const exampleInputObject = {
  meta: {
    background: {
      color: "#000",
      opacity: 0.5,
    },
    markers: [
      {
        id: "dot",
        size: 1,
        marker: <circle cx="1" cy="1" r="1" fill="#fff" />,
      },
    ],
  },
  renderGroups: [
    exampleRenderGroup,
  ],
}

export const inputObject = {
    meta: {
      background: {
        color: "#000",
        opacity: 1,
      },
      markers: [
        {
          id: "dot",
          size: 1,
          marker: <circle cx="1" cy="1" r="1" fill="#fff" />,
        },
      ],
    },
    renderGroups: [
      {
        transform: "translate(100, 100)",
        style: {
          scale: 10,
          beziers: {
            markerEnd: "dot",
            markerStart: "dot",
            color: "#fff",
            size: 5,
          }
        },
        id: "start",
        points: {
          "p1a": {x: 10, y: 75},
          "t12": {x: 20, y: 75},
          "p2": {x: 20, y: 65},
          "t23": {x: 20, y: 60},
          "p3": {x: 25, y: 60},
          "t34": {x: 30, y: 60},
          "p4": {x: 30, y: 65},
          "t45": {x: 30, y: 75},
          "p5": {x: 5 * 8, y: 75},
          "t56": {x: 50, y: 75},
          "p6a": {x: 50, y: 60},

          "p6b": {x: 50, y: 60},
          "t67": {x: 60, y: 60},
          "p7": {x: 60, y: 35},
          "t78": {x: 60, y: 15},          
          "p8": {x: 50, y: 15},
          "t89": {x: 50, y: 0},
          "p9": {x: 25, y: 0},
          "t910": {x: 0, y: 0},
          "p10": {x: 0, y: 35},
          "t101": {x: 0, y: 75},
          "p1b": {x: 10, y: 75},


          "pu1": {x: 3, y: 15},
          "pu2": {x: 35, y: 25},
          "pu3": {x: 0, y: 35},
          "tu1": {x: 35, y: 15},
          "tu2": {x: 35, y: 35},
        },
        beziers: [
          {
            start: "p1a",
            end: "p2",
            tangent: "t12"
          }, // 1 to 2
          {
            start: "p2",
            end: "p3",
            tangent: "t23"
          }, // 2 to 3
          {
            start: "p3",
            end: "p4",
            tangent: "t34"
          }, // 3 to 4
          {
            start: "p5",
            end: "p4",
            tangent: "t45"
          }, // 4 to 5
          {
            start: "p5",
            end: "p6a",
            tangent: "t56"
          }, // 5 to 6
          {
            start: "p7",
            end: "p6b",
            tangent: "t67"
          }, // 6 to 7
          {
            start: "p7",
            end: "p8",
            tangent: "t78" 
          }, // 7 to 8
          {
            start: "p9",
            end: "p8",
            tangent: "t89"
          }, // 8 to 9
          {
            start: "p9",
            end: "p10",
            tangent: "t910"
          }, // 9 to 10
          {
            start: "p1b",
            end: "p10",
            tangent: "t101"
          }, // 10 to 1
          {
            start: "pu1",
            end: "pu2",
            tangent: "tu1"
          }, // u1 to u2
          {
            start: "pu3",
            end: "pu2",
            tangent: "tu2"
          }, // u2 to u1
        ],
      },

      {
        transform: "translate(100, 700)",
        style: {
          scale: 10,
          beziers: {
            markerEnd: "dot",
            markerStart: "dot",
            color: "#fff",
            size: 5,
          }
        },
        id: "end",
        points: {
          "p1a":  {x: 2 * 8 + 1, y: 2 * 0 + 25},
          "t12": {x: 2 * 0 + 1, y: 2 * 0 + 25},
          "p2":  {x: 2 * 0 + 1, y: 2 * 3 + 25},
          "t23": {x: 2 * 0 + 1, y: 2 * 4 + 25},
          "p3":  {x: 2 * 2 + 1, y: 2 * 5 + 25},
          "t34": {x: 2 * 4 + 1, y: 2 * 6 + 25},
          "p4":  {x: 2 * 6 + 1, y: 2 * 7 + 25},
          "t45": {x: 2 * 8 + 1, y: 2 * 8 + 25},
          "p5":  {x: 2 * 8 + 1, y: 2 * 9 + 25},
          "t56": {x: 2 * 8 + 1, y: 2 * 12 + 25},
          "p6a":  {x: 2 * 0 + 1, y: 2 * 12 + 25},

          "p6b":  {x: 2 * 8 + 41, y: 2 * 0 + 25},
          "t67": {x: 2 * 0 + 41, y: 2 * 0 + 25},
          "p7":  {x: 2 * 0 + 41, y: 2 * 3 + 25},
          "t78": {x: 2 * 0 + 41, y: 2 * 4 + 25},
          "p8":  {x: 2 * 2 + 41, y: 2 * 5 + 25},
          "t89": {x: 2 * 4 + 41, y: 2 * 6 + 25},
          "p9":  {x: 2 * 6 + 41, y: 2 * 7 + 25},
          "t910": {x: 2 * 8 + 41, y: 2 * 8 + 25},
          "p10":  {x: 2 * 8 + 41, y: 2 * 9 + 25},
          "t101": {x: 2 * 8 + 41, y: 2 * 12 + 25},
          "p1b":  {x: 2 * 0 + 41, y: 2 * 12 + 25},

          "pu1":  {x: 2 * 0 + 20, y: 2 * 0 + 25},
          "tu1": {x: 2 * -1 + 20, y: 2 * 12 + 25},
          "pu2":  {x: 2 * 4 + 20, y: 2 * 12 + 25},
          "tu2": {x: 2 * 9 + 20, y: 2 * 12 + 25},
          "pu3":  {x: 2 * 8 + 20, y: 2 * 0 + 25},
        },
        beziers: [
          {
            start: "p1a",
            end: "p2",
            tangent: "t12"
          }, // 1 to 2
          {
            start: "p2",
            end: "p3",
            tangent: "t23"
          }, // 2 to 3
          {
            start: "p3",
            end: "p4",
            tangent: "t34"
          }, // 3 to 4
          {
            start: "p5",
            end: "p4",
            tangent: "t45"
          }, // 4 to 5
          {
            start: "p5",
            end: "p6a",
            tangent: "t56"
          }, // 5 to 6
          {
            start: "p7",
            end: "p6b",
            tangent: "t67"
          }, // 6 to 7
          {
            start: "p7",
            end: "p8",
            tangent: "t78"
          }, // 7 to 8
          {
            start: "p9",
            end: "p8",
            tangent: "t89"
          }, // 8 to 9
          {
            start: "p9",
            end: "p10",
            tangent: "t910"
          }, // 9 to 10
          {
            start: "p1b",
            end: "p10",
            tangent: "t101"
          }, // 10 to 1
          {
            start: "pu1",
            end: "pu2",
            tangent: "tu1"
          }, // u1 to u2
          {
            start: "pu2",
            end: "pu3",
            tangent: "tu2"
          }, // u2 to u1
        ],
      },
    ]
  };