import '@aws-cdk/assert/jest';
import { getTeamsMessageFromFindings } from '../src/teams.handler';

test('getTeamsMessage', async () => {
  const finding: AWS.ECR.ImageScanFinding = {
    name: 'CVE-2019-15847',
    severity: 'MEDIUM',
    description: 'The POWER9 backend in GNU Compiler Collection (GCC) before version 10 could optimize multiple calls of the _builtindarn intrinsic into a single call, thus reducing the entropy of the random number generator. This occurred because a volatile operation was not specified. For example, within a single execution of a program, the output of every _builtindarn() call may be the same.',
    uri: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-15847',
    attributes: [
      {
        key: 'package_version',
        value: '9.2.0-r4',
      },
      {
        key: 'package_name',
        value: 'gcc',
      },
      {
        key: 'CVSS2_VECTOR',
        value: 'AV:N/AC:L/Au:N/C:P/I:N/A:N',
      },
      {
        key: 'CVSS2_SCORE',
        value: '5',
      },
    ],
  };
  const teamsMessage = getTeamsMessageFromFindings([finding], 'repository-name');

  expect(teamsMessage).toStrictEqual({
    '@context': 'http://schema.org/extensions',
    'title': 'repository-name ECR image scan results',
    'summary': 'repository-name ECR image scan results',
    '@type': 'MessageCard',
    'potentialAction': [
      {
        '@type': 'OpenUri',
        'name': 'See in ECR',
        'targets': [
          {
            os: 'default',
            uri: 'https://eu-central-1.console.aws.amazon.com/ecr/repositories/repository-name/?region=eu-central-1',
          },
        ],
      },
    ],
    'sections': [
      {
        activitySubtitle: '[CVE-2019-15847](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-15847)',
        activityTitle: 'gcc-9.2.0-r4 (MEDIUM)',
        facts: [
          {
            name: 'Description',
            value: 'The POWER9 backend in GNU Compiler Collection (GCC) before version 10 could optimize multiple calls of the _builtindarn intrinsic into a single call, thus reducing the entropy of the random number generator. This occurred because a volatile operation was not specified. For example, within a single execution of a program, the output of every _builtindarn() call may be the same.',
          },
        ],
        markdown: true,
      },
    ],
    'themeColor': '0076D7',
  });
});
