export const limbicSystemButtonPositions = {
  1: [0.04, 0.16, 0.5],
  2: [0.54, 0.1, 0.4],
  3: [0.37, 0.4, 0.61],
  4: [0.25, 0.21, 0.53],
  5: [0.26, 0.06, 0.53],
} as const;

export const limbicSystemCameraOffsets = {
  1: { x: 0, y: -0.1, z: 0.6 },
  2: { x: 0.5, y: -0.4, z: 1},
  3: { x: 0.6, y: 0.6, z: 0.6 },
  4: { x: 0, y: 0, z: 0.6 },
  5: { x: -0.05, y: -0.2, z: 0.6 },
} as const;

export const brainLobsButtonPositions = {
  1: [-0.1, 0.4, 0],
  2: [-0.5, 0.6, 0.2],
  3: [0.3, 0.6, 0.35],
  4: [-0.01, 0.23, 0.42],
  5: [0.54, 0.23, 0.14],
  6: [0.04, 0.573, 0.212],
  7: [-0.11, 0.38, 0.264],
  8: [0.4, 0.42, 0.09],
  9: [-0.1, 0.53, 0],
  10: [-0.08, 0.604, 0],
} as const;

export const brainLobsCameraOffsets = {
  1: { x: -0.8, y: 0, z: -2.1 },
  2: { x: -0.4, y: 0.6, z: 0.3 },
  3: { x: 0.6, y: 0.6, z: 0.6 },
  4: { x: 0, y: 0, z: 0.8 },
  5: { x: 0.8, y: 0, z: 0.3 },
  6: { x: 0, y: 0.3, z: 0.17 },
  7: { x: -0.4, y: 0.25, z: -0.2 },
  8: { x: 0.5, y: 0.3, z: -0.2 },
  9: { x: 0, y: 0.3, z: -1.5 },
  10: { x: 0, y: 0.6, z: -1.5 },
} as const;

export const neuronButtonPositions = {
  1: [1.28, -0.47, 0.29],
  2: [0.445, -0.2, 0.405],
  3: [-0.28, -0.2, 0.75],
  4: [0.03, -0.22, 0.6],
  5: [-0.47, -0.14, 0.76],
  6: [-0.57, 0.1, 0.8],
  7: [-0.51, 0.39, 0.46],
  8: [-0.63, 0.01, 1],
} as const;

export const neuronCameraOffsets = {
  1: { x: 1.5, y: -0.1, z: 0.6 },
  2: { x: 0.5, y: -0.4, z: 0.6 },
  3: { x: 0.6, y: -0.5, z: 0.6 },
  4: { x: 0.4, y: -0.5, z: 0.8 },
  5: { x: -0.05, y: -0.2, z: 0.6 },
  6: { x: 0, y: 0.6, z: 1.5 },
  7: { x: 1.5, y: 0, z: 0.6 },
  8: { x: 0, y: 0, z: 0.8 },
} as const;

export const visualPathwayButtonPositions = {
  1: [0.1, 0.2, 1.3],
  2: [0.14, -0.02, 0.4],
  3: [0.1, -0.04, 0.28],
  4: [-0.009, -0.007193999737501087, 0.1],
  5: [-0.055, 0.05, 0.05],
  6: [-0.04, 0.07, -0.068],
  7: [-0.12, 0.04, -0.09],
  8: [-0.1, 0.07, -0.35],
} as const;

export const visualPathwayCameraOffsets = {
  1: { x: 0, y: -0.1, z: 0.9 },
  2: { x: 0.5, y: -0.4, z: 0.6 },
  3: { x: 0.2, y: -0.1, z: 0.1 },
  4: { x: 0, y: -0.2, z: 0.1 },
  5: { x: -0.05, y: 0, z: 0.2 },
  6: { x: 0, y: -0.4, z: 0.1 },
  7: { x: -0.5, y: 0.2, z: 0.05 },
  8: { x: -0.5, y: 0.2, z: -0.5 },
} as const;

