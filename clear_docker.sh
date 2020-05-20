#!/bin/bash
echo $(rm -rf prisma/migrations)
echo $(docker stop $(docker ps -aq))
echo $(docker rm $(docker ps -a -q))
echo $(docker volume rm prisma2-boilerplate_database)
