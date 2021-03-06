export declare type Tuple<T> = [T, T];
export declare type Triple<T> = [T, T, T];
export declare type StringTuple = Tuple<string>;
export declare type StringTriple = Triple<string>;
export declare type NumberTuple = Tuple<number>;
export declare const partNames: string[];
export declare const symPartNames: string[];
export declare const NUM_KEYPOINTS: number;
export interface NumberDict {
    [jointName: string]: number;
}
export declare const partIds: NumberDict;
export declare const symPartIds: NumberDict;
export declare const poseChain: StringTuple[];
export declare const connectedPartIndices: number[][];
export declare const symPartIndices: number[][];
export declare const angleIndices: number[][];
export declare const partChannels: string[];
