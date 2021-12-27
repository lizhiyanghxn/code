/**
 * @example
 *   yarn run release // 不带任何参数，发布监测到变动的包，自动根据 Conventional Commits 升级版本(feat->次要版本, 只有fix->补丁版本)
 *   yarn run release -- --prerelease @sensetime/pro-spe // 指定spe发布预发布版本alpha; 其他包和不传参效果一样
 *   yarn run release -- --graduate @sensetime/pro-spe // 若spe包处于预发布状态则升级为稳定版本（即使无变动); 若spe不处于预发布版本和不传参数效果一样; 其他包和不传参效果一样
 *   yarn run release -- --skip-build // 跳过build步骤
 *
 * @param prerelease 发布预发布版本alpha, 可以指定包名 --prerelease package1,package2, 没有指定的包如果有变动也会发布（和不传参效果一样）
 * @param graduate 指定包名 --graduate package1,package2，对于处于预发布的包升级为稳定版本并具有forcePublish的效果，其他包与不传参效果一样
 * @param releaseAs 指定版本[major | minor | patch | premajor | preminor | prepatch | prerelease ｜ 1.0.0]
 * @param skipBuild 跳过 npm run build
 * @param isNext Npm publish 的 dist-tag 为 next，用户执行 npm install 时不会升级此版本
 * @param forcePublish 强制发布指定包（--force-publish package1,package2）或所有包（不带值），会跳过 lerna changed 检测
 *
 * 参数说明：(1)可以不传任何参数，自动根据提交记录升级版本。(2)指定releaseas，会发布所有包而不管是否有更新，并且在需要二次确认和修改各个子包的升级版本
 */

const exec = require('./utils/exec');
const { yParser, execa, chalk } = require('@umijs/utils');
const lernaCli = require.resolve('lerna/cli');

const args = yParser(process.argv);

function logStep(name) {
  console.log(`${chalk.gray('>> Release:')} ${chalk.magenta.bold(name)}`);
}

async function release() {
  /** Yarn build */
  if (!args.skipBuild) {
    logStep('build');
    await exec('yarn', ['run', 'build']);
    const gitStatus = execa.sync('git', ['status', '--porcelain']).stdout;
    if (gitStatus.length) {
      execa.sync('git', ['add', '.']);
      execa.sync('git', ['commit', '-m', 'chore: build']);
    }
  } else {
    logStep('build is skipped, since args.skipBuild is supplied');
  }

  /** Bump version -> Git commit -> Git Tag -> Git Push -> gitLab release -> Npm publish */
  logStep('bump version with lerna version');
  const conventionalPrerelease = args.prerelease
    ? [
        '--conventional-prerelease' +
          (typeof args.prerelease === 'string' ? `=${args.prerelease}` : ''),
      ]
    : [];
  const conventionalGraduate = args.graduate
    ? ['--conventional-graduate' + (typeof args.graduate === 'string' ? `=${args.graduate}` : '')]
    : [];
  const releaseAs = args.releaseAs ? [args.releaseAs] : [];
  const isYes = args.releaseAs ? [] : ['--yes'];
  const isNext = args.isNext ? ['--dist-tag', 'next'] : [];
  const forcePublish = args.forcePublish
    ? ['--force-publish' + (typeof args.forcePublish === 'string' ? `=${args.forcePublish}` : '')]
    : [];

  await exec(
    lernaCli,
    ['publish', '--no-private']
      .concat(conventionalGraduate)
      .concat(conventionalPrerelease)
      .concat(releaseAs)
      .concat(isNext)
      .concat(forcePublish)
      .concat(isYes),
    {
      shell: false,
    },
  );

  logStep('done');
}

release().catch((err) => {
  console.error(err);
  process.exit(1);
});
