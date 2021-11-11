const { utils } = require('umi');
const { join } = require('path');
const exec = require('./utils/exec');
const getPackages = require('./utils/getPackages');
const isNextVersion = require('./utils/isNextVersion');

const { yParser, execa, chalk } = utils;
const cwd = process.cwd();
const args = yParser(process.argv);
const lernaCli = require.resolve('lerna/cli');

function printErrorAndExit(message) {
  console.error(chalk.red(message));
  process.exit(1);
}

function logStep(name) {
  console.log(`${chalk.gray('>> Release:')} ${chalk.magenta.bold(name)}`);
}

function packageExists({ name, version }) {
  const { stdout } = execa.sync('npm', ['info', `${name}@${version}`]);
  return stdout.length > 0;
}

async function release() {
  // Check git status
  // if (!args.skipGitStatusCheck) {
  //   const gitStatus = execa.sync('git', ['status', '--porcelain']).stdout;
  //   if (gitStatus.length) {
  //     printErrorAndExit(`Your git status is not clean. Aborting.`);
  //   }
  // } else {
  //   logStep('git status check is skipped, since --skip-git-status-check is supplied');
  // }

  // Check npm registry
  const userRegistry = 'https://npm-registry.sensetime.com';

  // Publish
  // Umi must be the latest.
  const pkgs = getPackages();
  logStep(`publish packages: ${chalk.blue(pkgs.join(', '))}`);

  pkgs.forEach((pkg, index) => {
    const pkgPath = join(cwd, 'packages', pkg.replace('pro-', ''));
    const { name, version } = require(join(pkgPath, 'package.json'));
    const isNext = isNextVersion(version);
    console.log(
      `[${index + 1}/${pkgs.length}] Publish package ${name} ${isNext ? 'with next tag' : ''}`,
    );
    const cliArgs = isNext
      ? ['publish', '--tag', 'next', '--registry', userRegistry]
      : ['publish', '--registry', userRegistry];

    const { stdout } = execa.sync('npm', cliArgs, {
      cwd: pkgPath,
    });
    console.log(stdout);
  });

  await exec('npm', ['run', 'prettier']);

  logStep('done');
}

release().catch((err) => {
  console.error(err);
  process.exit(1);
});
