/**
 * もともと各種メソッドはnamespace内に入れていたんだけど、
 * 'namespace' and 'module' are disallowed
 * って言われたので脳死でexportした
 */
export enum YamlType {
    Proposal,
    Speaker,
    TimetableDay1,
    TimetableDay2,
    TimetableDay3,
    Unknown
}

export function directoryName(type: YamlType): string {
    switch (type) {
        case YamlType.Proposal:
            return "proposals/";
        case YamlType.Speaker:
            return "speakers/";
        case YamlType.TimetableDay1:
            return "timetables/day1/";
        case YamlType.TimetableDay2:
            return "timetables/day2/";
        case YamlType.TimetableDay3:
            return "timetables/day3/";
        default:
            throw Error("illegal args")
    }
}

export function srcFilesDirPath(type: YamlType): string {
    return directoryName(type) + "src/";
}

export function distResultPath(type: YamlType): string {
    return directoryName(type) + "dist/res.json";
}
/**
 * @param name gs://bucket/name の name部分 hookのObjectからとれるやつをそのまま入れる感じ
 */
export function selectYamlType(name: string): YamlType {

    if(!name.endsWith(".yaml")){
        return YamlType.Unknown;
    }

    if (name.startsWith(srcFilesDirPath(YamlType.Proposal))) {
        return YamlType.Proposal;
    }
    if (name.startsWith(srcFilesDirPath(YamlType.Speaker))) {
        return YamlType.Speaker;
    }
    if (name.startsWith(srcFilesDirPath(YamlType.TimetableDay1))) {
        return YamlType.TimetableDay1;
    }
    if (name.startsWith(srcFilesDirPath(YamlType.TimetableDay2))) {
        return YamlType.TimetableDay2;
    }
    if (name.startsWith(srcFilesDirPath(YamlType.TimetableDay3))) {
        return YamlType.TimetableDay3;
    }

    return YamlType.Unknown;
}
