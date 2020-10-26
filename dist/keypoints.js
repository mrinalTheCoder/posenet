"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partNames = [
    'nose', 'leftEye', 'rightEye', 'leftEar', 'rightEar', 'leftShoulder',
    'rightShoulder', 'leftElbow', 'rightElbow', 'leftWrist', 'rightWrist',
    'leftHip', 'rightHip', 'leftKnee', 'rightKnee', 'leftAnkle', 'rightAnkle'
];
exports.symPartNames = [
    'nose', 'leftEye', 'rightEye', 'leftEar', 'rightEar', 'rightShoulder', 'rightElbow',
    'rightWrist', 'rightHip', 'rightKnee', 'rightAnkle'
];
exports.NUM_KEYPOINTS = exports.partNames.length;
exports.partIds = exports.partNames.reduce(function (result, jointName, i) {
    result[jointName] = i;
    return result;
}, {});
exports.symPartIds = exports.symPartNames.reduce(function (result, jointName, i) {
    result[jointName] = i;
    return result;
}, {});
var connectedPartNames = [
    ['leftHip', 'leftShoulder'], ['leftElbow', 'leftShoulder'],
    ['leftElbow', 'leftWrist'], ['leftHip', 'leftKnee'],
    ['leftKnee', 'leftAnkle'], ['rightHip', 'rightShoulder'],
    ['rightElbow', 'rightShoulder'], ['rightElbow', 'rightWrist'],
    ['rightHip', 'rightKnee'], ['rightKnee', 'rightAnkle'],
    ['leftShoulder', 'rightShoulder'], ['leftHip', 'rightHip']
];
var connectedSymPartNames = [
    ['rightWrist', 'rightElbow'], ['rightElbow', 'rightShoulder'],
    ['rightShoulder', 'rightHip'], ['rightHip', 'rightKnee'],
    ['rightKnee', 'rightAnkle']
];
var jointIndentifiers = [
    ['leftWrist', 'leftElbow', 'leftShoulder'],
    ['rightWrist', 'rightElbow', 'rightShoulder'],
    ['leftElbow', 'leftShoulder', 'leftHip'],
    ['rightElbow', 'rightShoulder', 'rightHip'],
    ['leftShoulder', 'leftHip', 'leftKnee'],
    ['rightShoulder', 'rightHip', 'rightKnee'],
    ['leftHip', 'leftKnee', 'leftAnkle'],
    ['rightHip', 'rightKnee', 'rightAnkle']
];
exports.poseChain = [
    ['nose', 'leftEye'], ['leftEye', 'leftEar'], ['nose', 'rightEye'],
    ['rightEye', 'rightEar'], ['nose', 'leftShoulder'],
    ['leftShoulder', 'leftElbow'], ['leftElbow', 'leftWrist'],
    ['leftShoulder', 'leftHip'], ['leftHip', 'leftKnee'],
    ['leftKnee', 'leftAnkle'], ['nose', 'rightShoulder'],
    ['rightShoulder', 'rightElbow'], ['rightElbow', 'rightWrist'],
    ['rightShoulder', 'rightHip'], ['rightHip', 'rightKnee'],
    ['rightKnee', 'rightAnkle']
];
exports.connectedPartIndices = connectedPartNames.map(function (_a) {
    var jointNameA = _a[0], jointNameB = _a[1];
    return ([exports.partIds[jointNameA], exports.partIds[jointNameB]]);
});
exports.symPartIndices = connectedSymPartNames.map(function (_a) {
    var jointNameA = _a[0], jointNameB = _a[1];
    return ([exports.partIds[jointNameA], exports.partIds[jointNameB]]);
});
exports.angleIndices = jointIndentifiers.map(function (_a) {
    var jointA = _a[0], jointB = _a[1], jointC = _a[2];
    return ([exports.partIds[jointA], exports.partIds[jointB], exports.partIds[jointC]]);
});
exports.partChannels = [
    'left_face',
    'right_face',
    'right_upper_leg_front',
    'right_lower_leg_back',
    'right_upper_leg_back',
    'left_lower_leg_front',
    'left_upper_leg_front',
    'left_upper_leg_back',
    'left_lower_leg_back',
    'right_feet',
    'right_lower_leg_front',
    'left_feet',
    'torso_front',
    'torso_back',
    'right_upper_arm_front',
    'right_upper_arm_back',
    'right_lower_arm_back',
    'left_lower_arm_front',
    'left_upper_arm_front',
    'left_upper_arm_back',
    'left_lower_arm_back',
    'right_hand',
    'right_lower_arm_front',
    'left_hand'
];
//# sourceMappingURL=keypoints.js.map