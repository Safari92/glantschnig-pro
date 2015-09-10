#!/usr/bin/env bash
set -e

# System Setup
yum install -y epel-release git-core
yum install -y nodejs npm
npm install tsd -g

cat > /etc/yum.repos.d/mongodb.repo << EOL
[mongodb-org-2.6]
name=MongoDB 2.6 Repository
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
gpgcheck=0
enabled=1
EOL

yum -y install mongodb-org mongodb-org-server

service mongod start