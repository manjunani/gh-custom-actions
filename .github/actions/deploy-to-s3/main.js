const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
function run() {
  const bucketName = core.getInput('bucket-name', { required: true });
  const bucketRegion = core.getInput('bucketRegion', { required: true });
  const destinationFolder = core.getInput('destination-folder', {
    required: true,
  });
  core.notice(
    `These are the Bucket Details Bucket Name is ${bucketName} in the region ${bucketRegion} and the destination folder would be ${destinationFolder} }`
  );

  //   Uplaod Files
  //   const s3Uri = `s3://${bucketName}`;
  //   exec.exec(
  //     `aws s3 sync ${destinationFolder} ${s3Uri} --region ${bucketRegion}`
  //   );
  const wesbiteUrl = `http://${bucketName}.s3-website-${bucketRegion}.amazonaws.com`;
  core.setOutput('website-url', wesbiteUrl);
}

run();
