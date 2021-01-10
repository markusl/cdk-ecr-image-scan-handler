import '@aws-cdk/assert/jest';
import * as ECR from '@aws-sdk/client-ecr';
import { getTeamsMessageFromFindings } from '../src/teams.TeamsHandler';
import { ExampleFindings } from './exampleFindings';

test('getTeamsMessageFromFindings basic case', async () => {
  const finding: ECR.ImageScanFinding = {
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
    'title': 'repository-name scan completed with 1 findings',
    'summary': 'repository-name scan completed with 1 findings',
    '@type': 'MessageCard',
    'potentialAction': [
      {
        '@type': 'OpenUri',
        'name': 'Inspect findings for repository-name in AWS Console',
        'targets': [
          {
            os: 'default',
            uri: 'https://us-east-1.console.aws.amazon.com/ecr/repositories/repository-name/?region=us-east-1',
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

test('getTeamsMessageFromFindings with large input', async () => {
  const teamsMessage = getTeamsMessageFromFindings(ExampleFindings.imageScanFindings.findings, 'repository-name');
  console.log(JSON.stringify(teamsMessage));
  expect(teamsMessage).toStrictEqual( {
    '@type': 'MessageCard',
    '@context': 'http://schema.org/extensions',
    'title': 'repository-name scan completed with 29 findings',
    'summary': 'repository-name scan completed with 29 findings',
    'themeColor': '0076D7',
    'sections': [{
      activityTitle: 'cpio-2.11-27.el7 (MEDIUM)',
      activitySubtitle: '[RHSA-2020:3908](https://access.redhat.com/errata/RHSA-2020:3908)',
      facts: [{
        name: 'Description',
        value: 'The cpio packages provide the GNU cpio utility for creating and extracting archives, or copying files from one place to another. Security Fix(es): * cpio: improper input validation when writing tar header fields leads to unexpect tar generation (CVE-2019-14866) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
      }],
      markdown: true,
    }, {
      activityTitle: 'curl-7.29.0-57.el7_8.1 (MEDIUM)',
      activitySubtitle: '[RHSA-2020:3916](https://access.redhat.com/errata/RHSA-2020:3916)',
      facts: [{
        name: 'Description',
        value: 'The curl packages provide the libcurl library and the curl utility for downloading files from servers using various protocols, including HTTP, FTP, and LDAP. Security Fix(es): * curl: heap buffer overflow in function tftp_receive_packet() (CVE-2019-5482) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
      }],
      markdown: true,
    }, {
      activityTitle: 'dbus-1:1.10.24-14.el7_8 (MEDIUM)',
      activitySubtitle: '[RHSA-2020:4032](https://access.redhat.com/errata/RHSA-2020:4032)',
      facts: [{
        name: 'Description',
        value: 'D-Bus is a system for sending messages between applications. It is used both for the system-wide message bus service, and as a per-user-login-session messaging facility. Security Fix(es): * dbus: DBusServer DBUS_COOKIE_SHA1 authentication bypass (CVE-2019-12749) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
      }],
      markdown: true,
    }, {
      activityTitle: 'dbus-libs-1:1.10.24-14.el7_8 (MEDIUM)',
      activitySubtitle: '[RHSA-2020:4032](https://access.redhat.com/errata/RHSA-2020:4032)',
      facts: [{
        name: 'Description',
        value: 'D-Bus is a system for sending messages between applications. It is used both for the system-wide message bus service, and as a per-user-login-session messaging facility. Security Fix(es): * dbus: DBusServer DBUS_COOKIE_SHA1 authentication bypass (CVE-2019-12749) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
      }],
      markdown: true,
    }, {
      activityTitle: 'e2fsprogs-libs-1.42.9-17.el7 (MEDIUM)',
      activitySubtitle: '[RHSA-2020:4011](https://access.redhat.com/errata/RHSA-2020:4011)',
      facts: [{
        name: 'Description',
        value: 'The e2fsprogs packages provide a number of utilities for creating, checking, modifying, and correcting the ext2, ext3, and ext4 file systems. Security Fix(es): * e2fsprogs: Crafted ext4 partition leads to out-of-bounds write (CVE-2019-5094) * e2fsprogs: Out-of-bounds write in e2fsck/rehash.c (CVE-2019-5188) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
      }],
      markdown: true,
    }],
    'potentialAction': [{
      '@type': 'OpenUri',
      'name': 'Inspect findings for repository-name in AWS Console',
      'targets': [{
        os: 'default',
        uri: 'https://us-east-1.console.aws.amazon.com/ecr/repositories/repository-name/?region=us-east-1',
      }],
    }],
  });
});
