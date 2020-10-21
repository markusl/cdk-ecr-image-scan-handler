export const ExampleFindings = {
  imageScanFindings: {
    findings: [
      {
        name: 'RHSA-2020:3908',
        description: 'The cpio packages provide the GNU cpio utility for creating and extracting archives, or copying files from one place to another. Security Fix(es): * cpio: improper input validation when writing tar header fields leads to unexpect tar generation (CVE-2019-14866) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3908',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '2.11-27.el7',
          },
          {
            key: 'package_name',
            value: 'cpio',
          },
        ],
      },
      {
        name: 'RHSA-2020:3916',
        description: 'The curl packages provide the libcurl library and the curl utility for downloading files from servers using various protocols, including HTTP, FTP, and LDAP. Security Fix(es): * curl: heap buffer overflow in function tftp_receive_packet() (CVE-2019-5482) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3916',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '7.29.0-57.el7_8.1',
          },
          {
            key: 'package_name',
            value: 'curl',
          },
        ],
      },
      {
        name: 'RHSA-2020:4032',
        description: 'D-Bus is a system for sending messages between applications. It is used both for the system-wide message bus service, and as a per-user-login-session messaging facility. Security Fix(es): * dbus: DBusServer DBUS_COOKIE_SHA1 authentication bypass (CVE-2019-12749) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4032',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '1:1.10.24-14.el7_8',
          },
          {
            key: 'package_name',
            value: 'dbus',
          },
        ],
      },
      {
        name: 'RHSA-2020:4032',
        description: 'D-Bus is a system for sending messages between applications. It is used both for the system-wide message bus service, and as a per-user-login-session messaging facility. Security Fix(es): * dbus: DBusServer DBUS_COOKIE_SHA1 authentication bypass (CVE-2019-12749) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4032',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '1:1.10.24-14.el7_8',
          },
          {
            key: 'package_name',
            value: 'dbus-libs',
          },
        ],
      },
      {
        name: 'RHSA-2020:4011',
        description: 'The e2fsprogs packages provide a number of utilities for creating, checking, modifying, and correcting the ext2, ext3, and ext4 file systems. Security Fix(es): * e2fsprogs: Crafted ext4 partition leads to out-of-bounds write (CVE-2019-5094) * e2fsprogs: Out-of-bounds write in e2fsck/rehash.c (CVE-2019-5188) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4011',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '1.42.9-17.el7',
          },
          {
            key: 'package_name',
            value: 'e2fsprogs-libs',
          },
        ],
      },
      {
        name: 'RHSA-2020:3952',
        description: 'Expat is a C library for parsing XML documents. Security Fix(es): * expat: large number of colons in input makes parser consume high amount of resources, leading to DoS (CVE-2018-20843) * expat: heap-based buffer over-read via crafted XML input (CVE-2019-15903) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3952',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '2.1.0-11.el7',
          },
          {
            key: 'package_name',
            value: 'expat',
          },
        ],
      },
      {
        name: 'RHSA-2020:3978',
        description: 'GLib provides the core application building blocks for libraries and applications written in C. It provides the core object system used in GNOME, the main loop implementation, and a large set of utility functions for strings and common data structures. The Intelligent Input Bus (IBus) is an input method framework for multilingual input in Unix-like operating systems. Security Fix(es): * glib2: file_copy_fallback in gio/gfile.c in GNOME GLib does not properly restrict file permissions while a copy operation is in progress (CVE-2019-12450) * ibus: missing authorization allows local attacker to access the input bus of another user (CVE-2019-14822) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3978',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '2.56.1-5.el7',
          },
          {
            key: 'package_name',
            value: 'glib2',
          },
        ],
      },
      {
        name: 'RHSA-2020:4011',
        description: 'The e2fsprogs packages provide a number of utilities for creating, checking, modifying, and correcting the ext2, ext3, and ext4 file systems. Security Fix(es): * e2fsprogs: Crafted ext4 partition leads to out-of-bounds write (CVE-2019-5094) * e2fsprogs: Out-of-bounds write in e2fsck/rehash.c (CVE-2019-5188) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4011',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '1.42.9-17.el7',
          },
          {
            key: 'package_name',
            value: 'libcom_err',
          },
        ],
      },
      {
        name: 'RHSA-2020:3916',
        description: 'The curl packages provide the libcurl library and the curl utility for downloading files from servers using various protocols, including HTTP, FTP, and LDAP. Security Fix(es): * curl: heap buffer overflow in function tftp_receive_packet() (CVE-2019-5482) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3916',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '7.29.0-57.el7_8.1',
          },
          {
            key: 'package_name',
            value: 'libcurl',
          },
        ],
      },
      {
        name: 'RHSA-2020:3915',
        description: 'The libssh2 packages provide a library that implements the SSH2 protocol. Security Fix(es): * libssh2: integer overflow in SSH_MSG_DISCONNECT logic in packet.c (CVE-2019-17498) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3915',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '1.8.0-3.el7',
          },
          {
            key: 'package_name',
            value: 'libssh2',
          },
        ],
      },
      {
        name: 'RHSA-2020:3996',
        description: 'The libxml2 library is a development toolbox providing the implementation of various XML standards. Security Fix(es): * libxml2: memory leak in xmlParseBalancedChunkMemoryRecover in parser.c (CVE-2019-19956) * libxml2: memory leak in xmlSchemaPreRun in xmlschemas.c (CVE-2019-20388) * libxml2: infinite loop in xmlStringLenDecodeEntities in some end-of-file situations (CVE-2020-7595) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3996',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '2.9.1-6.el7.4',
          },
          {
            key: 'package_name',
            value: 'libxml2',
          },
        ],
      },
      {
        name: 'RHSA-2020:3996',
        description: 'The libxml2 library is a development toolbox providing the implementation of various XML standards. Security Fix(es): * libxml2: memory leak in xmlParseBalancedChunkMemoryRecover in parser.c (CVE-2019-19956) * libxml2: memory leak in xmlSchemaPreRun in xmlschemas.c (CVE-2019-20388) * libxml2: infinite loop in xmlStringLenDecodeEntities in some end-of-file situations (CVE-2020-7595) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3996',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '2.9.1-6.el7.4',
          },
          {
            key: 'package_name',
            value: 'libxml2-python',
          },
        ],
      },
      {
        name: 'RHSA-2020:4076',
        description: 'Network Security Services (NSS) is a set of libraries designed to support the cross-platform development of security-enabled client and server applications. Netscape Portable Runtime (NSPR) provides platform independence for non-GUI operating system facilities. The following packages have been upgraded to a later upstream version: nss (3.53.1), nss-softokn (3.53.1), nss-util (3.53.1), nspr (4.25.0). (BZ#1804262, BZ#1804264, BZ#1804271, BZ#1804273) Security Fix(es): * nss: Out-of-bounds read when importing curve25519 private key (CVE-2019-11719) * nss: Use-after-free in sftk_FreeSession due to improper refcounting (CVE-2019-11756) * nss: Check length of inputs for cryptographic primitives (CVE-2019-17006) * nss: Side channel attack on ECDSA signature generation (CVE-2020-6829) * nss: P-384 and P-521 implementation uses a side-channel vulnerable modular inversion function (CVE-2020-12400) * nss: ECDSA timing attack mitigation bypass (CVE-2020-12401) * nss: Side channel vulnerabilities during RSA key generation (CVE-2020-12402) * nss: CHACHA20-POLY1305 decryption with undersized tag leads to out-of-bounds read (CVE-2020-12403) * nss: PKCS#1 v1.5 signatures can be used for TLS 1.3 (CVE-2019-11727) * nss: TLS 1.3 HelloRetryRequest downgrade request sets client into invalid state (CVE-2019-17023) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Bug Fix(es): * Memory leak: libcurl leaks 120 bytes on each connection (BZ#1688958) * NSS does not set downgrade sentinel in ServerHello.random for TLS 1.0 and TLS 1.1 (BZ#1712924) * Make TLS 1.3 work in FIPS mode (BZ#1724251) * Name Constraints validation: CN treated as DNS name even when syntactically invalid as DNS name (BZ#1737910) * x25519 allowed in FIPS mode (BZ#1754518) * When NSS_SDB_USE_CACHE not set, after curl access https, dentry increase but never released - consider alternative algorithm for benchmarking ACCESS call in sdb_measureAccess (BZ#1779325) * Running ipa-backup continuously causes httpd to crash and makes it irrecoverable (BZ#1804015) * nss needs to comply to the new SP800-56A rev 3 requirements (BZ#1857308) * KDF-self-tests-induced changes for nss in RHEL 7.9 (BZ#1870885)',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4076',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '4.21.0-1.el7',
          },
          {
            key: 'package_name',
            value: 'nspr',
          },
        ],
      },
      {
        name: 'RHSA-2020:4076',
        description: 'Network Security Services (NSS) is a set of libraries designed to support the cross-platform development of security-enabled client and server applications. Netscape Portable Runtime (NSPR) provides platform independence for non-GUI operating system facilities. The following packages have been upgraded to a later upstream version: nss (3.53.1), nss-softokn (3.53.1), nss-util (3.53.1), nspr (4.25.0). (BZ#1804262, BZ#1804264, BZ#1804271, BZ#1804273) Security Fix(es): * nss: Out-of-bounds read when importing curve25519 private key (CVE-2019-11719) * nss: Use-after-free in sftk_FreeSession due to improper refcounting (CVE-2019-11756) * nss: Check length of inputs for cryptographic primitives (CVE-2019-17006) * nss: Side channel attack on ECDSA signature generation (CVE-2020-6829) * nss: P-384 and P-521 implementation uses a side-channel vulnerable modular inversion function (CVE-2020-12400) * nss: ECDSA timing attack mitigation bypass (CVE-2020-12401) * nss: Side channel vulnerabilities during RSA key generation (CVE-2020-12402) * nss: CHACHA20-POLY1305 decryption with undersized tag leads to out-of-bounds read (CVE-2020-12403) * nss: PKCS#1 v1.5 signatures can be used for TLS 1.3 (CVE-2019-11727) * nss: TLS 1.3 HelloRetryRequest downgrade request sets client into invalid state (CVE-2019-17023) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Bug Fix(es): * Memory leak: libcurl leaks 120 bytes on each connection (BZ#1688958) * NSS does not set downgrade sentinel in ServerHello.random for TLS 1.0 and TLS 1.1 (BZ#1712924) * Make TLS 1.3 work in FIPS mode (BZ#1724251) * Name Constraints validation: CN treated as DNS name even when syntactically invalid as DNS name (BZ#1737910) * x25519 allowed in FIPS mode (BZ#1754518) * When NSS_SDB_USE_CACHE not set, after curl access https, dentry increase but never released - consider alternative algorithm for benchmarking ACCESS call in sdb_measureAccess (BZ#1779325) * Running ipa-backup continuously causes httpd to crash and makes it irrecoverable (BZ#1804015) * nss needs to comply to the new SP800-56A rev 3 requirements (BZ#1857308) * KDF-self-tests-induced changes for nss in RHEL 7.9 (BZ#1870885)',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4076',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '3.44.0-7.el7_7',
          },
          {
            key: 'package_name',
            value: 'nss',
          },
        ],
      },
      {
        name: 'RHSA-2020:4076',
        description: 'Network Security Services (NSS) is a set of libraries designed to support the cross-platform development of security-enabled client and server applications. Netscape Portable Runtime (NSPR) provides platform independence for non-GUI operating system facilities. The following packages have been upgraded to a later upstream version: nss (3.53.1), nss-softokn (3.53.1), nss-util (3.53.1), nspr (4.25.0). (BZ#1804262, BZ#1804264, BZ#1804271, BZ#1804273) Security Fix(es): * nss: Out-of-bounds read when importing curve25519 private key (CVE-2019-11719) * nss: Use-after-free in sftk_FreeSession due to improper refcounting (CVE-2019-11756) * nss: Check length of inputs for cryptographic primitives (CVE-2019-17006) * nss: Side channel attack on ECDSA signature generation (CVE-2020-6829) * nss: P-384 and P-521 implementation uses a side-channel vulnerable modular inversion function (CVE-2020-12400) * nss: ECDSA timing attack mitigation bypass (CVE-2020-12401) * nss: Side channel vulnerabilities during RSA key generation (CVE-2020-12402) * nss: CHACHA20-POLY1305 decryption with undersized tag leads to out-of-bounds read (CVE-2020-12403) * nss: PKCS#1 v1.5 signatures can be used for TLS 1.3 (CVE-2019-11727) * nss: TLS 1.3 HelloRetryRequest downgrade request sets client into invalid state (CVE-2019-17023) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Bug Fix(es): * Memory leak: libcurl leaks 120 bytes on each connection (BZ#1688958) * NSS does not set downgrade sentinel in ServerHello.random for TLS 1.0 and TLS 1.1 (BZ#1712924) * Make TLS 1.3 work in FIPS mode (BZ#1724251) * Name Constraints validation: CN treated as DNS name even when syntactically invalid as DNS name (BZ#1737910) * x25519 allowed in FIPS mode (BZ#1754518) * When NSS_SDB_USE_CACHE not set, after curl access https, dentry increase but never released - consider alternative algorithm for benchmarking ACCESS call in sdb_measureAccess (BZ#1779325) * Running ipa-backup continuously causes httpd to crash and makes it irrecoverable (BZ#1804015) * nss needs to comply to the new SP800-56A rev 3 requirements (BZ#1857308) * KDF-self-tests-induced changes for nss in RHEL 7.9 (BZ#1870885)',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4076',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '3.44.0-8.el7_7',
          },
          {
            key: 'package_name',
            value: 'nss-softokn',
          },
        ],
      },
      {
        name: 'RHSA-2020:4076',
        description: 'Network Security Services (NSS) is a set of libraries designed to support the cross-platform development of security-enabled client and server applications. Netscape Portable Runtime (NSPR) provides platform independence for non-GUI operating system facilities. The following packages have been upgraded to a later upstream version: nss (3.53.1), nss-softokn (3.53.1), nss-util (3.53.1), nspr (4.25.0). (BZ#1804262, BZ#1804264, BZ#1804271, BZ#1804273) Security Fix(es): * nss: Out-of-bounds read when importing curve25519 private key (CVE-2019-11719) * nss: Use-after-free in sftk_FreeSession due to improper refcounting (CVE-2019-11756) * nss: Check length of inputs for cryptographic primitives (CVE-2019-17006) * nss: Side channel attack on ECDSA signature generation (CVE-2020-6829) * nss: P-384 and P-521 implementation uses a side-channel vulnerable modular inversion function (CVE-2020-12400) * nss: ECDSA timing attack mitigation bypass (CVE-2020-12401) * nss: Side channel vulnerabilities during RSA key generation (CVE-2020-12402) * nss: CHACHA20-POLY1305 decryption with undersized tag leads to out-of-bounds read (CVE-2020-12403) * nss: PKCS#1 v1.5 signatures can be used for TLS 1.3 (CVE-2019-11727) * nss: TLS 1.3 HelloRetryRequest downgrade request sets client into invalid state (CVE-2019-17023) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Bug Fix(es): * Memory leak: libcurl leaks 120 bytes on each connection (BZ#1688958) * NSS does not set downgrade sentinel in ServerHello.random for TLS 1.0 and TLS 1.1 (BZ#1712924) * Make TLS 1.3 work in FIPS mode (BZ#1724251) * Name Constraints validation: CN treated as DNS name even when syntactically invalid as DNS name (BZ#1737910) * x25519 allowed in FIPS mode (BZ#1754518) * When NSS_SDB_USE_CACHE not set, after curl access https, dentry increase but never released - consider alternative algorithm for benchmarking ACCESS call in sdb_measureAccess (BZ#1779325) * Running ipa-backup continuously causes httpd to crash and makes it irrecoverable (BZ#1804015) * nss needs to comply to the new SP800-56A rev 3 requirements (BZ#1857308) * KDF-self-tests-induced changes for nss in RHEL 7.9 (BZ#1870885)',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4076',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '3.44.0-8.el7_7',
          },
          {
            key: 'package_name',
            value: 'nss-softokn-freebl',
          },
        ],
      },
      {
        name: 'RHSA-2020:4076',
        description: 'Network Security Services (NSS) is a set of libraries designed to support the cross-platform development of security-enabled client and server applications. Netscape Portable Runtime (NSPR) provides platform independence for non-GUI operating system facilities. The following packages have been upgraded to a later upstream version: nss (3.53.1), nss-softokn (3.53.1), nss-util (3.53.1), nspr (4.25.0). (BZ#1804262, BZ#1804264, BZ#1804271, BZ#1804273) Security Fix(es): * nss: Out-of-bounds read when importing curve25519 private key (CVE-2019-11719) * nss: Use-after-free in sftk_FreeSession due to improper refcounting (CVE-2019-11756) * nss: Check length of inputs for cryptographic primitives (CVE-2019-17006) * nss: Side channel attack on ECDSA signature generation (CVE-2020-6829) * nss: P-384 and P-521 implementation uses a side-channel vulnerable modular inversion function (CVE-2020-12400) * nss: ECDSA timing attack mitigation bypass (CVE-2020-12401) * nss: Side channel vulnerabilities during RSA key generation (CVE-2020-12402) * nss: CHACHA20-POLY1305 decryption with undersized tag leads to out-of-bounds read (CVE-2020-12403) * nss: PKCS#1 v1.5 signatures can be used for TLS 1.3 (CVE-2019-11727) * nss: TLS 1.3 HelloRetryRequest downgrade request sets client into invalid state (CVE-2019-17023) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Bug Fix(es): * Memory leak: libcurl leaks 120 bytes on each connection (BZ#1688958) * NSS does not set downgrade sentinel in ServerHello.random for TLS 1.0 and TLS 1.1 (BZ#1712924) * Make TLS 1.3 work in FIPS mode (BZ#1724251) * Name Constraints validation: CN treated as DNS name even when syntactically invalid as DNS name (BZ#1737910) * x25519 allowed in FIPS mode (BZ#1754518) * When NSS_SDB_USE_CACHE not set, after curl access https, dentry increase but never released - consider alternative algorithm for benchmarking ACCESS call in sdb_measureAccess (BZ#1779325) * Running ipa-backup continuously causes httpd to crash and makes it irrecoverable (BZ#1804015) * nss needs to comply to the new SP800-56A rev 3 requirements (BZ#1857308) * KDF-self-tests-induced changes for nss in RHEL 7.9 (BZ#1870885)',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4076',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '3.44.0-7.el7_7',
          },
          {
            key: 'package_name',
            value: 'nss-sysinit',
          },
        ],
      },
      {
        name: 'RHSA-2020:4076',
        description: 'Network Security Services (NSS) is a set of libraries designed to support the cross-platform development of security-enabled client and server applications. Netscape Portable Runtime (NSPR) provides platform independence for non-GUI operating system facilities. The following packages have been upgraded to a later upstream version: nss (3.53.1), nss-softokn (3.53.1), nss-util (3.53.1), nspr (4.25.0). (BZ#1804262, BZ#1804264, BZ#1804271, BZ#1804273) Security Fix(es): * nss: Out-of-bounds read when importing curve25519 private key (CVE-2019-11719) * nss: Use-after-free in sftk_FreeSession due to improper refcounting (CVE-2019-11756) * nss: Check length of inputs for cryptographic primitives (CVE-2019-17006) * nss: Side channel attack on ECDSA signature generation (CVE-2020-6829) * nss: P-384 and P-521 implementation uses a side-channel vulnerable modular inversion function (CVE-2020-12400) * nss: ECDSA timing attack mitigation bypass (CVE-2020-12401) * nss: Side channel vulnerabilities during RSA key generation (CVE-2020-12402) * nss: CHACHA20-POLY1305 decryption with undersized tag leads to out-of-bounds read (CVE-2020-12403) * nss: PKCS#1 v1.5 signatures can be used for TLS 1.3 (CVE-2019-11727) * nss: TLS 1.3 HelloRetryRequest downgrade request sets client into invalid state (CVE-2019-17023) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Bug Fix(es): * Memory leak: libcurl leaks 120 bytes on each connection (BZ#1688958) * NSS does not set downgrade sentinel in ServerHello.random for TLS 1.0 and TLS 1.1 (BZ#1712924) * Make TLS 1.3 work in FIPS mode (BZ#1724251) * Name Constraints validation: CN treated as DNS name even when syntactically invalid as DNS name (BZ#1737910) * x25519 allowed in FIPS mode (BZ#1754518) * When NSS_SDB_USE_CACHE not set, after curl access https, dentry increase but never released - consider alternative algorithm for benchmarking ACCESS call in sdb_measureAccess (BZ#1779325) * Running ipa-backup continuously causes httpd to crash and makes it irrecoverable (BZ#1804015) * nss needs to comply to the new SP800-56A rev 3 requirements (BZ#1857308) * KDF-self-tests-induced changes for nss in RHEL 7.9 (BZ#1870885)',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4076',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '3.44.0-7.el7_7',
          },
          {
            key: 'package_name',
            value: 'nss-tools',
          },
        ],
      },
      {
        name: 'RHSA-2020:4076',
        description: 'Network Security Services (NSS) is a set of libraries designed to support the cross-platform development of security-enabled client and server applications. Netscape Portable Runtime (NSPR) provides platform independence for non-GUI operating system facilities. The following packages have been upgraded to a later upstream version: nss (3.53.1), nss-softokn (3.53.1), nss-util (3.53.1), nspr (4.25.0). (BZ#1804262, BZ#1804264, BZ#1804271, BZ#1804273) Security Fix(es): * nss: Out-of-bounds read when importing curve25519 private key (CVE-2019-11719) * nss: Use-after-free in sftk_FreeSession due to improper refcounting (CVE-2019-11756) * nss: Check length of inputs for cryptographic primitives (CVE-2019-17006) * nss: Side channel attack on ECDSA signature generation (CVE-2020-6829) * nss: P-384 and P-521 implementation uses a side-channel vulnerable modular inversion function (CVE-2020-12400) * nss: ECDSA timing attack mitigation bypass (CVE-2020-12401) * nss: Side channel vulnerabilities during RSA key generation (CVE-2020-12402) * nss: CHACHA20-POLY1305 decryption with undersized tag leads to out-of-bounds read (CVE-2020-12403) * nss: PKCS#1 v1.5 signatures can be used for TLS 1.3 (CVE-2019-11727) * nss: TLS 1.3 HelloRetryRequest downgrade request sets client into invalid state (CVE-2019-17023) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Bug Fix(es): * Memory leak: libcurl leaks 120 bytes on each connection (BZ#1688958) * NSS does not set downgrade sentinel in ServerHello.random for TLS 1.0 and TLS 1.1 (BZ#1712924) * Make TLS 1.3 work in FIPS mode (BZ#1724251) * Name Constraints validation: CN treated as DNS name even when syntactically invalid as DNS name (BZ#1737910) * x25519 allowed in FIPS mode (BZ#1754518) * When NSS_SDB_USE_CACHE not set, after curl access https, dentry increase but never released - consider alternative algorithm for benchmarking ACCESS call in sdb_measureAccess (BZ#1779325) * Running ipa-backup continuously causes httpd to crash and makes it irrecoverable (BZ#1804015) * nss needs to comply to the new SP800-56A rev 3 requirements (BZ#1857308) * KDF-self-tests-induced changes for nss in RHEL 7.9 (BZ#1870885)',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4076',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '3.44.0-4.el7_7',
          },
          {
            key: 'package_name',
            value: 'nss-util',
          },
        ],
      },
      {
        name: 'RHSA-2020:4041',
        description: 'OpenLDAP is an open-source suite of Lightweight Directory Access Protocol (LDAP) applications and development tools. LDAP is a set of protocols used to access and maintain distributed directory information services over an IP network. The openldap packages contain configuration files, libraries, and documentation for OpenLDAP. Security Fix(es): * openldap: denial of service via nested boolean expressions in LDAP search filters (CVE-2020-12243) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4041',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '2.4.44-21.el7_6',
          },
          {
            key: 'package_name',
            value: 'openldap',
          },
        ],
      },
      {
        name: 'RHSA-2020:3911',
        description: 'Python is an interpreted, interactive, object-oriented programming language, which includes modules, classes, exceptions, very high level dynamic data types and dynamic typing. Python supports interfaces to many system calls and libraries, as well as to various windowing systems. Security Fix(es): * python: XSS vulnerability in the documentation XML-RPC server in server_title field (CVE-2019-16935) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3911',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '2.7.5-88.el7',
          },
          {
            key: 'package_name',
            value: 'python',
          },
        ],
      },
      {
        name: 'RHSA-2020:3911',
        description: 'Python is an interpreted, interactive, object-oriented programming language, which includes modules, classes, exceptions, very high level dynamic data types and dynamic typing. Python supports interfaces to many system calls and libraries, as well as to various windowing systems. Security Fix(es): * python: XSS vulnerability in the documentation XML-RPC server in server_title field (CVE-2019-16935) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3911',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '2.7.5-88.el7',
          },
          {
            key: 'package_name',
            value: 'python-libs',
          },
        ],
      },
      {
        name: 'RHSA-2020:3888',
        description: 'Python is an interpreted, interactive, object-oriented programming language, which includes modules, classes, exceptions, very high level dynamic data types and dynamic typing. Python supports interfaces to many system calls and libraries, as well as to various windowing systems.  Security Fix(es): * python: XSS vulnerability in the documentation XML-RPC server in server_title field (CVE-2019-16935) * python: wrong backtracking in urllib.request.AbstractBasicAuthHandler allows for a ReDoS (CVE-2020-8492) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3888',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '3.6.8-13.el7',
          },
          {
            key: 'package_name',
            value: 'python3',
          },
        ],
      },
      {
        name: 'RHSA-2020:3888',
        description: 'Python is an interpreted, interactive, object-oriented programming language, which includes modules, classes, exceptions, very high level dynamic data types and dynamic typing. Python supports interfaces to many system calls and libraries, as well as to various windowing systems.  Security Fix(es): * python: XSS vulnerability in the documentation XML-RPC server in server_title field (CVE-2019-16935) * python: wrong backtracking in urllib.request.AbstractBasicAuthHandler allows for a ReDoS (CVE-2020-8492) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3888',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '3.6.8-13.el7',
          },
          {
            key: 'package_name',
            value: 'python3-libs',
          },
        ],
      },
      {
        name: 'RHSA-2020:2068',
        description: "pip is a package management system used to install and manage software packages written in Python. Many packages can be found in the Python Package Index (PyPI). pip is a recursive acronym that can stand for either \"Pip Installs Packages\" or \"Pip Installs Python\" Security Fix(es): * python-urllib3: Cross-host redirect does not remove Authorization header allow for credential exposure (CVE-2018-20060) * python-urllib3: CRLF injection due to not encoding the '\\r\\n' sequence leading to possible attack on internal service (CVE-2019-11236) * python-urllib3: Certification mishandle when error should be thrown (CVE-2019-11324) * python-requests: Redirect from HTTPS to HTTP does not remove Authorization header (CVE-2018-18074) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section.",
        uri: 'https://access.redhat.com/errata/RHSA-2020:2068',
        severity: 'MEDIUM',
        attributes: [
          {
            key: 'package_version',
            value: '9.0.3-7.el7_7',
          },
          {
            key: 'package_name',
            value: 'python3-pip',
          },
        ],
      },
      {
        name: 'RHSA-2020:3861',
        description: 'The glibc packages provide the standard C libraries (libc), POSIX thread libraries (libpthread), standard math libraries (libm), and the name service cache daemon (nscd) used by multiple programs on the system. Without these libraries, the Linux system cannot function correctly. Security Fix(es): * glibc: LD_PREFER_MAP_32BIT_EXEC not ignored in setuid binaries (CVE-2019-19126) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3861',
        severity: 'LOW',
        attributes: [
          {
            key: 'package_version',
            value: '2.17-307.el7.1',
          },
          {
            key: 'package_name',
            value: 'glibc',
          },
        ],
      },
      {
        name: 'RHSA-2020:3861',
        description: 'The glibc packages provide the standard C libraries (libc), POSIX thread libraries (libpthread), standard math libraries (libm), and the name service cache daemon (nscd) used by multiple programs on the system. Without these libraries, the Linux system cannot function correctly. Security Fix(es): * glibc: LD_PREFER_MAP_32BIT_EXEC not ignored in setuid binaries (CVE-2019-19126) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:3861',
        severity: 'LOW',
        attributes: [
          {
            key: 'package_version',
            value: '2.17-307.el7.1',
          },
          {
            key: 'package_name',
            value: 'glibc-common',
          },
        ],
      },
      {
        name: 'RHSA-2020:4007',
        description: 'The systemd packages contain systemd, a system and service manager for Linux, compatible with the SysV and LSB init scripts. It provides aggressive parallelism capabilities, uses socket and D-Bus activation for starting services, offers on-demand starting of daemons, and keeps track of processes using Linux cgroups. In addition, it supports snapshotting and restoring of the system state, maintains mount and automount points, and implements an elaborate transactional dependency-based service control logic. It can also work as a drop-in replacement for sysvinit. Security Fix(es): * systemd: memory leak in button_open() in login/logind-button.c when udev events are received (CVE-2019-20386) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4007',
        severity: 'LOW',
        attributes: [
          {
            key: 'package_version',
            value: '219-73.el7_8.9',
          },
          {
            key: 'package_name',
            value: 'systemd',
          },
        ],
      },
      {
        name: 'RHSA-2020:4007',
        description: 'The systemd packages contain systemd, a system and service manager for Linux, compatible with the SysV and LSB init scripts. It provides aggressive parallelism capabilities, uses socket and D-Bus activation for starting services, offers on-demand starting of daemons, and keeps track of processes using Linux cgroups. In addition, it supports snapshotting and restoring of the system state, maintains mount and automount points, and implements an elaborate transactional dependency-based service control logic. It can also work as a drop-in replacement for sysvinit. Security Fix(es): * systemd: memory leak in button_open() in login/logind-button.c when udev events are received (CVE-2019-20386) For more details about the security issue(s), including the impact, a CVSS score, acknowledgments, and other related information, refer to the CVE page(s) listed in the References section. Additional Changes: For detailed information on changes in this release, see the Red Hat Enterprise Linux 7.9 Release Notes linked from the References section.',
        uri: 'https://access.redhat.com/errata/RHSA-2020:4007',
        severity: 'LOW',
        attributes: [
          {
            key: 'package_version',
            value: '219-73.el7_8.9',
          },
          {
            key: 'package_name',
            value: 'systemd-libs',
          },
        ],
      },
    ],
    imageScanCompletedAt: '2020-10-21T16:51:26+03:00',
    vulnerabilitySourceUpdatedAt: '2020-10-21T08:45:53+03:00',
    findingSeverityCounts: {
      MEDIUM: 25,
      LOW: 4,
    },
  },
  registryId: '207507657282',
  repositoryName: 'repository-name',
  imageId: {
    imageDigest: 'sha256:example-sha',
    imageTag: 'latest',
  },
  imageScanStatus: {
    status: 'COMPLETE',
    description: 'The scan was completed successfully.',
  },
};