export const ventricularSystemButtonPositions = {
  1: [0.138, 0.236, 0.343],
  2: [-0.173, 0.237, 0.431],
  3: [-0.001, 0.058, -0.008],
  4: [0.001, -0.263, -0.207],
  5: [-0.003, -0.658, -0.278],
  6:  [-0.002, -1.190, -0.5],
  7: [-0.067, 0.157, 0.121],
  8: [0.065, 0.155, 0.116],
} as const;

export const ventricularSystemCameraOffsets = {
  1: { x: 2, y: -0.1, z: 0.9 },
  2: { x: -2, y: -0.1, z: 0.9 },
  3: { x: 0.8, y: -0.1, z: 0.6 },
  4: {  x: 1, y: -0.3, z: 1.28 },
  5: {  x: 0, y: -0.5, z:2.5},
  6: {  x: -1, y: -1.2, z: 0.2},
  7: { x: -0.5, y: 0.2, z: 0.05 },
  8: { x: -0.5, y: 0.2, z: -0.5 },
} as const;

export const cranialNerveNucleiButtonPositions = {
  1: [0.101, 0.089, 0.170],
  2:  [0.124, -0.138, 0.115],
  3: [0.052, 0.456, 0.126],
  4:  [0.032, 0.395, 0.132],
  5:  [0.151, 0.184, -0.039],
  6:  [0.080, -0.132, -0.000],
  7:   [0.062, -0.610, 0.203],
  8:  [0.207, -0.021, -0.052],
  9: [0.153, 0.044, 0.058],
  10: [0.057, -0.260, 0.135],
  11: [0.045, -0.155, 0.055],
  12: [0.009, -0.253, 0.179],
} as const;

export const cranialNerveNucleiCameraOffsets = {
  1: { x: 0, y: -0.1, z: 0.9 },
  2: { x: 0.5, y: -0.4, z: 0.6 },
  3: { x: 0.2, y: -0.1, z: 0.1 },
  4: { x: 0, y: -0.2, z: 0.1 },
  5: { x: -0.05, y: 0, z: 0.2 },
  6: { x: 0, y: -0.4, z: 0.1 },
  7: { x: -0.5, y: 0.2, z: 0.05 },
  8: { x: -0.5, y: 0.2, z: -0.5 },
} as const;

export const brodmannAreasButtonPositions = {
  1: [-0.520, 0.441, 0.466],
  2:  [0.468, 0.630, 0.497],
  3:[0.094, -0.370, 0.012],
  4:  [0.091, -0.414, -0.023],
  5:  [0.508, 0.654, -0.005],
  6:  [-0.459, 0.618, -0.120],
  7:   [-0.238, 0.198, 0.421],
  8:  [0.268, 0.008, 0.172],
  9: [0.027, -0.105, 0.099],
  10:[0.338, -0.100, 0.059],
  11: [0.111, -0.171, -0.031],
  12:  [0.126, -0.207, 0.081],
  13: [0.333, -0.295, -0.243],
  14:[-0.004, -0.354, -0.343],
} as const;

export const brodmannAreasCameraOffsets = {
  1: { x:-1, y: 0.1, z: 0.5 },
  2: { x: 1, y: 1, z: 0.6 },
  3: { x: 0.9, y: -0.9, z: 0.9 },
  4: { x: 0.9, y: -0.9, z: -0.7 },
  5: { x: 0.9, y: 0.6, z: -0.4 },
  6: { x: -0.9, y: 0.6, z: -0.4 },
  7: { x: 1, y: -0.1, z: 1.6 },
  8: { x: 0.1, y: 0.1, z: 0.5},
  9:  { x: 0.1, y: -0.1, z: 0.5},
  10: { x: 0.5, y: -0.2, z: 0.4 },
  11:  { x: 0.1, y: -0.1, z: -0.7},
  12: { x: 0.8, y: -0.2, z: 0.2 },
  13:  { x: 0.1, y: -0.3, z: -0.7},
  14:  { x: 0.8, y: -0.3, z: -1},
} as const;