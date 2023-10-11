import * as chai from 'chai';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml'

describe('実際に読み込みを失敗したFile', () => {
  const testFileName = 'fail_load_speaker_1.yaml';
  it(testFileName, () => {
    // indentがずれていたパターン
    const content = fs.readFileSync(path.resolve(path.join('test', testFileName)), 'utf8');
    chai.expect(() => yaml.safeLoad(content)).throw()
  });
});
