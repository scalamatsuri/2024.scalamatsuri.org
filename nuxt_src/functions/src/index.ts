// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";
// import * as yaml from "js-yaml";
// import { distResultPath, selectYamlType, srcFilesDirPath, YamlType } from "./yaml_types";

// admin.initializeApp();

// // // Start writing Firebase Functions
// // // https://firebase.google.com/docs/functions/typescript
// //

// /*
// object sample
// {
//   bucket: 'coherent-span-230012.appspot.com',
//   contentDisposition: 'inline; filename*=utf-8\'\'candidate_success.yaml',
//   contentType: 'application/octet-stream',
//   crc32c: '21CPlQ==',
//   etag: 'CO/v46uT9uMCEAE=',
//   generation: '1565366152656879',
//   id: 'coherent-span-230012.appspot.com/candidates/src/candidate_success.yaml/1565366152656879',
//   kind: 'storage#object',
//   md5Hash: 'KkjqLTtHnHt24IKUAunYXg==',
//   mediaLink: 'https://www.googleapis.com/download/storage/v1/b/coherent-span-230012.appspot.com/o/candidates%2Fsrc%2Fcandidate_success.yaml?generation=1565366152656879&alt=media',
//   metadata: {
//     firebaseStorageDownloadTokens: 'a8dd4663-f3bf-4bd5-9f14-4eba59bb2426'
//   },
//   metageneration: '1',
//   name: 'candidates/src/candidate_success.yaml',
//   selfLink: 'https://www.googleapis.com/storage/v1/b/coherent-span-230012.appspot.com/o/candidates%2Fsrc%2Fcandidate_success.yaml',
//   size: '2969',
//   storageClass: 'STANDARD',
//   timeCreated: '2019-08-09T15:55:52.656Z',
//   timeStorageClassUpdated: '2019-08-09T15:55:52.656Z',
//   updated: '2019-08-09T15:55:52.656Z'
// }
//  */
// export const storageHook = functions.storage.object().onFinalize(async (object, context) => {
//   console.info("check object : %O", object);

//   if (object.name === undefined) {
//     console.warn("undefined object.name\n%O", object);
//     return Promise.resolve();
//   }
//   const type = selectYamlType(object.name);
//   if (type === YamlType.Unknown) {
//     return Promise.resolve();
//   }
//   return createResultJson(type);
// });

// async function createResultJson(yamlType: YamlType) {
//   const getFilesResponse = await admin
//     .storage()
//     .bucket()
//     .getFiles({
//       directory: srcFilesDirPath(yamlType),
//     });

//   const distFilePath = distResultPath(yamlType);
//   const distFile = admin.storage().bucket().file(distFilePath);
//   // 常にtrue返してね…？？？
//   const exist = await distFile.exists();
//   if (exist) {
//     console.info("delete old file");
//     await admin
//       .storage()
//       .bucket()
//       .file(distFilePath)
//       .delete()
//       .catch((e) => {
//         console.warn("delete throw error %O", e);
//       });
//   }
//   const writable = admin.storage().bucket().file(distFilePath).createWriteStream();

//   // TODO この辺切り出してテスト書きたいんだけど、googleのFile型がexportされていない… どうするのが良いのか…
//   console.info("start writing");
//   writable.write("[");
//   await getFilesResponse[0]
//     .filter((file) => {
//       return file.name.endsWith(".yaml");
//     })
//     .reduce(async (acc, file) => {
//       const prefix = await acc;
//       console.log("check read file name : %s", file.name);
//       const fileBuffer = await file.download();
//       const obj = yaml.safeLoad(fileBuffer[0].toString());
//       writable.write(prefix + JSON.stringify(obj));
//       return Promise.resolve(",");
//     }, Promise.resolve(""));
//   writable.write("]");
//   writable.end();
//   console.info("finish writing");
// }
