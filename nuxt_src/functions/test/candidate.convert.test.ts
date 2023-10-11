import * as chai from 'chai';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml'
import {CandidateModel, validate} from "../src/candidate";

// Unitテストにしては粒度でかいだろ！は無視
// TODO: なにか良いJson（というかYaml）のチェック方法をだれか
describe('応募セッションyamlをParseする上で', () => {

    describe('期待通りのファイル', () => {
        it('Parseに成功する', () => {
            const content = fs.readFileSync(path.resolve(path.join('test', 'candidate_success.yaml')), 'utf8');

            let obj: CandidateModel = yaml.safeLoad(content);
            chai.expect(() => validate(obj)).not.throw()
        });
    });

    describe('ファイルにおかしな点があるケース', () => {
        it('idがない', () => {
            const content = fs.readFileSync(path.resolve(path.join('test', 'candidate_failure_no_id.yaml')), 'utf8');
            let obj: CandidateModel = yaml.safeLoad(content);
            chai.expect(() => validate(obj)).throw()
        });
    });

    describe('そもそもYamlじゃないケース', () => {
        it('jsonファイルだ', () => {
            const content = fs.readFileSync(path.resolve(path.join('test', 'candidate_failure_no_yaml.json')), 'utf8');
            let obj: CandidateModel = yaml.safeLoad(content);
            chai.expect(() => validate(obj)).throw()
        });
    });
});
