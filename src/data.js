
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
          "p1": {x: 10, y: 75},
          "p2": {x: 20, y: 65},
          "p3": {x: 25, y: 60},
          "p4": {x: 30, y: 65},
          "p5": {x: 5 * 8, y: 75},
          "p6": {x: 50, y: 60},
          "p7": {x: 60, y: 35},
          "p8": {x: 50, y: 15},
          "p9": {x: 25, y: 0},
          "p10": {x: 0, y: 35},
          "p11": {x: 3, y: 15},
          "p12": {x: 35, y: 25},
          "p13": {x: 0, y: 35},
          "p14": {x: 20, y: 75},
          "p15": {x: 20, y: 60},
          "p16": {x: 30, y: 60},
          "p17": {x: 30, y: 75},
          "p18": {x: 50, y: 75},
          "p19": {x: 60, y: 60},
          "p20": {x: 60, y: 15},          
          "p21": {x: 50, y: 0},
          "p22": {x: 0, y: 0},
          "p23": {x: 0, y: 75},
          "p24": {x: 35, y: 15},
          "p25": {x: 35, y: 35},
        },
        beziers: [
          {
            start: "p1",
            end: "p2",
            tangent: "p14"
          }, // 1 to 2
          {
            start: "p2",
            end: "p3",
            tangent: "p15"
          }, // 2 to 3
          {
            start: "p3",
            end: "p4",
            tangent: "p16"
          }, // 3 to 4
          {
            start: "p5",
            end: "p4",
            tangent: "p17"
          }, // 4 to 5
          {
            start: "p5",
            end: "p6",
            tangent: "p18"
          }, // 5 to 6
          {
            start: "p7",
            end: "p6",
            tangent: "p19"
          }, // 6 to 7
          {
            start: "p7",
            end: "p8",
            tangent: "p20" 
          }, // 7 to 8
          {
            start: "p9",
            end: "p8",
            tangent: "p21"
          }, // 8 to 9
          {
            start: "p9",
            end: "p10",
            tangent: "p22"
          }, // 9 to 10
          {
            start: "p1",
            end: "p10",
            tangent: "p23"
          }, // 10 to 1
          {
            start: "p11",
            end: "p12",
            tangent: "p24"
          }, // u1 to u2
          {
            start: "p13",
            end: "p12",
            tangent: "p25"
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
          "p1":  {x: 2 * 8 + 1, y: 2 * 0 + 25},
          "p2": {x: 2 * 0 + 1, y: 2 * 0 + 25},
          "p3":  {x: 2 * 0 + 1, y: 2 * 3 + 25},
          "p4": {x: 2 * 0 + 1, y: 2 * 4 + 25},
          "p5":  {x: 2 * 2 + 1, y: 2 * 5 + 25},
          "p6": {x: 2 * 4 + 1, y: 2 * 6 + 25},
          "p7":  {x: 2 * 6 + 1, y: 2 * 7 + 25},
          "p8": {x: 2 * 8 + 1, y: 2 * 8 + 25},
          "p9":  {x: 2 * 8 + 1, y: 2 * 9 + 25},
          "p10": {x: 2 * 8 + 1, y: 2 * 12 + 25},
          "p11":  {x: 2 * 0 + 1, y: 2 * 12 + 25},
          "p12":  {x: 2 * 0 + 20, y: 2 * 0 + 25},
          "p13": {x: 2 * -1 + 20, y: 2 * 12 + 25},
          "p14":  {x: 2 * 4 + 20, y: 2 * 12 + 25},
          "p15": {x: 2 * 9 + 20, y: 2 * 12 + 25},
          "p16":  {x: 2 * 8 + 20, y: 2 * 0 + 25},
          "p17":  {x: 2 * 8 + 41, y: 2 * 0 + 25},
          "p18": {x: 2 * 0 + 41, y: 2 * 0 + 25},
          "p19":  {x: 2 * 0 + 41, y: 2 * 3 + 25},
          "p20": {x: 2 * 0 + 41, y: 2 * 4 + 25},
          "p21":  {x: 2 * 2 + 41, y: 2 * 5 + 25},
          "p22": {x: 2 * 4 + 41, y: 2 * 6 + 25},
          "p23":  {x: 2 * 6 + 41, y: 2 * 7 + 25},
          "p24": {x: 2 * 8 + 41, y: 2 * 8 + 25},
          "p25":  {x: 2 * 8 + 41, y: 2 * 9 + 25},
          "p26": {x: 2 * 8 + 41, y: 2 * 12 + 25},
          "p27":  {x: 2 * 0 + 41, y: 2 * 12 + 25},
        },
        beziers: [
          {
            start: "p1",
            end: "p3",
            tangent: "p2"
          }, // 1 to 2
          {
            start: "p3",
            end: "p5",
            tangent: "p4"
          }, // 2 to 3
          {
            start: "p5",
            end: "p7",
            tangent: "p6"
          }, // 3 to 4
          {
            start: "p9",
            end: "p7",
            tangent: "p8"
          }, // 4 to 5
          {
            start: "p9",
            end: "p11",
            tangent: "p10"
          }, // 5 to 6
          {
            start: "p19",
            end: "p17",
            tangent: "p18"
          }, // 6 to 7
          {
            start: "p19",
            end: "p21",
            tangent: "p20"
          }, // 7 to 8
          {
            start: "p23",
            end: "p21",
            tangent: "p22"
          }, // 8 to 9
          {
            start: "p23",
            end: "p25",
            tangent: "p24"
          }, // 9 to 10
          {
            start: "p27",
            end: "p25",
            tangent: "p26"
          }, // 10 to 1
          {
            start: "p12",
            end: "p14",
            tangent: "p13"
          }, // u1 to u2
          {
            start: "p16",
            end: "p14",
            tangent: "p15"
          }, // u2 to u1
        ],
      },
    ]
  };